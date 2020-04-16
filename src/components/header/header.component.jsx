import React from 'react'
import {Link}  from 'react-router-dom'
import {connect} from 'react-redux'
import './header.styles.scss'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils'
const TAG= 'header.component'
const Header=({currentUser,showCartDropdown})=>{
    return(
        <div className='header'>
            <Link to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser?
                    <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN-IN</Link>
                }
                <CartIcon/>
            </div>
            {showCartDropdown?(<CartDropDown/>):null}
                
        </div>
    )
}

const mapStateToProps= state =>{
    console.log(TAG,'mapStateToProps')
    console.log(TAG,'state:',state)
    return{
        currentUser:state.user.currentUser,
        showCartDropdown:state.cart.showCartDropDown
    }
}
export default connect(mapStateToProps)(Header)