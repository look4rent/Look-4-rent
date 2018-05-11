import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class DashBoardMemberArea extends React.Component {
    state = {
        collapsed: false,
      };
      onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
      }
      render() {
        return (
          <Layout style={{ minHeight: '100vh' }}>
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
              style={{background: '#fff'}}
            >
              <div className="logo" />
              <Menu defaultSelectedKeys={['1']} mode="inline">
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

                <Menu.Item key="7">
                  <Icon type="logout" />
                  <span>Log out</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }} />
              <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                  Bill is a cat.
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2016 Created by Deep Bhai
              </Footer>
            </Layout>
          </Layout>
        );
      }
}

export default DashBoardMemberArea;