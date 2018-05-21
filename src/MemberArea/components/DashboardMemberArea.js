import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { connect } from "react-redux";
import { startLogout } from "../../actions/auth";
import MemberHeader from "../../components/MemberHeader";
import { history } from "../../routers/AppRouter";

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class DashBoardMemberArea extends React.Component {
  state = {
    collapsed: false,
    selectedNavItem: "1"
  };
  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  componentWillMount = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        selectedNavItem: this.props.sideNavKey
      };
    });
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
          <Menu
            defaultSelectedKeys={[
              this.state.selectedNavItem ? this.state.selectedNavItem : "1"
            ]}
            mode="inline"
          >
            <Menu.Item
              key="1"
              onClick={() => {
                history.push("/dashboard");
              }}
            >
              <Icon type="dashboard" />
              <span>Dashboard</span>
            </Menu.Item>

            <Menu.Item
              key="2"
              onClick={() => {
                history.push("/postad");
              }}
            >
              <Icon type="inbox" />
              <span>Post New Ad</span>
            </Menu.Item>

            <Menu.Item
              key="3"
              onClick={() => {
                history.push("/myads");
              }}
            >
              <Icon type="solution" />
              <span>My Ads</span>
            </Menu.Item>

            <Menu.Item
              key="4"
              onClick={() => {
                history.push("/watchlist");
              }}
            >
              <Icon type="tag-o" />
              <span>Watchlist Ad</span>
            </Menu.Item>

            <Menu.Item
              key="5"
              onClick={() => {
                history.push("/editprofile");
              }}
            >
              <Icon type="profile" />
              <span>Edit Profile</span>
            </Menu.Item>

            <Menu.Item key="6" onClick={this.props.startLogout}>
              <Icon type="logout" />
              <span>Log out</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <MemberHeader />
          <Content style={{ margin: "0 16px" }}>{this.props.children}</Content>
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
