import React from 'react'
import './directory.styles.scss'
import MenuItem from '../../components/menu-item/menu-item.component'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectSections} from '../../redux/directory/directory.selector'

const Directory = ({sections}) =>(
    <div className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections:selectSections
})
export default connect(mapStateToProps)(Directory)
