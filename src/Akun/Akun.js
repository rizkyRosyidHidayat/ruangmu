import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {Row, Col, Card, Affix, Button} from 'antd';
import Header from '../Header.js';
import DataUser from './DataUser.js';
import EditDataUser from './EditDataUser.js';
import ListBooking from './ListBooking.js';
import Menu from './Menu.js';
import Footer from '../Footer.js';

class Akun extends Component {
    constructor(props) {
        super(props);
        this.state = {top: 20}
    }

    render() {
        return (
        	<React.Fragment>
        		<Header />
	          <div className="container mt-5">
	          	<Row gutter={24}>
	          		<Col span={16}>
                  <Router>
                    <Route 
                    path="/Akun/:direction(Edit|Booking|Data)"
                    component={componentWithRegex} />
                  </Router>
	          			<Footer />
	          		</Col>
	          		<Col span={8}>
        					<Affix offsetTop={this.state.top}>
      							<Card>
                      <figure className="w-50">
                        <img className="img-fluid rounded" 
                        alt="user" src={require('../img/nyaman.jpg')} />  
                      </figure>
                      <Menu />        
                    </Card>    
      						</Affix>
	          		</Col>
	          	</Row>
	          </div>  
        	</React.Fragment>
        );
    }
}

const componentWithRegex = ({match}) => {
  if (match.params.direction == "Edit") {
    return <EditDataUser />
  } else if(match.params.direction == "Booking") {
    return <ListBooking />
  } else if(match.params.direction == "Data") {
    return <DataUser />
  }
};

export default Akun;
