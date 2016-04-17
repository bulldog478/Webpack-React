import React from 'react'
import {render} from 'react-dom'

var KinderGarden = React.createClass({
	render:function(){
		return(
			<ol>
				{
					this.props.children.map(function(child){
						return <li>{child}</li>
					})
				}
			</ol>
		)
	}
})

render(
	<KinderGarden>
		<span>hello</span>
		<span>world</span>
	</KinderGarden>,
	document.getElementById('app')
)