import React from 'react'
import Display from '../Display/Display.jsx'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx'
import { StyledBackground } from './Styled.js'

export default function Background() {
    return (
        <StyledBackground>
            <Header/>
            <Display/>
            <Footer/>
        </StyledBackground>
    )
}
