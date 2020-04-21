import CartActionTypes from './cart.types'

export function toggleCartDropdown(){
    return{
        type:CartActionTypes.TOGGLE_SHOW_CART_DROPDOWN
    }
}

export const addItemToCart= item=>({
    type:CartActionTypes.ADD_ITEM,
    payload:item
})