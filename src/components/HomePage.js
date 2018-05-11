import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import HomeHeader from './HomeHeader'
import Categories from './Categories'

const HomePage = () =>(
      <div>
       <HomeHeader/>
       <div>
         <Categories/>
       </div>
        
      </div>
  );

// const HomePage = () => (
//   <div>
//     <input className="search-here" placeholder="Search here..."/>
//   </div>
// );
export default HomePage;
