import React, { Component } from 'react';
import {List, Icon} from 'antd';

class DataUser extends Component {
    render() {
      const Fasilitas = [
        {title: 'user', nama: 'Rizky Rosyid Hidayat'},
        {title: 'user', nama: 'Rizky Rosyid Hidayat'},
        {title: 'user', nama: 'Rizky Rosyid Hidayat'},
        {title: 'user', nama: 'Rizky Rosyid Hidayat'},
        {title: 'user', nama: 'Rizky Rosyid Hidayat'},
        {title: 'user', nama: 'Rizky Rosyid Hidayat'},
      ]
    	
        return (
          <List
            grid={{ gutter: 0, column: 2 }}
            dataSource={Fasilitas}
            renderItem={item => (
              <List.Item>
              	<div className="h5">{item.title}</div>
                <div className="lead">
                  {item.nama}
                </div>
                <hr/>
              </List.Item>
            )} />
        );
    }
}

export default DataUser;
