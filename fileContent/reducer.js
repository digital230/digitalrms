function reducerContent() {
return `
const initialStates = {};

export default (state = initialStates, {type, payload}) => {
  switch(type) {
    default
      return state
  }
};`
}


function indexReducerExport(dirname) {
  return `export {${dirname}Reducer} from './${dirname}.js'`
}

function i18nIndexContent() {
  return `export {default as sv} from './sv.js';
  export {default as en} from './en.js'; `
}


module.exports = {
  reducerContent,
  indexReducerExport,
  i18nIndexContent
}
