import React, { Component } from 'react';
import {Row, Col, Card} from 'antd';
import FormMitra from '../FormMitra.js';

class Banner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mt-5">
            	<div className="container">
            		<Row>
            			<Col span={16}>
            				<div className="display-4 text-capitalize mb-4 font-weight-bold">
            					Kami Membantu
                      Memasarkan
                      Ruangan Kosong
            				</div>
            				<figure className="w-50">
            					<img src={require('../img/mitra.jpg')} className="img-fluid" />
            				</figure>
            			</Col>
            			<Col span={8}>
            				<div className="d-flex justify-content-end">
            					<Card className="w-100">
            						<FormMitra />
            					</Card>
            				</div>
            			</Col>
            		</Row>
            	</div>
            </div>
        );
    }
}

export default Banner;
