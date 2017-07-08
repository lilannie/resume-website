import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>HELLO</h1>
				{this.props.children}
			</div>
		);
	}
}

Main.propTypes = {
	children: PropTypes.node
};