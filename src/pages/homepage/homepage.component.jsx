import React from 'react'
import './homepage.component.scss'
import DirectoryMenu from '../../components/directory/directory.component'
import {HomePageContainer} from './homepage.styles'
// const HomePage =()=>(
//         <div className="homepage">
//         <DirectoryMenu/>
//     </div>
// )

const HomePage =()=>(
    <HomePageContainer>
        <DirectoryMenu/>
    </HomePageContainer>
)


export default HomePage