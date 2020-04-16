import CartTypes  from "./cart.types";
const INITIAL_STATE={
    showCartDropDown:false
}

const cartReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case CartTypes.TOGGLE_SHOW_CART_DROPDOWN:
            return{
                ...state,
                showCartDropDown:!state.showCartDropDown
            }
        default:
            return{
                ...state
            }
    }
}

export default cartReducer