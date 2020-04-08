import React from 'react'
import SHOP_DATA from './shop.data'
import './shop.styles.scss'
import CollectionPreview from '../../components/preview-collection/preview-colllection.component'
export default class ShopPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            collections:SHOP_DATA
        }
    }

    render(){
        const {collections}= this.state 
        return(
            <div className='shop-page'>
                {
                    collections.map(({id,...otherProps})=>{
                        return <CollectionPreview key={id} {...otherProps}/>
                    })
                }
            </div>
        )
    }
}