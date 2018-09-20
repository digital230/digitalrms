#! /usr/bin/env node

var program = require('commander');
var fs = require('fs');
var {
  createFolder,
  createFile,
  addReduxFiles,
  addTranslationFiles,
  createMainStructure
} = require('./utils.js');


function run(name, options) {
  let ext = options.ext;
  let ss = options.ss == true ? 'css' : options.ss;
  let addRedux = options.redux;
  let extendWith = 'PureComponent';
  let translation = options.translation;

  console.log(name, ext, ss, addRedux);

  let jsFileName = name.charAt(0).toUpperCase() + name.substr(1);
  let ssFileName = name.toLowerCase();

  let res = createFolder(name);
  if(res === false) {
    console.log('folder already exists');
    return;
  }

  // let mainFile = `./${name}/${jsFileName}.${ext}`;
  // let fileContent = require('./fileContent/content.js')(jsFileName, extendWith, addRedux, {ssPath: `${name}.${ss}`, stylesheet:ss})
  // let mfres = createFile(mainFile, fileContent);
  // let mainIndex = createFile(`./${name}/index.js`, `export {default} from './${jsFileName}.${ext}' `);
  // let utilres = createFile(`./${name}/util.js`);
  // let constres = createFile(`./${name}/constant.js`);

  createMainStructure(name, jsFileName, ext, extendWith, ss, addRedux)


  if(ss) {
    let mainSS = `./${name}/${ssFileName}.${ss}`;
    let ssfres = createFile(mainSS);
  }

  if(addRedux) {
    addReduxFiles(name)
  }

  if(translation) {
    addTranslationFiles(name)
  }


}

program
  .version('1.0.0')
  .option('-e, --ext <type>', 'extention of file', 'js')
  .option('-s, --ss [type]', 'include stylesheet')
  .option('-r, --redux [val]', 'include redux structure', false)
  .option('-t, --translation [val]', 'include translation', false)
  .arguments('<name>')
  .action(run)
  .parse(process.argv);
