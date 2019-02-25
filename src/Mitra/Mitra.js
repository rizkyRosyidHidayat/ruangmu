import React, { Component, PropTypes } from 'react';
import Header from '../Header.js';
import Banner from './Banner.js';
import Promosi from './Promosi.js';
import Ulasan from './Ulasan.js';
import Tentang from './Tentang.js';
import Footer from '../Footer.js';

class Mitra extends Component {
    render() {
        return (
          <React.Fragment>
          	<Header />
          	<Banner />
          	<Promosi />
          	<Ulasan />
          	<Tentang />
          	<Footer />
          </React.Fragment>
        );
    }
}

export default Mitra;
