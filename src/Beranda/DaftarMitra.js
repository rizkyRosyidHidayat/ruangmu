import React, { Component } from 'react';
import {Row, Col, Card, Button} from 'antd';

class Banner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="banner">
            	<div className="container mt-5">
            		<Row>
            			<Col span={16}>
            				<div className="display-4 text-capitalize mb-4 font-weight-bold">
            					Ingin bekerja sama <br/> dengan kami ?
            				</div>
            				<p className="lead">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      <br/>
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.       
                    </p>
                    <a href="/Mitra">
                      <Button size="large" type="primary">Iya, saya siap</Button>
                    </a>
            			</Col>
            			<Col span={8}>
                    <figure className="w-100">
                        <img src={require('../img/mitra.jpg')} className="img-fluid" />
                    </figure>
            			</Col>
            		</Row>
            	</div>
            </div>
        );
    }
}

export default Banner;
