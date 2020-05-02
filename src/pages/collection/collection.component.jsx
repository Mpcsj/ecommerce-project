import React from 'react'
import './collection.styles.scss'
import {connect} from 'react-redux'
import CollectionItem from '../../components/collection-item/collection-item.component'
import {selectCollection} from '../../redux/shop/shop.selectors'
const TAG = 'collection.component'
const CollectionPage = ({collection})=>{
    console.log(TAG,'collection: ',collection)
    return(
        <div className='category'>
             <h2>COLLECTION PAGE</h2>
        </div>
    )
}

const mapStateToProps = (state,ownProps)=>({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage)