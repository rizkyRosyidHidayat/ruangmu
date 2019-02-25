import React, { Component } from 'react';
import {Modal, Form, Icon, Input, Button, Checkbox, Cascader} from 'antd';

class FormMitra extends Component {
    constructor(...args) {
        super(...args);
    }

    handleSubmit = (e) => {
	    e.preventDefault();
	    this.props.form.validateFields((err, values) => {
	      if (!err) {
	        console.log('Received values of form: ', values);
	      }
	    });
	  }
	  
    render() {
    	const {getFieldDecorator} = this.props.form;
        return (
					    <Form onSubmit={this.handleSubmit} className="login-form">
				        <Form.Item>
				        	<span className="h6">Coworking space</span>
				        	{getFieldDecorator('nama', {
				        		rules: [{required: true, message: 'Please entry nama coworking space'}],
				        	})(
				            <Input size="large" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Coworking spacemu" />
				          )}
				        </Form.Item>
				        <Form.Item>
				        	<span className="h6">Password</span>
				        	{getFieldDecorator('password', {
				        		rules: [{required: true, message: 'Please entry password'}],
				        	})(
				            <Input size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
				          )}
				        </Form.Item>
				        <Form.Item>
				        	<span className="h6">Email</span>
				        	{getFieldDecorator('email', {
				        		rules: [{required: true, message: 'Please entry email address'}],
				        	})(
				            <Input size="large" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="Email address" />
				          )}
				        </Form.Item>
				        <Form.Item>
				          <div className="d-flex justify-content-between">
				          	<Checkbox size="large">Remember me</Checkbox>
				          </div>
				        </Form.Item>
				          <Button size="large" type="primary" htmlType="submit" className="w-100 mb-3">
				            Sign up
				          </Button>
				      </Form>
        );
    }
}

export default Form.create({name: 'form_mitra'})(FormMitra);
