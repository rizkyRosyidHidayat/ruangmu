import React, { Component} from 'react';
import {Menu, Icon} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	current: 'mail',
        }
    }

    handleClick = (e) => {
    	console.log('click', e);
    	this.setState({current: e.key});
    }

    render() {
        return (
          <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="vertical"
          className="border-0">
          	<Menu.Item key="data" className="h5">
          		<a href="/Akun/Data">
          			<Icon type="user" /> Data profil
          		</a>
          	</Menu.Item>
          	<Menu.Item key="edit" className="h5">
          		<a href="/Akun/Edit">
          			<Icon type="edit" /> Edit profil
          		</a>
          	</Menu.Item>
          	<Menu.Item key="booking" className="h5">
	          	<a href="/Akun/Booking">
	          		<Icon type="ordered-list" /> List booking
	          	</a>
          	</Menu.Item>
          </Menu>
        );
    }
}

export default SideMenu;
