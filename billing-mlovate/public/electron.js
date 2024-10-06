const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const { startServer } = require('../server/app');

// Create the native browser window.
async function createWindow(port) {
  const win = new BrowserWindow({
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadURL(`http://localhost:${port}`);

  // Automatically open Chrome's DevTools in development mode.
  if (isDev) {
    win.webContents.openDevTools({ mode: 'right' });
  } else {
    win.webContents.openDevTools({ mode: 'right' });
  }

  win.once('ready-to-show', () => {
    win.maximize();
    win.show();
  });
}

// This method will be called when Electron has finished its initialization and
// is ready to create the browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  startServer(isDev).then(port => {
    createWindow(port);
  });

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      startServer(isDev).then(port => {
        createWindow(port);
      });
    }
  });
});

// Quit when all windows are closed, except on macOS.
// There, it's common for applications and their menu bar to stay active until
// the user quits  explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
