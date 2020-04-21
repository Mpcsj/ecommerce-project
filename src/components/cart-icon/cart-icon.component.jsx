import React from 'react'
import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping_bag.svg'
import {connect} from 'react-redux'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import {toggleCartDropdown} from '../../redux/cart/cart.actions'
import CartItem from '../cart-item/cart-item.component'
const TAG = 'cart-icon.component'
const CartIcon  =({toggleCart,itemCount})=>(
    <div className='cart-icon' onClick={toggleCart}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

// const mapStateToProps= ({cart:{cartItems}})=>({
//     itemCount:cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
// })
const mapStateToProps= (state)=>({
    itemCount:selectCartItemsCount(state)
})
const mapDispatchToProps = dispatch =>({
    toggleCart:()=>dispatch(toggleCartDropdown())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)