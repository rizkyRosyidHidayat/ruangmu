import React, { Component } from 'react';
import {Row, Col, Affix, Card} from 'antd';
import Header from '../Header.js';
import Hasil from './Hasil.js';
import Filter from './Filter.js';
import Footer from '../Footer.js';

class Pencarian extends Component {
    constructor(props) {
        super(props);
        this.state = {top: 20}
    }

    render() {
        return (
          <React.Fragment>
          	<Header />

          	<div className="container rekomendasi">
          		<Row gutter={24}>
          			<Col span={16}>
          				<Hasil />
          				<Footer />
          			</Col>
          			<Col span={8}>
          				<Affix offsetTop={this.state.top}>
          					<Card>
          						<Filter />
          					</Card>
          				</Affix>
          			</Col>
          		</Row>
          	</div>
          </React.Fragment>  
        );
    }
}

export default Pencarian;
