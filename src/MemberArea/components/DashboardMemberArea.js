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
<<<<<<< HEAD
     switch (history.location.pathname) {
       case "/dashboard":
         return this.setState({ selectedNavItem: "1" });
       case "/postad":
         return this.setState({ selectedNavItem: "2" });
       case "/myads":
         return this.setState({ selectedNavItem: "3" });
       case "/watchlist":
         return this.setState({ selectedNavItem: "4" });
       case "/editprofile":
         return this.setState({ selectedNavItem: "5" });
     }



    //  this.setState(prevState => {
    //    return {
    //      ...prevState,
    //      selectedNavItem: this.state.selectedNavItem
    //    };
    //  });

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
=======
    this.setState(prevState => {
      return {
        ...prevState,
        selectedNavItem: this.props.sideNavKey
      };
    });
>>>>>>> 9e110f562c9c84828f7a1b6027dcaa5644ea8a33
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
<<<<<<< HEAD
              this.props.selectedNavItem ? this.state.selectedNavItem : "1"
=======
              this.state.selectedNavItem ? this.state.selectedNavItem : "1"
>>>>>>> 9e110f562c9c84828f7a1b6027dcaa5644ea8a33
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
