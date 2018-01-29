import React, { Component } from 'react'

import Burger from "../../components/Burger/Burger";
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Aux from '../../hoc/Auxiliarity'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

export default class BurgerBuilder extends Component {
    // constructor (props) {
    //     super(props);
    //     this.state = {...};
    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCounted = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] = updatedCounted;
        
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        // Si no hay ingredientes, no se hace nada
        if(oldCount <= 0)
            return;

        const updatedCounted = oldCount - 1;
        const updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] = updatedCounted;
        
        const priceReduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceReduction;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    _ingredientAdded={this.addIngredientHandler}
                    _ingredientRemoved={this.removeIngredientHandler}
                    precio={this.state.totalPrice}
                    disabled={disabledInfo} />
            </Aux>
        )
    }
}