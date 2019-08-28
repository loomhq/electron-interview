import { BrowserWindow, app } from 'electron';
import electronReload from 'electron-reload';
import path from 'path';

// Auto-reload BrowserWindows
electronReload(__dirname);

const WINDOW_WIDTH = 400;
let xPostion = 0;


const createWindow = (windowName) => {
  // You can use function as a quick way of creating browser windows
  // This will pull in a js bundle and css file with the same
  // window name

  // For each window you create, you can add the following.
  // src/WINDOW_NAME.js
  // css/WINDOW_NAME.css
  let win = new BrowserWindow({
    width: WINDOW_WIDTH,
    height: 600,
    title: windowName,
    x: xPostion ,
    y: 200,
    webPreferences: {
      nodeIntegration: true,
      additionalArguments: [`--windowName=${windowName}`]
    },
  })

  win.loadFile(path.join(__dirname, '../../index.html'));

  xPostion = xPostion + WINDOW_WIDTH;
}

app.on('ready', () => {
  createWindow('first');
});
