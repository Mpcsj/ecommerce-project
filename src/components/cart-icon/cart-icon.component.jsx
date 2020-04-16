import React from 'react'
import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping_bag.svg'
import {connect} from 'react-redux'
import {toggleCartDropdown} from '../../redux/cart/cart.actions'
const TAG = 'cart-icon.component'
const CartIcon  =({toggleCart})=>(
    <div className='cart-icon' onClick={toggleCart}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)
const mapDispatchToProps = dispatch =>({
    toggleCart:()=>dispatch(toggleCartDropdown())
})

export default connect(null,mapDispatchToProps)(CartIcon)