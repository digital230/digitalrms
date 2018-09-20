var fs = require('fs');
var {reducerContent, indexReducerExport, i18nIndexContent} = require('./fileContent/reducer.js');


function createFolder(dirName) {
  if (fs.existsSync(dirName)) {
    return false;
  } else{
    fs.mkdirSync(dirName);
    return true;

  }
}


function createFile(path, content = '') {
  if (fs.existsSync(path)) return false;

  try{
    fs.writeFileSync(path, content);
    return true;
  }catch (e){
    console.log("Cannot write file ", e);
  }
}

function addReduxFiles(dirName) {
  let rres = createFolder(`./${dirName}/reducers`);

  let rIndexres = createFile(`./${dirName}/reducers/index.js`, indexReducerExport(dirName));
  let rfres = createFile(`./${dirName}/reducers/${dirName}.js`, reducerContent());

  let acres = createFile(`./${dirName}/action.js`);

}


function addTranslationFiles(dirName) {

  let i18n = createFolder(`./${dirName}/i18n`);

  let i18nenres = createFile(`./${dirName}/i18n/en.js`);

  let i18nsvres = createFile(`./${dirName}/i18n/sv.js`);

  let i18nIndexres = createFile(`./${dirName}/i18n/index.js`, i18nIndexContent());
}


function createMainStructure(name,jsFileName, ext, extendWith, ss, addRedux ) {
  let mainFile = `./${name}/${jsFileName}.${ext}`;
  let fileContent = require('./fileContent/content.js')(jsFileName, extendWith, addRedux, {ssPath: `${name}.${ss}`, stylesheet:ss})
  let mfres = createFile(mainFile, fileContent);
  let mainIndex = createFile(`./${name}/index.js`, `export {default} from './${jsFileName}.${ext}' `);
  let utilres = createFile(`./${name}/util.js`);
  let constres = createFile(`./${name}/constant.js`);
}


module.exports = {
  createFile,
  createFolder,
  addReduxFiles,
  addTranslationFiles,
  createMainStructure
}
