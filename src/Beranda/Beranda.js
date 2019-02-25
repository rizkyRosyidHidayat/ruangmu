import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from '../Header.js';
import Banner from './Banner.js';
import Populer from './Populer.js';
import Promosi from './Promosi.js';
import Rekomendasi from './Rekomendasi.js';
import DaftarMitra from './DaftarMitra.js';
import Kota from './Kota.js';
import Mitra from './Mitra.js';
import Footer from '../Footer.js';

class Beranda extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <React.Fragment>
            <Header />            
            <Banner />
            <Rekomendasi />
            <DaftarMitra />
            <Mitra />
            <Populer />
            <Kota />
            <Footer />
          </React.Fragment>
        );
    }
}

export default Beranda;
