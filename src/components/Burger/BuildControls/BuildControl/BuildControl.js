import React from 'react';

import classes from './BuildControl.css'

const buildControl = (props) => (
	<div className={classes.BuildControl}>
		<div className={classes.Label}>{props.label}</div>
		<button 
			disabled={props.disabled}
			onClick={props._removed}
			className={classes.Less}>Less</button>
		<button 
			onClick={props._added}
			className={classes.More}>More</button>
	</div>
)

export default buildControl;