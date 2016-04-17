import React from 'react'
import {render} from 'react-dom'

var KinderGarden = React.createClass({
	getInitialState: function(){
		return {
			like: false
		}
	},
	changeHandler:function(){
		//this.state.like = !this.state.like //不能这样用，这样不会调用this.render
		this.setState({like:!this.state.like})
	},
	render:function(){
		let text = this.state.like?'React 非常棒':'React还是没有MVVM好……'
		return(
			<div>
				<p>{text}</p>
				<input type="checkbox" checked={this.state.like} onClick={this.changeHandler} />
			</div>
		)
	}
})

render(
	<KinderGarden>
	</KinderGarden>,
	document.getElementById('app')
)