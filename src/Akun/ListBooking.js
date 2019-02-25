import React, { Component } from 'react';
import {Tabs, List} from 'antd';

const TabPane = Tabs.TabPane;


const list = [
	{
		title: 'Coworking space',
		date: '18/02/2019',
		time: '08:00'
	},
	{
		title: 'Coworking space',
		date: '18/02/2019',
		time: '08:00'
	},
	{
		title: 'Coworking space',
		date: '18/02/2019',
		time: '08:00'
	},
	{
		title: 'Coworking space',
		date: '18/02/2019',
		time: '08:00'
	},
	{
		title: 'Coworking space',
		date: '18/02/2019',
		time: '08:00'
	},
	{
		title: 'Coworking space',
		date: '18/02/2019',
		time: '08:00'
	},
];

const Menunggu = () => (
	<List 
	bordered={false}
	dataSource={list}
	renderItem={item => (
		<List.Item>
			<List.Item.Meta
			title={<a href="/Detail/Booked" className="h4">{item.title}</a>}
			description={
				<div className="d-flex justify-content-between">
					<span>{item.date}</span>
					<span>{item.time}</span>
				</div>
			} />
		</List.Item>
	)} />
);

class ListBooking extends Component {
    render() {
        return (
        	<React.Fragment>
	          <Tabs>
	          	<TabPane tab={<span>Menunggu</span>} key="1">
	          		<Menunggu />
	          	</TabPane>
	          	<TabPane tab={<span>Progress</span>} key="2">
	          		Tab 2
	          	</TabPane>
	          	<TabPane tab={<span>Done</span>} key="">
	          		Tab 3
	          	</TabPane>
	          </Tabs> 
        	</React.Fragment> 
        );
    }
}

export default ListBooking;
