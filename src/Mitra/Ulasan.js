import React, { Component } from 'react';
import {Row, Col, Button} from 'antd';

class Ulasan extends Component {
    render() {
        return (
        	<div className="container rekomendasi">
        		<Row gutter={24}>
        			<Col span={12}>
        				<p className="h1">
        					Sangat Membantu Kami Untuk Memasarkan Layanan 
        					Yang Kami Punya Ke Pelanggan Secara Mudah dan Gratis.
        				</p>
        				<div className="lead">- Sheryl Sheinafia dari <i>Women Code</i></div>
        				<br/>
        				<Button size="large" className="text-capitalize">Tahu lebih lanjut</Button>
        			</Col>
        			<Col span={12}>
        				<figure style={{height: '50vh'}}>
        					<img src={require('../img/brooke_cagle_193476__OSqIA.jpg')}
        					alt="people" className="img-fluid" />
        				</figure>
        			</Col>
        		</Row>
        	</div>
        );
    }
}

export default Ulasan;
