import React, { Component } from "react";
import { Divider, Select, Form, Input, Button, Icon } from "antd";

import Paper from "material-ui/Paper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 0
    }
  }
};

class EditProfile1 extends Component {
  state = {
    visible: "1",
    name: {
      firstname: "Ranjan",
      middlename: "",
      lastname: "Parajuli"
    },
    password: {
      password: "ranjan"
    },
    phone: {
      phone: "9813309968"
    }
  };
  handelClick = vis => {
    this.setState({
      visible: vis
    });
  };
  handleSubmitName = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.setState({ visible: "", mame: values });
      }
    });
  };

  handleSubmitPassword = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.setState({ visible: "", password: values });
      }
    });
  };

  handleSubmitPassword = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.setState({ visible: "", phone: values });
      }
    });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== this.state.password.password) {
      callback("Passwords doesn't match!");
    } else {
      callback();
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const visible = this.state.visible;
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "10"
    })(
      <Select style={{ width: 85 }}>
        <Option value="10">+977</Option>
      </Select>
    );
    console.log(this.state);
    return (
      <MuiThemeProvider>
        <Paper className="edit-profile-container">
          <Divider />
          {visible === "name" ? (
            <div className="edit-profile-container-name-form">
              <h3>Name</h3>
              <div className="form-container">
                <Form layout="inline" onSubmit={this.handleSubmitName}>
                  <FormItem {...formItemLayout} label="First">
                    {getFieldDecorator("firstname", {
                      initialValue: this.state.name.firstname,
                      rules: [
                        {
                          required: true,
                          message: "First name is required"
                        }
                      ]
                    })(<Input placeholder="First name" />)}
                  </FormItem>
                  <br />
                  <FormItem {...formItemLayout} label="Middle">
                    {getFieldDecorator("middlename", {
                      initialValue: this.state.name.middlename,
                      rules: [
                        {
                          required: false,
                          message: "Enter middle name"
                        }
                      ]
                    })(<Input placeholder="Middle name" />)}
                  </FormItem>
                  <br />
                  <FormItem {...formItemLayout} label="Last">
                    {getFieldDecorator("lastname", {
                      initialValue: this.state.name.lastname,
                      rules: [
                        {
                          required: true,
                          message: "Last name is required"
                        }
                      ]
                    })(<Input placeholder="Last name" />)}
                  </FormItem>
                  <br />
                  <FormItem className="edit-profile-name-form-button">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="edit-profile-name-form-button-change"
                    >
                      Change
                    </Button>
                    <Button onClick={() => this.handelClick("")}>Cancle</Button>
                  </FormItem>
                </Form>
              </div>
            </div>
          ) : (
            <div className="edit-profile-container-name-title">
              <a onClick={() => this.handelClick("name")}>
                <h3>Name</h3>
                <p>
                  {this.state.name.firstname +
                    " " +
                    this.state.name.middlename +
                    " " +
                    this.state.name.lastname}
                </p>
                <span>
                  <Icon type="edit" />Edit
                </span>
              </a>
            </div>
          )}
          <Divider />
          {visible === "password" ? (
            <div className="edit-profile-container-name-form">
              <h3>Password</h3>
              <div className="form-container">
                <Form layout="inline" onSubmit={this.handleSubmitPhone}>
                  <FormItem {...formItemLayout} label="Old Password">
                    {getFieldDecorator("oldpassword", {
                      rules: [
                        {
                          required: true,
                          message: "Old password is required"
                        },
                        {
                          validator: this.compareToFirstPassword
                        }
                      ]
                    })(<Input type="password" placeholder="Old Password" />)}
                  </FormItem>
                  <br />
                  <FormItem {...formItemLayout} label="New Password">
                    {getFieldDecorator("password", {
                      rules: [
                        {
                          required: true,
                          message: "Enter new password"
                        }
                      ]
                    })(<Input type="password" placeholder="New Password" />)}
                  </FormItem>
                  <br />
                  <FormItem className="edit-profile-name-form-button">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="edit-profile-name-form-button-change"
                    >
                      Confirm Change
                    </Button>
                    <Button onClick={() => this.handelClick("")}>Cancle</Button>
                  </FormItem>
                </Form>
              </div>
            </div>
          ) : (
            <div className="edit-profile-container-name-title">
              <a onClick={() => this.handelClick("password")}>
                <h3>Password</h3>
                <p>***************</p>
                <span>
                  <Icon type="edit" />Edit
                </span>
              </a>
            </div>
          )}
          <Divider />
          {visible === "phone" ? (
            <div className="edit-profile-container-name-form">
              <h3>Password</h3>
              <div className="form-container">
                <Form layout="inline" onSubmit={this.handleSubmitPassword}>
                  <FormItem {...formItemLayout} label="Phone Number">
                    {getFieldDecorator("phone", {
                      initialValue: this.state.phone.phone,
                      rules: [
                        {
                          required: true,
                          message: "Please input your new phone number!"
                        }
                      ]
                    })(
                      <Input
                        addonBefore={prefixSelector}
                        max="10"
                        style={{ width: "100%" }}
                      />
                    )}
                  </FormItem>
                  <br />

                  <FormItem className="edit-profile-name-form-button">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="edit-profile-name-form-button-change"
                    >
                      Confirm Change
                    </Button>
                    <Button onClick={() => this.handelClick("")}>Cancle</Button>
                  </FormItem>
                </Form>
              </div>
            </div>
          ) : (
            <div className="edit-profile-container-name-title">
              <a onClick={() => this.handelClick("phone")}>
                <h3>Password</h3>
                <p>{this.state.phone.phone}</p>
                <span>
                  <Icon type="edit" />Edit
                </span>
              </a>
            </div>
          )}
          <Divider />
        </Paper>
      </MuiThemeProvider>
    );
  }
}

const EditProfile = Form.create()(EditProfile1);

export default EditProfile;
