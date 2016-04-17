import React from 'react'
import {render} from 'react-dom'

var KinderGarden = React.createClass({
	getInitialState(){
		return {
			opacity: 1.0
		}
	},
	componentWillMount(){
		console.log('dom will be mounted') //仅执行一次
	},
	componentDidMount(){
		console.log('dom has be mounted') //仅执行一次
		this.timer = setInterval(() => {
			var opacity = this.state.opacity;
			this.setState({
				opacity:opacity
			})
			this.state.opacity -= 0.05;
		},100)
	},
	componentDidUpdate(nextProps, nextState){
		console.log(nextState.opacity)
		if(this.state.opacity < 0.1){
			this.state.opacity = 1.0
		}
	},
	render:function(){
		var { name, word } = this.props
		return(
			<div style={{opacity:this.state.opacity}}>
				<p>Hello {name},{word}</p>
			</div>
		)
	}
})

render(
	<KinderGarden name="boy" word="you are awesome!">
	</KinderGarden>,
	document.getElementById('app')
)