import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

import '../styles/styles.scss';

//material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const LoginPage = ({ startLogin }) => {
  return(
    <MuiThemeProvider>
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Look 4 Rent</h1><br/>
        </div>
        <Paper className="login-container" zDepth={3}>
            <h2 className="login-title">Login </h2>
            <TextField
                hintText="Enter your Email"
                floatingLabelText="Username*"
                //onChange = {(event,newValue) => this.setState({username:newValue})}
              /><br/>
            <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password*"
                //onChange = {(event,newValue) => this.setState({password:newValue})}
                />
              <br/>
              <RaisedButton label="Login" primary={true}
              className="button-login"
               //onClick={(event) => this.handleClick(event)}
               />
          <br/>
          <hr/>
          <h3>OR</h3>
          <RaisedButton className="google-button" 
            label="Login with Google" secondary={true}
            onClick={startLogin}
          /><br/><br/>
          <RaisedButton className="facebook-button" 
            label="Login with Facebook" primary={true}
            onClick={startLogin}
          />
          </Paper>
          
      
      </div>
    </MuiThemeProvider>
  
  )
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
