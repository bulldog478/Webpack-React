import React from 'react'
import {render} from 'react-dom'
import {Pagination} from 'react-bootstrap'

let NaviPage = React.createClass({
	getInitialState(){
		return{
			activePage:0
		}
	},
	handleSelect(event, selectEvent){
		let pageNum = selectEvent.eventKey
		window.open('demo0'+ pageNum +'/index.html')
	},
	render(){
		return(
			<div>	
				<h2>{this.props.title}</h2>
				<Pagination
					bsSize="large"
					items={6}
					activePage={this.state.activePage}
					onSelect={this.handleSelect} />
				<br/>
				<a href={this.props.github} target="_blank">本教程github地址</a>
			</div>
		)
	}
})

render(
	<NaviPage title="Basic Webpack&React Tutorials" github="xxx"/>,
	document.getElementById('navi')
)