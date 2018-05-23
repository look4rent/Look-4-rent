import React from "react";
import LoginPage from "./LoginPage";
import { Modal, Input, Affix, Button } from "antd";


const buttonWidth = 70;
const Search = Input.Search;


class HomeHeader extends React.Component {
  state = {
    loading: false,
    visible: false,
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }
  render(){
    const { visible, loading } = this.state;
    return(
      <div>
        <Affix>
          <div className="header_container">
            <img className="logo-image" src="images/logo.jpg" />
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              className="search"
            />
            <div>
              <Button type="primary" onClick={this.showModal} className="login-button">
                Login
              </Button>
              <Modal
                visible={visible}
                onCancel={this.handleCancel}
                footer={false}
                
              >
                <LoginPage/>
              </Modal>
            </div>

          </div>
        </Affix>
      </div>
    );
  }
}

export default HomeHeader;
