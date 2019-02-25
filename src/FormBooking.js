import React, { Component } from 'react';
import {Form, Input, Icon, Col, DatePicker, TimePicker, Select, InputNumber, Button} from 'antd';

function onChange(date, dateString) {
  console.log(date, dateString);
}

const format = 'HH';

const Option = Select.Option;

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
		}

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
            <Form onSubmit={this.handleSubmit} layout="vertical" className="w-100">
				        <Form.Item>
				        	<span className="h6">Tempat</span>
				        	{getFieldDecorator('tempat', {
				        		rules: [{required: true, message: 'Please entry this'}],
				        	})(
				        		<Input size="large" prefix={<Icon type="environment" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Kota" />
				        	)}
				        </Form.Item>

				        <Form.Item>
				          <Input.Group size="large">
					          <Col span={12}>
					          	<span className="h6">Tanggal</span>
					          	{getFieldDecorator('date', {
						        		rules: [{required: true, message: 'Please entry date & time'}],
						        	})(
						        		<DatePicker onChange={onChange} />
						        	)}
					          </Col>
					          <Col span={12}>
					          	<span className="h6">Mulai</span>
					          	{getFieldDecorator('time', {
						        		rules: [{required: true, message: 'Please entry time'}],
						        	})(
						        		<TimePicker size="large" format={format} value={this.state.value} onChange={this.onChangeTime} className="w-100" />
						        	)}
					            
					          </Col>
					        </Input.Group>
				        </Form.Item>

				        <Form.Item>
				        	<Input.Group>
					          <Col span={18}>
					          	<span className="h6">Lama sewa</span>
					          	{getFieldDecorator('lama', {
						        		rules: [{required: true, message: 'Please entry this'}],
						        	})(
						        		<InputNumber size="large" min={1} max={100} placeholder="Lama booking" className="w-100" />
						        	)}
					          </Col>
					          <Col span={6}>
					          	<span className="h6">Satuan</span>
					            <Select defaultValue="Jam" size="large" className="w-100">
										    <Option value="jam">Jam</Option>
										    <Option value="hari">Hari</Option>
										    <Option value="bulan">Bulan</Option>
										  </Select>
					          </Col>
					        </Input.Group>
				        </Form.Item>

				        <a href="/Pencarian">
				        	<Button type="primary" htmlType="submit" size="large" className="w-100">Oke</Button>
				        </a>
            </Form>
        );
    }
}

export default Form.create({name: 'form_booking'})(FormBooking);
