import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


import { Form, Input, Tooltip, InputNumber, Icon, Cascader,Radio, Select, Row, Col, Checkbox, Button, AutoComplete, Upload, Modal } from 'antd';
const FormItem = Form.Item;
const {TextArea} = Input;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


class PostNewAd extends React.Component {
    state = {
      confirmDirty: false,
      previewVisible: false,
    previewImage: '',
    fileList: [],
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
    
    handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChangePicture = ({ fileList }) => this.setState({ fileList })


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

    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
      
      return (
        <MuiThemeProvider>      
        <Paper className="post-ad-form-container" zDepth={3}>
        <h1>Post Ad Form</h1>
        <Form onSubmit={this.handleSubmit}>
        <FormItem
        {...formItemLayout}
            label="Category"
        >
        {getFieldDecorator('category', {
            rules: [{ required: true, message: 'Please select category' }],
          })(
            <Select
            size="large"
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

        <FormItem
          {...formItemLayout}
          label="Price"
        >
          {getFieldDecorator('adPrice', { initialValue: 0 })(
            <InputNumber size="large" min={1} max={10} />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Price Negotiable"
        >
          {getFieldDecorator('priceNegotiable')(
            <RadioGroup>
              <RadioButton value="a">Yes</RadioButton>
              <RadioButton value="b">Fixed Price</RadioButton>
            </RadioGroup>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Home Delivery"
        >
          {getFieldDecorator('homeDelivery')(
            <RadioGroup>
              <RadioButton value="a">Yes</RadioButton>
              <RadioButton value="b">No</RadioButton>
            </RadioGroup>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Upload Photo"
        >
        <div className="clearfix">
        <Upload
          action="//jsonplaceholder.typicode.com/posts/"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChangePicture}
        >
          {fileList.length >= 3 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
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
  
export default WrappedPostAdForm;