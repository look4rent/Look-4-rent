import React,{Component} from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

import {  Divider, Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

//material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';


export class LoginPage extends Component{
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  

  render(){
    const { getFieldDecorator } = this.props.form;
    return (
    <MuiThemeProvider>      
      <Paper className="login-form-container" zDepth={3}>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <h1 className="login-form-container__title">Login</h1>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
      <Divider>OR</Divider>
      <h3>Login With Social Accounts</h3>
     
          <Button className="google-button"

            onClick={this.props.startLogin}
          >Login with Google</Button>
            <br/><br/>
          <Button className="facebook-button" 
            onClick={this.props.startLogin}
            >Login with Facebook</Button>
      </Paper>
    </MuiThemeProvider>
    );
  }            
 }

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});
const Login = Form.create()(LoginPage);


export default connect(undefined, mapDispatchToProps)(Login);
