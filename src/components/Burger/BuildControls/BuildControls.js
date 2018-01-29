import React from "react";

import classes from './BuildControls.css'
import BuildControl from "./BuildControl/BuildControl";

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' }
]

const buildControls = (props) => ( 
	<div className={classes.BuildControls}>
	<p>Precio total: <strong>{props.precio.toFixed(2)}</strong></p>
		{
			controls.map(ctrl => (
				<BuildControl 
					key={ctrl.label} 
					label={ctrl.label}
					disabled={props.disabled[ctrl.type]}
					// En lugar de pasar el type aqui, y que luego hay aque invocar
					// a la funcion en el build control cogiendo el type qeu se le 
					// pasa, ya se invoca aqui el type correcto (como va de abajo a
					// arriba la ejecucion, churrula sin problemas) en forma de funcion
					// Es la magia de JSX !!
					// 
					// type={ctrl.type} 
					// _added={props._ingredientAdded }/>
					_removed={() => props._ingredientRemoved(ctrl.type)}
					_added={() => props._ingredientAdded(ctrl.type)} />
			))
		}
	</div>
)

export default buildControls;