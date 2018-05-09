import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

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
          <Paper zDepth={3}><br/>
          <div className="login-container">
            <h4>Login</h4>
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
              <RaisedButton label="Submit" primary={true}
               //onClick={(event) => this.handleClick(event)}
               />
          </div>
          <br/>
          <hr/>
          <h3>OR</h3>
          <RaisedButton className="button" 
            label="Login with Google" primary={true}
            onClick={startLogin}
          /><br/><br/>
          <RaisedButton className="button" 
            label="Login with Facebook" primary={true}
            onClick={startLogin}
          /><br/><br/>
          </Paper>
          
        </div>
      </div>
    </MuiThemeProvider>
  
  )
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
