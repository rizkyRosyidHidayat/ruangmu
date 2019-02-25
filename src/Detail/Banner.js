import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Layout, Row, Col, Card, Rate, Button, Affix} from 'antd';
import FormBooking from './FormBooking.js';
import FormBooked from './FormBooked.js';
import Isi from './Isi.js';

const {Content} = Layout;

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	top: 20,
        	showBooking: false
        }
    }
    

    render() {
    	let ModalClose = () => this.setState({ showBooking: false});
    	const Item = ['Spicy', 'Yogyakarta','Private', '5-10 Orang']
    	const Kategori = Item.map((kategori, index) =>
			  <Button key={index} className="mr-2 mb-2"><a href="">{kategori}</a></Button>
			)
			function onChange() {
			  console.log(); // true of false
			}
        return (
            <div className="container mt-5">
            	<Row gutter={24} className="mt-5">
					      <Col span={16}>
					      	<div style={{height: '50vh', overflow: 'hidden'}} className="mb-3">
					      		<img className="img-fluid" 
					      		src={require('../img/ivana-cajina-316246-unsplash.jpg')} />
					      	</div>

					      	<Isi />
					      </Col>
					      <Col span={8}>
					      	<div className="mb-3" style={{height: '50vh'}}>
					      		<div className="display-4 font-weight-bold">Coworking Space</div>
						      	<Rate disabled defaultValue={5} className="my-2" />
						      	<br/>
						      	{Kategori}
					      	</div>
						      <Affix offsetTop={this.state.top} onChange={onChange}>
						      	<Card>
						      	<Router>
						      		<Route 
						      		path="/Detail/:direction(Booked|Booking)"
						      		component={componentWithRegex} />
						      	</Router>
						      	</Card>
						      </Affix>
					      </Col>
					    </Row>
            </div>
        );
    }
}

const componentWithRegex = ({match}) => {
	if (match.params.direction == "Booked") {
		return <FormBooked />
	} else if(match.params.direction == "Booking") {
		return <FormBooking />
	}
};
export default Banner;
