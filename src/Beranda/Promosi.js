import React, { Component } from 'react';
import { Carousel, Layout } from 'antd';

const {Content} = Layout;

class Promosi extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <Content className="bg-white content">
          	<Carousel autoplay className="mt-4">
					    <div className="slide">
					    	<p className="d-flex align-items-center h-100 h1 text-white justify-content-center">
					    		Lorem ipsum dolor sit amet
					    	</p>
					    </div>
					    <div className="slide">
					    	<p className="d-flex align-items-center h-100 h1 text-white justify-content-center">
					    		Lorem ipsum dolor sit amet
					    	</p>
					    </div>
					    <div className="slide">
					    	<p className="d-flex align-items-center h-100 h1 text-white justify-content-center">
					    		Lorem ipsum dolor sit amet
					    	</p>
					    </div>
					  </Carousel>
          </Content>
        );
    }
}

export default Promosi;
