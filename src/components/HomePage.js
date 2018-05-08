import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const HomePage = () => (
  <MuiThemeProvider >
  <div>
    <AppBar
    className='appBar'
      title="Look 4 Rent"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      >
    <TextField
      className="appBar__search"
      hintText="Search here..."
      fullWidth={true} />
    </AppBar>

    <p>Hello World!!!</p>
    </div>
    </MuiThemeProvider>
);

// const HomePage = () => (
//   <div>
//     <input className="search-here" placeholder="Search here..."/>
//   </div>
// );
export default HomePage;
