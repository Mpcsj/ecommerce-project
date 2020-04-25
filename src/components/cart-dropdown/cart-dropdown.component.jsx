import React from 'react'
import './cart-dropdown.styles.scss'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {createStructuredSelector} from 'reselect'
import {toggleCartDropdown} from '../../redux/cart/cart.actions'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-buttom.components'
// quando eu nao implemento a funcao mapDispatchToProps
// explicitamente, a funcao dispatch é passada como props do componente
// e pode ser chamada por la
const CartDropDown=({cartItems,history,dispatch})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length?
                cartItems.map(item=><CartItem key={item.id} item={item}/>)
                :
                <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={()=>{
            history.push('/checkout')
            dispatch(toggleCartDropdown())
        }}>GO TO CHECKOUT</CustomButton>
    </div>
)
// const mapStateToProps = ({cart:{cartItems}})=>({
//     cartItems
// })
const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropDown))