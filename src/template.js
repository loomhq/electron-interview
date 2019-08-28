// This file is loaded into index.html.
// This pulls in .js and .css files related
// to the BrowserWindow by looking for
// assets of the same window name

const windowName = window.process.argv
  .filter((arg) => {
    return arg.includes('--windowName=');
  })
  .map((winArg) => {
    return winArg.replace('--windowName=', '');
  });

// Inject js bundle
const scriptElm = document.createElement('script');
scriptElm.src = `./src/renderer/${windowName}.js`;

document.body.appendChild(scriptElm);

// Inject css stylesheet
const styleElm = document.createElement('link');
styleElm.rel = 'stylesheet';
styleElm.type = 'text/css';
styleElm.href = `./css/${windowName}.css`;

document.body.appendChild(styleElm);
