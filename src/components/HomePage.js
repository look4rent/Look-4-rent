import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import HomeHeader from './HomeHeader';
import Categories from './Categories';
import HomeFooter from './HomeFooter';
import SliderCategory from './SliderCategory';

const HomePage = () =>(
      <div className = "Hmain">
        <div className = "Hheader">
          <HomeHeader/>
        </div>
        <div className = "Hcategories">
          <Categories/>
        </div>
        <div className = "HSlider_category">
          <SliderCategory/>
        </div>
        <div className = "Hfooter">
          <HomeFooter/>
        </div>
      </div>
  );

// const HomePage = () => (
//   <div>
//     <input className="search-here" placeholder="Search here..."/>
//   </div>
// );
export default HomePage;
