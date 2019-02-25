import React, { Component } from 'react';
import {TreeSelect} from 'antd';

const TreeNode = TreeSelect.TreeNode;

class Pembayaran extends Component {
	constructor(props){
		super(props);
		this.state = {value: undefined}
	}

	onChange = (value) => {
		this.setState({value: value});
	}

    render() {
        return (
          <TreeSelect
          {...this.props}
          value={this.state.value}
          dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
          placeholder="Pembayaran"
          allowClear
          treeDefaultExpandAll
          onChange={this.onChange.bind(this)} >
          	<TreeNode value="langsung" title="Langsung" key="langsung" />
          	<TreeNode title="Transfer" key="transfer">
							<TreeNode value="bri" title="BRI" key="BRI" />
						</TreeNode>          	
          </TreeSelect>
        );
    }
}

export default Pembayaran;
