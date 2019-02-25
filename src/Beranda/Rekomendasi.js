import React, { Component } from 'react';
import{Row, Col, Card, Tag, Rate, Icon} from 'antd';


class Rekomendasi extends Component {
    render() {
    	const Items = [
    		{
    			img: require('../img/ivana-cajina-316246-unsplash.jpg'),
    			title: 'Coworking space',
    			harga: '50000',
    			rating: 5,
          alamat: 'Jl. Jakarta',
    			list: ['Spicy', 'Yogyakarta', 'Private', '5-10 orang']
    		},
        {
          img: require('../img/ivana-cajina-316246-unsplash.jpg'),
          title: 'Coworking space',
          harga: '50000',
          rating: 5,
          alamat: 'Jl. Jakarta',
          list: ['Spicy', 'Yogyakarta', 'Private', '5-10 orang']
        },
        {
          img: require('../img/ivana-cajina-316246-unsplash.jpg'),
          title: 'Coworking space',
          harga: '50000',
          rating: 5,
          alamat: 'Jl. Jakarta',
          list: ['Spicy', 'Yogyakarta', 'Private', '5-10 orang']
        },
        {
          img: require('../img/ivana-cajina-316246-unsplash.jpg'),
          title: 'Coworking space',
          harga: '50000',
          rating: 5,
          alamat: 'Jl. Jakarta',
          list: ['Spicy', 'Yogyakarta', 'Private', '5-10 orang']
        },
        {
          img: require('../img/ivana-cajina-316246-unsplash.jpg'),
          title: 'Coworking space',
          harga: '50000',
          rating: 5,
          alamat: 'Jl. Jakarta',
          list: ['Spicy', 'Yogyakarta', 'Private', '5-10 orang']
        },
        {
          img: require('../img/ivana-cajina-316246-unsplash.jpg'),
          title: 'Coworking space',
          harga: '50000',
          rating: 5,
          alamat: 'Jl. Jakarta',
          list: ['Spicy', 'Yogyakarta', 'Private', '5-10 orang']
        },
    	] 

    	const rekomendasi = Items.map((item, index) =>
				<Col span={8} key={index} className="mb-5">
        <a href="/Detail/Booking">
  					<Card
  					hoverable
  					bordered={false} >
              <div style={{backgroundImage: `url(${item.img})`, height: '150px'} } 
              className="img-kota rounded mb-3" ></div>
                {
                  item.list.map((kategori, index) =>
                    <Tag key={index} className="mb-2"><a href="/Pencarian">{kategori}</a></Tag>
                  )
                }
                <div className="h4 mb-0">{item.title}</div>
                <Rate disabled defaultValue={item.rating} /> 
                <div className="text-primary">
                  <Icon type="environment" className="alamat mr-2" />
                  {item.alamat}
                </div>
                <div className="h5">Rp. {item.harga}</div>
  					</Card>
          </a>
				</Col>
			);

      return (
        <div className="container rekomendasi">
        	<div className="h3 mb-3 font-weight-bold text-center">
  					Rekomended for you
  				</div>
					<p className="h5 text-black-50 text-center">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
						<br/> sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p>
  				<br/>
  				<br/>
        	<Row gutter={24} className="mt-5">
        		{rekomendasi}
        	</Row>
        </div>
      );
    }
}


export default Rekomendasi;
