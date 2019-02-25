import React, { Component } from 'react';
import {Row, Col, Divider} from 'antd';

class Promosi extends Component {
    render() {
        return (
          <div className="container rekomendasi">
          	<Row gutter={24}>
          		<Col span={12}>
          			<div className="h1">Kenapa Mendaftar di Ruangmu ?</div>
          			<p className="lead">
          				Cukup tambahkan ruangan di coworking spacemu di Ruangmu, 
          				mulai dari untuk ruang meeting, ruang 
          				kerja maupun ruang acara, selebihnya biarkan Ruangmu 
          				yang mencarikan pelanggan untuk datang ke Ruanganmu.
          			</p>
          		</Col>
          		<Col span={12}>
          			<div className="h1">Kami Pastikan Pelanggan Datang</div>
          			<p className="lead">
          				Biarkan Ruangmu membantu pemasaran Ruanganmu, permudah pelanggan 
          				untuk pesan di Ruangmu, dan terima pendapatan setiap harinya 
          				tanpa ada potongan sedikitpun alias 100%.
          			</p>
          		</Col>
          	</Row>
          	
          	<Divider>
	          	<p className="display-4 text-center my-5 font-weight-bold">
	    					Mendaftar di Ruangmu
	    				</p>
    				</Divider>    				

    				<Row gutter={24}>
          		<Col span={8}>
          			<div className="h1">Tambahkan Tempat, Gratis</div>
          			<p className="lead">
          				Daftarkan ruangan secara gratis sekarang, sehingga saat kami siap,
          				kami akan memprioritaskan ruanganmu untuk mendapatkan pelanggan 
          				lebih dahulu sebelum yang lain.
          			</p>
          		</Col>
          		<Col span={8}>
          			<div className="h1">Siapkan Tempat Sesukamu</div>
          			<p className="lead">
          				Pastikan ruanganmu siap, karena kami akan sesegera mungkin 
          				memberikan layanan uji coba untuk para calon pelangganmu secara gratis.
          			</p>
          		</Col>
          		<Col span={8}>
          			<div className="h1">Terima Para Pelanggan</div>
          			<p className="lead">
          				Buat calon pelangganmu merasa nyaman dan mudah terhadap layanan yang 
          				kamu berikan dengan mendaptarkan ruanganmu di Ruangmu, 
									dan terima pelangganmu berulangkali.
          			</p>
          		</Col>
          	</Row>
          </div>
        );
    }
}

export default Promosi;
