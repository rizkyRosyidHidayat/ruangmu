import React, { Component, PropTypes } from 'react';
import {Row, Col} from 'antd';

class Kota extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    	const Items = [
    		{title: 'Yogyakarta', link: '/Pencarian', img: require('../img/ivana-cajina-316246-unsplash.jpg')},
    		{title: 'Yogyakarta', link: '/Pencarian', img: require('../img/ivana-cajina-316246-unsplash.jpg')},
    		{title: 'Yogyakarta', link: '/Pencarian', img: require('../img/ivana-cajina-316246-unsplash.jpg')},
    		{title: 'Yogyakarta', link: '/Pencarian', img: require('../img/ivana-cajina-316246-unsplash.jpg')},
    	]

    	const kota = Items.map((item, index) =>
    		<Col span={6}>
    			<a href={item.link}>
    				<div style={{backgroundImage: `url(${item.img})`, height: '150px'} } 
    				className="img-kota rounded" >
	    				<div className="d-flex justify-content-center align-items-center h-100">
	    					<p className="text-white h3">{item.title}</p>
	    				</div>
	    			</div>
    			</a>
    		</Col>
    	 );
        return (
            <div className="container my-5">
            	<Row gutter={24}>
	            	{kota}
	            </Row>
            </div>
        );
    }
}

export default Kota;
