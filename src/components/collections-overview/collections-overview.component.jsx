import React from 'react'
import './collections-overview.styles.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCollections} from '../../redux/shop/shop.selectors'
import CollectionPreview from '../preview-collection/preview-colllection.component'

const CollectionsOverview = ({collections})=>(
    <div className='collections-overview'>
        {
            collections.map(({ id, ...otherProps }) => {
                return <CollectionPreview key={id} {...otherProps} />
            })
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections:selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)

