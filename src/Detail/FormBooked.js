import React, { Component } from 'react';
import moment from 'moment';
import {Form, Input, Icon, Col, DatePicker, TimePicker, Select, InputNumber, Button, Modal} from 'antd';
import Pembayaran from './Pembayaran.js'

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

let dateString = dateString;

const format = 'HH';

const Option = Select.Option;

class FormBooking extends Component {
    constructor(props) {
      super(props);
      this.state = {
		    value: null,
		    date: null,
		    satuanLama: 'jam',
		  };
    }

    handleSubmit = (e) => {
	    e.preventDefault();
	    this.props.form.validateFields((err, values) => {
	      if (!err) {
	        console.log('Received values of form: ', values);
	      }
	    });
	  };
    render() {
				const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} layout="vertical" className="w-100">
            	<Form.Item>
            		<span className="h6">Kode</span>
            		<div className="h3 border rounded p-2">123456</div>
            	</Form.Item>
			        <Form.Item>
			          <Input.Group size="large">
				          <Col span={12}>
				          	<span className="h6">Tanggal</span>
					        		<DatePicker
					            defaultValue={moment('2015-06-06', 'YYYY-MM-DD')}
					            disabled
					            className="w-100" />
				          </Col>
				          <Col span={12}>
				          	<span className="h6">Mulai</span>
					        		<TimePicker 
					        		size="large" 
					        		defaultValue={moment('18', format)}
					            format={format} 
					            disabled
					            allowClear={false}
					            className="w-100" />
				          </Col>
				        </Input.Group>
			        </Form.Item>

			        <Form.Item>
			        	<Input.Group>
				          <Col span={12}>
				          	<span className="h6">Lama sewa</span>
					        		<InputNumber 
					        		size="large" 
					        		defaultValue="3"
					        		disabled	
					        		min={1} max={100} 
					        		placeholder="Lama booking" 
					        		className="w-100" />
				          </Col>
				          <Col span={12}>
				          	<span className="h6">Satuan</span>
				            <Select 
				            defaultValue="hari"
				            disabled 
				            size="large" 
				            className="w-100" >
									    <Option value="jam">Jam</Option>
									    <Option value="hari">Hari</Option>
									    <Option value="bulan">Bulan</Option>
									  </Select>
				          </Col>
				        </Input.Group>
			        </Form.Item>

			        <Form.Item>
			        	<span className="h6">Harga</span>
			        	<Input size="large" defaultValue="15000000" disabled />
			        </Form.Item>

			        <Form.Item>
			        	<span className="h6">Pembayaran</span>
			        		<Pembayaran
			        		defaultValue="bri"
			        		disabled />
			        </Form.Item>

			        <Button type="primary" htmlType="submit" size="large" className="w-100">Cetak</Button>
            </Form>
        );
    }
}

export default Form.create({name: 'normal_login'})(FormBooking);
