import React, { Component } from 'react';
import {List, Avatar, Icon} from 'antd';

const listData = [];
for (let i = 0; i < 23; i++) {
	listData.push({
		href: '',
		title: 'Nama',
		avatar: require('../img/ivana-cajina-316246-unsplash.jpg'),
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	});
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: '8px' }} />
    {text}
  </span>
);

class Ulasan extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <List 
          itemLayout="vertical"
          size="large"
          pagination={{
          	onChange: (page) => {
          		console.log(page);
          	},
          	pageSize: 5,
          }}
          dataSource={listData}
          renderItem= {item =>(
          	<List.Item
          	key={item.title}
          	actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]} >
          		<List.Item.Meta
          		avatar={<Avatar src={item.avatar} />}
          		title={<a href={item.href}>{item.title}</a>} />
          		{item.description}
          	</List.Item>
          )} />
        );
    }
}

export default Ulasan;
