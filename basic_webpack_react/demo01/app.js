import React from 'react'
import {render} from 'react-dom';

var arr = [
	<h1>Hello world!</h1>,
	<h2>React is awesome</h2>
]

render(
	<div>
		<div>{arr}</div>
	</div>,
	document.getElementById('app')
)