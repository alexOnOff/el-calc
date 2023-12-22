// Preload (Isolated World)
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('something',
  {
    calculate: (op1, op2, op) => ipcRenderer.invoke('calculate', op1, op2, op)
  }
)