import React from 'react'
import './custom-buttom.styles.scss'

export default ({children,...otherProps})=>(
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
)