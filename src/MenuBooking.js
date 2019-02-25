import React, { Component } from 'react';
import {Drawer, List} from 'antd';

const data = [
	{title: 'Coworking space'},
	{title: 'Coworking space'},
	{title: 'Coworking space'},
]

const dateTime = (
	<div className="d-flex justify-content-between">
		<span>16/02/2019</span>
		<span>08:00</span>
	</div>
)

class MenuBooking extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <Drawer
          placement="right"
          closable={true}
          width={'25%'}
          title="Menu Booking"
          {...this.props} >
          	<List 
          	itemLayout="horizontal"
          	dataSource={data}
          	
          	renderItem={item => (
          		<List.Item>
          			<List.Item.Meta
          			title={<a href="/Detail" className="">{item.title}</a>}
          			description={dateTime} />
          		</List.Item>
          	)} />
          </Drawer>
        );
    }
}

export default MenuBooking;
