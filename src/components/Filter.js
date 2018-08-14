
import React, { Component } from "react";

//ant-d
import { Menu, Dropdown, Icon } from 'antd';
import { Button } from 'antd';
import { Pagination } from 'antd';
import { Checkbox } from 'antd';


const menu = (
    <Menu>
        <Menu.Item key="0">
            <Checkbox onChange={onChange}>Kathmandu</Checkbox>
        </Menu.Item>
        <Menu.Item key="1">
            <Checkbox onChange={onChange}>Bhaktapur</Checkbox>
        </Menu.Item>
        <Menu.Item key="1">
            <Checkbox onChange={onChange}>Lalitpur</Checkbox>
        </Menu.Item>
    </Menu>
);

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

function itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <a>Previous</a>;
    } if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
}

class filter extends Component {
    
    render() {
      return (
        <div className = "filter_wrapper">
            <div className = "first_line"></div>

            <div className = "filter_filter">
                <div className = "district_menu">
                    <Dropdown overlay={menu} trigger={['click']}>
                        <div className = "district_label">
                            <pre>
                                <a className="ant-dropdown-link" href="#">
                                    District        <Icon type="down" />
                                </a>
                            </pre>
                        </div>
                    </Dropdown>
                </div>
                <div className = "place_menu">
                    <Dropdown overlay={menu} trigger={['click']}>
                        <div className = "place_label">
                            <pre>
                                <a className="ant-dropdown-link" href="#">
                                    Place         <Icon type="down" />
                                </a>
                            </pre>
                        </div>
                    </Dropdown>
                </div>
                <div className = "filter_button">
                    <Button type="primary" block>Filter</Button>
                </div>
            </div>

            <div className = "first_line"></div>

            <div className = "filter_pageNav">
                <div className = "filter_pagination">
                    <Pagination total={500} itemRender={itemRender} />
                </div>
            </div>

            <div className = "first_line"></div>
        </div>
      );
    }
  }

export default filter;