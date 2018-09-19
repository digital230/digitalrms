var fs = require('fs');


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
  let rIndexres = createFile(`./${dirName}/reducers/index.js`);
  let acres = createFile(`./${dirName}/action.js`);
  let utilres = createFile(`./${dirName}/util.js`);
  let i18n = createFolder(`./${dirName}/i18n`);
  let i18nenres = createFile(`./${dirName}/i18n/en.js`);
  let i18nsvres = createFile(`./${dirName}/i18n/sv.js`);

  console.log('reducers', rIndexres)
}


module.exports = {
  createFile,
  createFolder,
  addReduxFiles
}
