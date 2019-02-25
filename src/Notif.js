import React, { Component } from 'react';
import {List} from 'antd';



const list = [
  {
    title: 'Coworking space',
    notif: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    date: '18/02/2019',
    time: '08:00'
  },
  {
    title: 'Coworking space',
    notif: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    date: '18/02/2019',
    time: '08:00'
  },
];

class Notif extends Component {
    render() {
        return (
          <List 
				  bordered={false}
				  dataSource={list}
				  renderItem={item => (
				    <List.Item>
				      <List.Item.Meta
				      title={<a className="h5">{item.title}</a>}
				      description={
				        <React.Fragment>
				          <p>{item.notif}</p>
				          <div className="d-flex justify-content-between">
				            <span>{item.date}</span>
				            <span>{item.time}</span>
				          </div>
				        </React.Fragment>
				      } />
				    </List.Item>
				  )} />  
        );
    }
}

export default Notif;
