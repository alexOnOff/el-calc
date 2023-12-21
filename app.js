const { app, BrowserWindow } = require('electron/main')

const path = require('node:path')
const koffi = require('koffi');
const lib = koffi.load('cpp-libs/bin/Calc-cpp-ffi.dll')

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

function calculate(operand_f, operand_s, operation)
{
    switch(operation)
    {
        case '+':
            
            //let calculate = lib.stdcall('Calculate', 'double', ['double', 'double', 'int']);
            //let res = calculate(Number(operand_f), Number(operand_s), 0);
            //console.log(res);
            return Number(operand_f) + Number(operand_s);
        case '-':
            return Number(operand_f) - Number(operand_s);
        case '*':
            return Number(operand_f) * Number(operand_s);
        case '/':
            if(operand_s == 0)
                return NaN;
            return Number(operand_f) / Number(operand_s);
        default:
            console.error('Undefined operation', operation)
            break;
    }
}

