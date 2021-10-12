export const initialState = {
    basket: [],
    user: null,
}

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, sum) => amount + sum.price , 0)

export default function reducer(state, action) {
    console.log(action)
    switch (action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket : [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex((e) => e.id === action.id)
            let newBasket = [...state.basket]
            if(index >= 0) newBasket.splice(index, 1)
            else console.warn(`cannot remove item with id of ${action.id}`)
            return {
                ...state,
                basket: newBasket
            }
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
    }
}


