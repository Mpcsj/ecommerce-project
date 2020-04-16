import React from 'react'
import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-buttom.components'
import {connect} from 'react-redux'
import {addItemToCart} from '../../redux/cart/cart.actions'
const TAG = 'collection-item.component'
const CollectionItem = ({ item,addItem }) => {
    const {name, price, imageUrl} = item
    console.log(TAG,'item: ',imageUrl)
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage:`url(${imageUrl})`
                }}            
                >
            </div>
            <div className='collection-footer'>
                    <span className='name'>{name}</span>
                    <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={()=>addItem(item)} inverted>Add to cart</CustomButton>
        </div>
    )
}

const mapDispatchtoProps = dispatch=>({
    addItem:(item)=>dispatch(addItemToCart(item))
})
export default connect(null,mapDispatchtoProps)(CollectionItem)

