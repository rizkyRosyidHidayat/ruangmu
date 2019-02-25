import React, { Component } from 'react';
import {Form, Input, Icon, Col, DatePicker, TimePicker, Select, InputNumber, Button} from 'antd';

function onChange(date, dateString) {
  console.log(date, dateString);
}

const format = 'HH';

const Option = Select.Option;

const children = [];
for(let i = 10; 1<36; i++){
	children.push(
		<Option key={i.toString(36)+i}>{i.toString(36)+i}</Option>
	);
}

function handleChangeFasilitas(value) {
	console.log(`selected ${value}`);
}

class FormBooking extends Component {
    constructor(props) {
        super(props);
    }

    state = {
	    value: null,
	  };

		onChangeTime = (time) => {
		  console.log(time);
		  this.setState({ value: time });
		};

		handleSubmit = (e) =>{
    	e.preventDefault();
    	this.props.form.validateFields((err, values) =>{
    		if (!err) {
    			console.log('Receive', values);
    		}
    	});
    }

    render() {
    	const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} layout="vertical" className="w-100" action="/Pencarian">
				        <Form.Item>
				        	<span className="h6">Tempat</span>
				        	<Input size="large" 
				        	prefix={<Icon type="environment" style={{ color: 'rgba(0,0,0,.25)' }} />} 
				        	placeholder="Kota" />
				        </Form.Item>

				        <Form.Item>
				          <Input.Group size="large">
					          <Col span={12}>
					          	<span className="h6">Tanggal</span>
						        	<DatePicker onChange={onChange} />
					          </Col>
					          <Col span={12}>
					          	<span className="h6">Mulai</span>
						        	<TimePicker size="large" 
						        	format={format} 
						        	value={this.state.value} 
						        	onChange={this.onChangeTime} 
						        	className="w-100" />
					          </Col>
					        </Input.Group>
				        </Form.Item>

				        <Form.Item>
				        	<span className="h6">Mitra</span>
				        	<Input size="large" 
				        	prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
				        	placeholder="Mitra" />
				        </Form.Item>

				        <Form.Item>
				        	<Select 
				        	mode="multiple"
				        	className="w-100"
				        	placeholder="Fasilitas"
				        	onChange={handleChangeFasilitas}>
				        	{children}
				        	</Select>
				        </Form.Item>

				        <Button type="primary" htmlType="submit" size="large" className="w-100">Filter</Button>
            </Form>
        );
    }
}

export default Form.create({name: 'form_booking'})(FormBooking);
