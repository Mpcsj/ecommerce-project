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
export const clearItemFromCart=item=>({
    type:CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:item
})

export const removeItem = item =>({
    type:CartActionTypes.REMOVE_ITEM,
    payload:item
})