import React from 'react'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import Classes from './Burger.css'

const burger = (props) => { 
    let transformedIngredients = 
      Object.keys(props.ingredients)
            .map(igKey => {
                return [...Array(props.ingredients[igKey] )].map((_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey} />
                });
            })
            .reduce((arr, el) => {
                return arr.concat(el);
            }, []);
    
    // console.log(transformedIngredients);

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Por favor, añade ingredientes!</p>
    }

    return (
        <div className={Classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default burger