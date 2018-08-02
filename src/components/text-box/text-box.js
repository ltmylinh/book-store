import React, { Component } from "react";

class TextBox extends Component{
	constructor(props){
		super(props);

		this.handleOnchange = this.handleOnchange.bind(this);
	}

	handleOnchange(evt){
		this.props.change(evt.target.value);
	}

	render(){
		const {value, placeholder} = this.props;
		return(
			<input type="textbox" value={value} placeholder={placeholder} onChange={this.handleOnchange}/>
		)
	}
}
export default TextBox;
