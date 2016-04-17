import React from 'react'
import {render} from 'react-dom'

var KinderGarden = React.createClass({
	clickHandler: function(){
		this.refs.myTextInput.focus();
	},
	render:function(){
		return(
			<div>
				<input type="text" ref="myTextInput"/>
				<input type="button" value="Focus the text input" onClick={this.clickHandler} />
			</div>
		)
	}
})

render(
	<KinderGarden>
	</KinderGarden>,
	document.getElementById('app')
)