import React from 'react'
import {CustonButtonContainer} from './custom-button.styles'
export default ({children,...props})=>(
    <CustonButtonContainer 
        {...props}
    >
        {children}
    </CustonButtonContainer>
)