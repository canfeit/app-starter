// @ts-check
'use strict'
const { app, BrowserWindow } = require('electron')

app.once('ready', () => {
  const mainWindow = new BrowserWindow({
    show: false,
  })
  mainWindow.loadURL(`http://localhost:${port}`)
  mainWindow.maximize()
  mainWindow.once('ready-to-show', mainWindow.show)
  require('./menu')
  require('./upgrade')
  if (process.defaultApp) require('./extension')
  mainWindow.once('close', app.quit)
})

require('./env')
const { port } = require('../common/config')
if (!process.defaultApp) {
  const server = require('child_process').fork(__dirname + '/../server')
  app.once('before-quit', () => server.kill())
}
