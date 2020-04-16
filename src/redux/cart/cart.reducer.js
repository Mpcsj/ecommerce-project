import CartTypes  from "./cart.types";
import {addItemtoCart} from './cart.utils'
const INITIAL_STATE={
    showCartDropDown:false,
    cartItems:[]
}

const cartReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case CartTypes.TOGGLE_SHOW_CART_DROPDOWN:
            return{
                ...state,
                showCartDropDown:!state.showCartDropDown
            }
        case CartTypes.ADD_ITEM:
            return{
                ...state,
                cartItems:addItemtoCart(state.cartItems,action.payload)
            }
        default:
            return{
                ...state
            }
    }
}

export default cartReducer