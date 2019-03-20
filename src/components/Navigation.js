import React from 'react'
import { Menu } from 'antd';



class Navigation extends React.Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          Navigation One
        </Menu.Item>
        <Menu.Item key="app">
          Navigation Two
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navigation