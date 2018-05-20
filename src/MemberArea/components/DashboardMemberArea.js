import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { connect } from "react-redux";
import { startLogout } from "../../actions/auth";
import MemberHeader from "../../components/MemberHeader";
import { history } from "../../routers/AppRouter";
import {
  dashboard,
  postNewAd,
  myAds,
  watchlist,
  editProfile
} from "../actions/dashboard";

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class DashBoardMemberArea extends React.Component {
  state = {
    collapsed: false,
    selectedNavItem: '1'
  };
  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  componentWillMount = () => {
    // switch (history.location.pathname) {
    //   case "/dashboard":
    //     return this.setState({ selectedNavItem: "1" });
    //   case "/postad":
    //     return this.setState({ selectedNavItem: "2" });
    //   case "/myads":
    //     return this.setState({ selectedNavItem: "3" });
    //   case "/watchlist":
    //     return this.setState({ selectedNavItem: "4" });
    //   case "/editprofile":
    //     return this.setState({ selectedNavItem: "5" });
    // }


    // this.setState(prevState => {
    //   return {
    //     ...prevState,
    //     selectedNavItem: this.props.selectedNavItem
    //   };
    // });
  };

  handleSideNavClick = e => {
    //this.setState({selectedNavItem: e.key});
    switch (e.key) {
      case "1":
        this.props.setNavDashBoard(e.key);
        history.push("/dashboard");
        break;
      case "2":
        this.props.setNavPostNewAd(e.key);
        history.push("/postad");
        break;
      case "3":
        this.props.setNavMyAds(e.key);
        history.push("/myads");
        break;
      case "4":
        this.props.setNavWatchlist(e.key);
        history.push("/watchlist");
        break;
      case "5":
        this.props.setNavEditProfile(e.key);
        history.push("/editprofile");
        break;
    }
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
              this.props.selectedNavItem ? this.props.selectedNavItem : "1"
            ]}
            mode="inline"
          >
            <Menu.Item key="1" onClick={this.handleSideNavClick}>
              <Icon type="dashboard" />
              <span>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="2" onClick={this.handleSideNavClick}>
              <Icon type="inbox" />
              <span>Post New Ad</span>
            </Menu.Item>

            <Menu.Item key="3" onClick={this.handleSideNavClick}>
              <Icon type="solution" />
              <span>My Ads</span>
            </Menu.Item>

            <Menu.Item key="4" onClick={this.handleSideNavClick}>
              <Icon type="tag-o" />
              <span>Watchlist Ad</span>
            </Menu.Item>

            <Menu.Item key="5" onClick={this.handleSideNavClick}>
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
  startLogout: () => dispatch(startLogout()),
  setNavDashBoard: key => dispatch(dashboard(key)),
  setNavPostNewAd: key => dispatch(postNewAd(key)),
  setNavMyAds: key => dispatch(myAds(key)),
  setNavWatchlist: key => dispatch(watchlist(key)),
  setNavEditProfile: key => dispatch(editProfile(key))
});

const mapStateToProps = state => {
  return {
    selectedNavItem: state.dashboard.sideNavKey.toString()
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  DashBoardMemberArea
);
