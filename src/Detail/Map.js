import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}) =>
	<div style={{
		color: 'white', 
	  background: 'grey',
	  padding: '15px 10px',
	  display: 'inline-flex',
	  textAlign: 'center',
	  alignItems: 'center',
	  justifyContent: 'center',
	  borderRadius: '100%',
	  transform: 'translate(-50%, -50%)'
	}}>
		{text}
	</div>

class SimpleMap extends Component {
    static defaultProps = {
        center: {
        	lat: 59.95,
        	lng: 39.33
        },
        zoom: 11
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div style={{ height: '50vh', width: '100%' }} className="mb-5">
          	<GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCcGNUMnHK4HQrBpVZhtKmZVo81EzEXhCI' }}
          	defaultCenter={this.props.center}
          	defaultZoom={this.props.zoom} >
          		<AnyReactComponent
          		lat={59.955413}
          		lng={39.337844}
          		text="My Marker" />
          	</GoogleMapReact>
          </div>
        );
    }
}

export default SimpleMap;
