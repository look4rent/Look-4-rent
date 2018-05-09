import React from 'react';
//import { connect } from 'react-redux';
//import { startLogin } from '../actions/auth';

//material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
//import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const RegisterPage = () => {
  return(
    <MuiThemeProvider>
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Look 4 Rent</h1>
          <Paper zDepth={3}>
          <br/>
          <div className="register-container">
            <h4>Register</h4>
            <TextField
                hintText="Enter your First Name"
                floatingLabelText="First Name*"
                //onChange = {(event,newValue) => this.setState({username:newValue})}
              /><br/>
            <TextField
                hintText="Enter your Last Name"
                floatingLabelText="Last Name*"
                //onChange = {(event,newValue) => this.setState({password:newValue})}
                />
              <br/>
            <TextField
                hintText="eg:xyz@abc.com"
                floatingLabelText="E-Mail*"
                //onChange = {(event,newValue) => this.setState({password:newValue})}
                />
            <br/>
            <TextField
                 hintText="+977 98xxxxxxxx"
                 floatingLabelText="Mobile Number*"
                 //onChange = {(event,newValue) => this.setState({password:newValue})}
                />
            <br/>
            <TextField
                 hintText="+977 98xxxxxxxx"
                 floatingLabelText="Alternate Number"
                 //onChange = {(event,newValue) => this.setState({password:newValue})}
                />
            <br/>
            <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password*"
                //onChange = {(event,newValue) => this.setState({password:newValue})}
                />
            <br/><br/>
            <RaisedButton label="Register" primary={true}
               //onClick={(event) => this.handleClick(event)}
               />
          </div>
          <br/>
          </Paper>
          
          
        </div>
      </div>
    </MuiThemeProvider>
  
  )
}



export default RegisterPage;
