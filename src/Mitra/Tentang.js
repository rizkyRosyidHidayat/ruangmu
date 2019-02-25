import React, { Component } from 'react';
import {Row, Col, Divider} from 'antd';

class Tentang extends Component {
    render() {
        return (
          <div className="container rekomendasi">
          	<Divider>
          		<p className="display-4 text-center my-5 font-weight-bold">
	    					Tentang Ruangmu
	    				</p>
          	</Divider>
          	<Row gutter={24}>
          		<Col span={12}>
          			<div className="h1">Apa itu Ruangmu ?</div>
          			<p className="lead">
          				Kami membantu para pemilik ruangan seperti kamu untuk memasarkan 
          				tempatnya yang dapat digunakan sebagai ruangan meeting, 
          				ruangan kerja ataupun ruang acara. Dengan perkembangan dunia kerja 
          				yang semakin fleksibel, kami percaya dapat sangat membantu kamu 
          				untuk mencarikan pelanggan setiap harinya
          			</p>
          		</Col>
          		<Col span={12}>
          			<div className="h1">Kenapa Ruangmu ?</div>
          			<p className="lead">
          				Cara mudah untuk memasarkan ruangan dengan gratis. 
          				Cukup tambahkan ruangan dan terima pelanggan 
          				setiap harinya tanpa pemotongan biaya. 
          				Ruangmu percaya akan dengan membangun komunitas 
          				para pemilik coworking spcar di Ruangmu, 
          				itu berarti membangun pasar yang sangat besar di indonesia.
          			</p>
          		</Col>
          	</Row>
          </div>
        );
    }
}

export default Tentang;
