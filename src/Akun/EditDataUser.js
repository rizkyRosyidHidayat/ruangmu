import React, { Component } from 'react';
import {Form, Input, Icon, Button, Popconfirm} from 'antd';

class EditDataUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	disabled: true,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) =>{
    	e.preventDefault();
    	this.props.form.validateFields((err, values) =>{
    		if (!err) {
    			console.log('Receive', values);
    		}
    	});
    };

    canEdit = () =>{
    	this.setState({disabled: false});
    };

    cannotEdit = () =>{
    	this.setState({disabled: true});
    }

    render() {
    	const {getFieldDecorator} = this.props.form;
        return (
          <Form onSubmit={this.handleSubmit} layout="vertical" className="w-100">
          	<Form.Item>
		        	<span className="h5">Nama</span>
		        	{getFieldDecorator('nama', {
		        		rules: [{required: true, message: 'Please entry this'}],
		        		initialValue: 'Rizky Rosyid Hidayat'
		        	})(
		        		<Input size="large" 
			          prefix={<Icon type="user" 
			          style={{ color: 'rgba(0,0,0,.25)' }} />} 
			          disabled={this.state.disabled} />
		        	)}
		        </Form.Item>

		        <Form.Item>
		        	<span className="h5">Password</span>
		        	{getFieldDecorator('password', {
		        		rules: [{required: true, message: 'Please entry this'}],
		        		initialValue: 'Rizky Rosyid Hidayat'
		        	})(
		        		<Input size="large" 
			          prefix={<Icon type="lock" 
			          style={{ color: 'rgba(0,0,0,.25)' }} />} 
			          disabled={this.state.disabled}
			          type="password" />
		        	)}
		        </Form.Item>

		        <Form.Item>
		        	<span className="h5">Email</span>
		        	{getFieldDecorator('email', {
		        		rules: [{required: true, message: 'Please entry this'}],
		        		initialValue: 'rizky.hidayat@students.amikom.ac.id'
		        	})(
		        		<Input size="large" 
			          prefix={<Icon type="mail" 
			          style={{ color: 'rgba(0,0,0,.25)' }} />} 
			          disabled={this.state.disabled}
			          type="email" />
		        	)}
		        </Form.Item>

		        <Form.Item>
		        	<div className="float-right">
		        		{
		        			this.state.disabled ? 
		        			<Button type="primary" onClick={this.canEdit}>Edit</Button> : 
		        			<React.Fragment>
		        				<Button onClick={this.cannotEdit}>Cancel</Button>
		        				<Popconfirm
                    title="Sure to save?"
                    onConfirm={() => this.handleSubmit}>
		        				<Button type="primary" htmltype="submit" className="ml-3">Save</Button>
		        				</Popconfirm>
		        			</React.Fragment>

		        		}
		        	</div>
		        </Form.Item>
          </Form>  
        );
    }
}

export default Form.create({name: 'form_user'})(EditDataUser);
