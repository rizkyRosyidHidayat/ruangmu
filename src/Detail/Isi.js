import React, { Component } from 'react';
import {Row, Col, Comment, Rate, Tag, Icon, Statistic, Card, List, Divider} from 'antd';
import SimpleMap from './Map.js';
import Ulasan from './Ulasan.js';
import Ruang from './Ruang.js';
import Footer from '../Footer.js';

class Isi extends Component {
    constructor(props) {
        super(props);
    }
    

    render() {
      const ItemHarga = [
        {title: '/Per jam', value: '50000'},
        {title: '/Per hari', value: '500000'},
        {title: '/Per bulan', value: '5000000'}
      ]
      const Harga = ItemHarga.map((Harga, index) =>
        <React.Fragment>
          <Statistic suffix={Harga.title} prefix="Rp. " value={Harga.value}/>
          <hr/>
        </React.Fragment>
      )
      const Fasilitas = [
        {icon: 'user', nama: 'Televisi'},
        {icon: 'user', nama: 'Televisi'},
        {icon: 'user', nama: 'Televisi'},
        {icon: 'user', nama: 'Televisi'},
        {icon: 'user', nama: 'Televisi'},
        {icon: 'user', nama: 'Televisi'},
      ]
        return (
            <React.Fragment>
              <p style={{fontSize: '17px'}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>

              <div className="h1 text-dark my-5">Biaya</div>
              {Harga}
              

              <div className="h1 text-dark my-5">Fasilitas</div>
              <List
              grid={{ gutter: 0, column: 2 }}
              dataSource={Fasilitas}
              renderItem={item => (
                <List.Item>
                  <div className="lead">
                    <Icon type={item.icon} className="alamat mr-2"/>
                    {item.nama}
                  </div>
                  <hr/>
                </List.Item>
              )} />

              <div className="h1 text-dark my-5">Lokasi</div>
              <SimpleMap />

              <div className="h1 text-dark my-5">Ulasan</div>
              <Ulasan />

              <div className="h1 text-dark my-5">Ruang lain</div>
              <Ruang />

              <Footer />

            </React.Fragment>
        );
    }
}

export default Isi;
