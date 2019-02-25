import React, { Component } from 'react';
import {Modal, Form, Icon, Input, Button, Checkbox, Cascader} from 'antd';

class Login extends Component {
    constructor(props) {
        super(props);
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
            <Modal
            	{...this.props}
            	title="Log in"
					    centered
					    footer={null} >
					    <Form onSubmit={this.handleSubmit} className="login-form">
		            <Button size="large" type="primary" className="mb-3" block icon="facebook">
		            	Login with facebook
			          </Button>
			          <Button size="large" type="default" htmlType="link" className="mb-3" block icon="google">
		            	Login with google
			          </Button>
			        	<p className="text-center">OR</p>
				        <Form.Item>
				        	{getFieldDecorator('userName', {
				        		rules: [{required: true, message: 'Please entry username'}],
				        	})(
				        		<Input size="large" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
				        	)}
				        </Form.Item>
				        <Form.Item>
				        	{getFieldDecorator('password', {
				        		rules: [{required: true, message: 'Please entry password'}],
				        	})(
				        		<Input size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
				        	)}
				        </Form.Item>
				        <Form.Item>
				          <div className="d-flex justify-content-between">
				          	<Checkbox size="large">Remember me</Checkbox>
				          	<a className="login-form-forgot" href="">Forgot password</a>
				          </div>
				        </Form.Item>
				          <Button size="large" type="primary" htmlType="submit" className="w-100 mb-3">
				            Log in
				          </Button>
				      </Form>
					  </Modal>
        );
    }
}

export default Form.create({name: 'form_login'})(Login);
