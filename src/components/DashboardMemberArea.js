import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import PostNewAd from "./PostNewAd";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import PartialAd from "./PartialAd";
import MemberHeader from "./MemberHeader";
import MyAds from './MyAds';
import Editprofile from './EditProfile';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class DashBoardMemberArea extends React.Component {
  state = {
    collapsed: false,
    current :1
  
  };
 
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  content = () =>{
    switch (this.state.current) {
      case '1':
        return(<div>DashBoard</div>);
      case '2':  
        return(<div><PostNewAd/></div>);
      case '3':  
        return(<div><MyAds/></div>);
      case '4':  
        return(<div><h1>WatchList</h1></div>);
      case '5':  
        return(<div><h4><Editprofile/></h4></div>);
      case '6':  
        return(<div><h4>ChangePassword</h4></div>);
      default:
        return(<div><h4>DashBoard</h4></div>)  

    }
  }
  

  

  render() {
    console.log(this.state.current);
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{ background: "#fff" }}
        >
          <div className="logo" />
          <Menu defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item 
            onClick={this.handleClick}
            key="1">
              <Icon type="dashboard" />
              <span>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="2"
            onClick={this.handleClick}>
              <Icon type="inbox" />
              <span>Post New Ad</span>
            </Menu.Item>

            <Menu.Item key="3"
            onClick={this.handleClick}>
              <Icon type="solution" />
              <span>My Ads</span>
            </Menu.Item>

            <Menu.Item key="4"
            onClick={this.handleClick}>
              <Icon type="tag-o" />
              <span>Watchlist Ad</span>
            </Menu.Item>

            <Menu.Item key="5"
            onClick={this.handleClick}>
              <Icon type="profile" />
              <span>Edit Profile</span>
            </Menu.Item>

            <Menu.Item key="6"
            onClick={this.handleClick}>
              <Icon type="lock" />
              <span>Change Password</span>
            </Menu.Item>

            <Menu.Item key="7" onClick={this.props.startLogout}>
              <Icon type="logout" />
              <span>Log out</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <MemberHeader/>
          <Content style={{ margin: "0 16px" }}>
            {this.content()}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2016 Created by Deep Bhai
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(DashBoardMemberArea);
