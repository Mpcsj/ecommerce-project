import CartTypes  from "./cart.types";
import {REHYDRATE} from 'redux-persist'
import {addItemtoCart,removeItemFromCart} from './cart.utils'
const INITIAL_STATE={
    showCartDropDown:false,
    cartItems:[]
}

const cartReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case REHYDRATE:
            return state
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
        case CartTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems:removeItemFromCart(state.cartItems,action.payload)
            }
        case CartTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems:state.cartItems.filter(item=>item.id !== action.payload.id)
            }
        default:
            return{
                ...state
            }
    }
}

export default cartReducer