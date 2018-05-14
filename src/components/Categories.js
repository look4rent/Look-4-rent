import React from "react";

//MATERIAL _UI
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";

//ANT
import { Menu, Icon } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function handleClick(e) {
  console.log("click", e);
}

const Categories = () => (
  <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
    <SubMenu
      key="sub1"
      title={
        <span>
          <Icon type="mail" />
          <span>Clothes</span>
        </span>
      }
    >
      <Menu.Item key="1">Traditional</Menu.Item>
      <Menu.Item key="2">Modern</Menu.Item>
      <Menu.Item key="3">Cultural</Menu.Item>
      <Menu.Item key="4">Others</Menu.Item>
    </SubMenu>
    <SubMenu
      key="sub2"
      title={
        <span>
          <Icon type="appstore" />
          <span>Catering</span>
        </span>
      }
    >
      <Menu.Item key="5">Home Catering</Menu.Item>
      <Menu.Item key="6">Party venu</Menu.Item>
    </SubMenu>
    <SubMenu
      key="sub3"
      title={
        <span>
          <Icon type="car" />
          <span>Automobiles</span>
        </span>
      }
    >
      <Menu.Item key="9">Car</Menu.Item>
      <Menu.Item key="10">Bus</Menu.Item>
      <Menu.Item key="11">Min Bus</Menu.Item>
      <Menu.Item key="12">Bycycle</Menu.Item>
    </SubMenu>
  </Menu>
);
export default Categories;
