module.exports = function(className, extdenWith, withRedux, {stylesheet, ssPath}) {
return `import React, {${extdenWith}, Fragment} from 'react';
${withRedux ? `import {connect} from 'react-redux';`: ''}
${stylesheet ? `import './${ssPath}';` : ''}

class ${className} extends ${extdenWith} {
  constructor(props) {
    super(props);

    this.state = {}
  }

  //componentDidMount() {}

  //static getDerivedStateFromProps(props, state) { return null; }

  //shouldComponentUpdate(nextProps, nextState) {}

  //componentDidUpdate(prevProps, prevState) {}

  //componentDidCatch(error, info) {}

  //componentWillUnmount() {}



  render() {
    return (
      <Fragment></Fragment>
    );
  }
}

${withRedux ? `const mStP = (state) => {
  return {
    ...state
  }
};


const mAtP = (dispatch) => {
  return {  }
};`
:
''
}

${withRedux ?
  `export default connect(mStP, mAtP)(${className})` :
  `export default ${className}`}
`
}
