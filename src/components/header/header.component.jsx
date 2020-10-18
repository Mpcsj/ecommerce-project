import React from 'react'
import {Link}  from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartShowCartDropDown} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import './header.styles.scss'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils'
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
    OptionDiv
} from './header.styles'
const TAG= 'header.component'
const Header=({currentUser,showCartDropdown})=>{
    console.log(TAG,'curr user: ',currentUser)
    return(
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo'/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to='/shop'>
                    CONTACT
                </OptionLink>
                {
                    currentUser?
                    <OptionDiv onClick={()=>auth.signOut()}>SIGN OUT</OptionDiv>
                    :
                    <OptionLink to='/signin'>SIGN-IN</OptionLink>
                }
                <CartIcon/>
            </OptionsContainer>
            {showCartDropdown?(<CartDropDown/>):null}
                
        </HeaderContainer>
    )
}

// const mapStateToProps= state =>{
//     console.log(TAG,'mapStateToProps')
//     console.log(TAG,'state:',state)
//     return{
//         currentUser:state.user.currentUser,
//         showCartDropdown:state.cart.showCartDropDown
//     }
// }
const mapStateToProps= createStructuredSelector({
    currentUser:selectCurrentUser,
    showCartDropdown:selectCartShowCartDropDown
})
export default connect(mapStateToProps)(Header)