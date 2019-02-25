import React, { Component } from 'react';
import moment from 'moment';
import {Form, Input, Icon, Col, DatePicker, TimePicker, Select, InputNumber, Button, message, TreeSelect} from 'antd';
import Pembayaran from './Pembayaran.js'

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

const TreeNode = TreeSelect.TreeNode;

let dateString = dateString;

const format = 'HH';

const Option = Select.Option;

const success = () => {
  message.success(
  	<div className="lead">
  		Transaksi berhasil untuk melihatnya bisa click <br/>
  		<a href="/Akun/Booking"> menu booking </a>
  		atau <a href="/Akun/Booking"> email</a>.
  	</div>, 10
  );
};

class FormBooking extends Component {
    constructor(props) {
      super(props);
      this.state = {
		    value: null,
		    date: null,
		    satuanLama: 'jam',
		    valuePembayaran: undefined,
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

	  harga = (event) => {
	  	this.setState({satuanLama: event});
	  	// console.log(this.state.satuanLama);
	  };

	  onChangePembayaran = (value) => {
			this.setState({valuePembayaran: value});
		};

		onChangeTime = (time) => {
		  this.setState({ value: time });
		};

    render() {
    	function disabledDate(current) {
			  // Can not select days before today and today
			  return current < moment().endOf('day') 
			  || current.isSame('2019-02-20', 'day') 
			  || current.isSame('2019-02-11', 'day');
			}
				const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} layout="vertical" className="w-100">

			        <Form.Item>
			          <Input.Group size="large">
				          <Col span={12}>
				          	<span className="h6">Tanggal</span>
				          	{getFieldDecorator('date', {
					        		rules: [{required: true, message: 'Please entry date & time'}],
					        	})(
					        		<DatePicker
					            disabledDate={disabledDate}
					            className="w-100" />
					        	)}
				          </Col>
				          <Col span={12}>
				          	<span className="h6">Mulai</span>
				          	{getFieldDecorator('time', {
					        		rules: [{required: true, message: 'Please entry time'}],
					        	})(
					        		<TimePicker size="large" 
					            format={format} 
					            value={this.state.value} 
					            onChange={this.onChangeTime.bind(this)} 
					            className="w-100"
					            disabledHours={
					            	()=>([1,2,3])
					            } />
					        	)}
				          </Col>
				        </Input.Group>
			        </Form.Item>

			        <Form.Item>
			        	<Input.Group>
				          <Col span={12}>
				          	<span className="h6">Lama sewa</span>
				          	{getFieldDecorator('lama', {
					        		rules: [{required: true, message: 'Please entry this'}],
					        	})(
					        		<InputNumber size="large" min={1} max={100} placeholder="Lama booking" className="w-100" />
					        	)}
				          </Col>
				          <Col span={12}>
				          	<span className="h6">Satuan</span>
				            <Select 
				            defaultValue={this.state.satuanLama} 
				            size="large" 
				            className="w-100"
				            onChange={this.harga.bind(this)} >
									    <Option value="jam">Jam</Option>
									    <Option value="hari">Hari</Option>
									    <Option value="bulan">Bulan</Option>
									  </Select>
				          </Col>
				        </Input.Group>
			        </Form.Item>

			        <Form.Item>
			        	<span className="h6">Harga</span>
			        	<Input size="large" defaultValue="0" disabled />
			        </Form.Item>

			        <Form.Item>
			        	<span className="h6">Pembayaran</span>
			        	{getFieldDecorator('pembayaran', {
			        		rules: [{required: true, message: 'Please entry this'}],
			        	})(
			        		<TreeSelect
					          value={this.state.valuePembayaran}
					          dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
					          placeholder="Pembayaran"
					          allowClear
					          treeDefaultExpandAll
					          onChange={this.onChangePembayaran.bind(this)} >
					          	<TreeNode value="langsung" title="Langsung" key="langsung" />
					          	<TreeNode title="Transfer" key="transfer">
												<TreeNode value="bri" title="BRI" key="BRI" />
											</TreeNode>          	
					          </TreeSelect>
			        	)}
			        </Form.Item>

			        <Button type="primary" 
			        htmlType="submit" 
			        size="large" 
			        className="w-100"
			        onClick={success}>Booking</Button>
            </Form>
        );
    }
}

export default Form.create({name: 'normal_login'})(FormBooking);
