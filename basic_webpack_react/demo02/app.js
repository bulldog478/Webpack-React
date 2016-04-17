import React from 'react'
import {render} from 'react-dom'

var background={
	backgroundColor:'blue'
}

//创建一个组件
var HelloWorld = React.createClass({
	render: function(){
		return(
			<h1 style={background}>Hello {this.props.name}</h1>
		)
	}
})

render(
	<HelloWorld name="World"/>,
	document.getElementById('app')
)


