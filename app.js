const { app, BrowserWindow } = require('electron/main');

const path = require('node:path');
const koffi = require('koffi');
const { ipcMain } = require('electron');
const lib = koffi.load('cpp-libs/bin/Calc-cpp-ffi.dll')
const calculate = lib.func("Calculate", 'double', ['double', 'double', 'int'])

function createWindow () {
  const win = new BrowserWindow({
    width: 400,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.webContents.openDevTools()
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  ipcMain.handle('calculate', (_, op1, op2, op) => {
    console.log(`num - ${op1} ${op2} ${op}`);
    let res = calculate_func(op1, op2, op);
    console.log(`res = ${res}`);
    return res
  })
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


function calculate_func(operand_f, operand_s, operation)
{
  const operands = {
    '+': 0,
    '-': 1,
    '*': 2,
    '/': 3
  }

  if (operation in operands) {
    let res = calculate(Number(operand_f), Number(operand_s), operands[operation]);
    console.log(Number(res));
    return Number(res);
  } else {
    console.error('Undefined operation', operation)
  }
}