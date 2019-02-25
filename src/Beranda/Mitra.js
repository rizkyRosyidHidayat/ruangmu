import React, { Component, PropTypes } from 'react';
import {Row, Col, Card,Avatar, Button} from 'antd';

class Mitra extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    	const Items = [
        {title: 'Spicy', link: '/Pencarian', kota: 'Yogyakarta', img: require('../img/ivana-cajina-316246-unsplash.jpg')},
        {title: 'Spicy', link: '/Pencarian', kota: 'Yogyakarta', img: require('../img/ivana-cajina-316246-unsplash.jpg')},
        {title: 'Spicy', link: '/Pencarian', kota: 'Yogyakarta', img: require('../img/ivana-cajina-316246-unsplash.jpg')},
    		{title: 'Spicy', link: '/Pencarian', kota: 'Yogyakarta', img: require('../img/ivana-cajina-316246-unsplash.jpg')}
    	]

    	const mitra = Items.map((item, index) =>
    		<Col span={6}>
    			<a href={item.link}>
            <Card className="mitra">
                <img style={{ verticalAlign: 'middle' }} alt="mitra" src={item.img} className="w-25" />
                <Button 
                size="small" className="border-0 font-weight-bold"
                style={{ marginLeft: 16, verticalAlign: 'middle' }}>
                  Change
                </Button>
            </Card>
    			</a>
    		</Col>
    	 );
        return (
            <div className="container rekomendasi">
            	<Row gutter={24}>
	            	{mitra}
	            </Row>
            </div>
        );
    }
}

export default Mitra;
