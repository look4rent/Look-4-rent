import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';


import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const FormItem = Form.Item;
const {TextArea} = Input;
const Option = Select.Option;



class PostNewAd extends React.Component {
    state = {
      confirmDirty: false
    };
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
    handleConfirmBlur = (e) => {
      const value = e.target.value;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    handleChange = (value) => {
        console.log(`selected ${value}`);
      }
      
    handleBlur = (e) => {
        console.log('blur');
      }
      
    handleFocus= (e) => {
        console.log('focus');
      }
    

    render() {
      const { getFieldDecorator } = this.props.form;
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
      
      return (
        <MuiThemeProvider>      
        <Paper className="post-ad-form-container" zDepth={3}>
        
        <Form onSubmit={this.handleSubmit}>
        <FormItem
        {...formItemLayout}
            label="Category"
        >
        {getFieldDecorator('category', {
            rules: [{ required: true, message: 'Please select category' }],
          })(
            <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Category"
            optionFilterProp="children"
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
            <Option value="AutoMobiles">AutoMobiles</Option>
            <Option value="Music Instrument">Music Instrument</Option>
            <Option value="Mobile & accessories">Mobile & accessories</Option>
            <Option value="Toys">Toys</Option>
            <Option value="Video Games">Video Games</Option>            
        </Select> 
          )}
        </FormItem>
           
        <FormItem
        {...formItemLayout}
            label="Ad title"
        >
            
          {getFieldDecorator('adTitle', {
            rules: [{ required: true, message: 'Please input ad title' }],
          })(
            <Input size="large" placeholder="Enter title here..." />
          )}
        </FormItem>

        <FormItem
        {...formItemLayout}
            label="Description"
        >
            
          {getFieldDecorator('adDescription', {
            rules: [{ required: true, message: 'Please add description here' }],
          })(
            <TextArea rows={4} placeholder="Add description here..." />
          )}
        </FormItem>

          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">Submit Ad</Button>
          </FormItem>
        </Form>
        </Paper>
        </MuiThemeProvider> 
      );
    }
  }
  
  const WrappedPostAdForm = Form.create()(PostNewAd);
  




// class PostNewAd extends React.Component {
//     render () {
//         return (
//             <MuiThemeProvider>
//             <div className="box-layout">
//                 <Paper className="post-new-ad-container" zDepth={3} >
//                 <SelectField
//                     floatingLabelText="Category"
//                     //value={this.state.value}
//                     //onChange={this.handleChange}
//                 >
//                 <MenuItem value={1} primaryText="AutoMobiles" />
//                 <MenuItem value={2} primaryText="Music Instrument" />
//                 <MenuItem value={3} primaryText="Mobile & accessories" />
//                 <MenuItem value={4} primaryText="Toys" />
//                 <MenuItem value={5} primaryText="Videogames" />
//                 </SelectField>
//                 <br />
//                 <SelectField
//                     floatingLabelText="Sub Category"
//                     //value={this.state.value}
//                     //onChange={this.handleChange}
//                 >
//                 <MenuItem value={1} primaryText="Cars" />
//                 <MenuItem value={2} primaryText="Bikes" />
//                 <MenuItem value={3} primaryText="Samsung Phone" />
//                 <MenuItem value={4} primaryText="Toys" />
//                 <MenuItem value={5} primaryText="Videogames" />
//                 </SelectField>
//                 <br />
//                 <TextField
//                 hintText="Enter title here..."
//                 floatingLabelText="Ad Title*"
//                 //onChange = {(event,newValue) => this.setState({username:newValue})}
//               /><br/>

//               <TextField
//                 floatingLabelText="Description*"
//                 hintText="Description"
//                 multiLine={true}
//                 rows={1}
//                 rowsMax={10}
//                 />

//                 <br />
//                 <SelectField
//                     floatingLabelText="Days to run ad*"
//                     //value={this.state.value}
//                     //onChange={this.handleChange}
//                 >
//                 <MenuItem value={1} primaryText="one month" />
//                 <MenuItem value={2} primaryText="two month" />
//                 <MenuItem value={3} primaryText="three month" />
//                 <MenuItem value={4} primaryText="four month" />
//                 </SelectField>
//                 <br />
//                 <TextField
//                 hintText="Price*"
//                 floatingLabelText="Price"
//                 //onChange = {(event,newValue) => this.setState({username:newValue})}
//                 />
//                 <br/>
//                 <div>
//                 Price Negotiable
//                 <RadioButtonGroup name="Price Negotiable" defaultSelected="yes">
//                 <RadioButton
//                     value="yes"
//                     label="Yes"
//                     //style={styles.radioButton}
//                 />
//                 <RadioButton
//                     value="fixed"
//                     label="Fixed Price"
//                     //style={styles.radioButton}
//                 />
//                 </RadioButtonGroup>
//                 </div>

//                 <div>
//                 Home Delivery
//                 <RadioButtonGroup name="Home Delivery" >
//                 <RadioButton
//                     value="yes"
//                     label="Yes"
//                     //style={styles.radioButton}
//                 />
//                 <RadioButton
//                     value="no"
//                     label="no"
//                     //style={styles.radioButton}
//                 />
//                 </RadioButtonGroup>
//                 </div>

//                 <RaisedButton
//                     className="image-input-button"
//                         label="Add picture"
//                         labelPosition="before"
//                         //style={styles.button}
//                         containerElement="label"
//                     >
//                     <input type="file"  className="image-input"/>
//                 </RaisedButton>
//                 <br/>
//                 <RaisedButton label="Submit Ad" primary={true}  />
//                 </Paper>
//             </div>
//             </MuiThemeProvider>
//         );
//     }
// };

export default WrappedPostAdForm;