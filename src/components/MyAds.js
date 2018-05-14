import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";

const MyAds = () => (
  <MuiThemeProvider>
    <Paper className="myad-container" zDepth={3}>
      <div>
        <h2>Title here</h2>
        <div className="description-holder">
          <p>Description here</p>
          <p>Price here</p>
        </div>
      </div>
    </Paper>
  </MuiThemeProvider>
);
export default MyAds;
