import React, { Component } from 'react';
import {Row, Col, Card} from 'antd';
import FormBooking from '../FormBooking.js';

class Banner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="banner mt-5">
            	<div className="container mt-5">
            		<Row>
            			<Col span={16}>
            				<div className="display-4 text-capitalize mb-3 font-weight-bold">
            					temukan ruang kerja senyaman mungkin
            				</div>
            				<figure className="w-75">
            					<img src={require('../img/nyaman.jpg')} className="img-fluid" />
            				</figure>
            			</Col>
            			<Col span={8}>
            				<div className="d-flex justify-content-end">
            					<Card className="w-100">
            						<FormBooking />
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
