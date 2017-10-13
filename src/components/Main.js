require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DateComp from './DateComp';





class AppComponent extends React.Component {
  render() {
    return (
      <div className="main">
        <MuiThemeProvider>
        <DateComp />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default AppComponent;
