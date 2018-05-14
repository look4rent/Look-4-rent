import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import PostNewAd from "./PostNewAd";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class DashBoardMemberArea extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
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
            <Menu.Item key="1">
              <Icon type="dashboard" />
              <span>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="inbox" />
              <span>Post New Ad</span>
            </Menu.Item>

            <Menu.Item key="3">
              <Icon type="solution" />
              <span>My Ads</span>
            </Menu.Item>

            <Menu.Item key="4">
              <Icon type="tag-o" />
              <span>Watchlist Ad</span>
            </Menu.Item>

            <Menu.Item key="5">
              <Icon type="profile" />
              <span>Edit Profile</span>
            </Menu.Item>

            <Menu.Item key="6">
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
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <PostNewAd />
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
