import React, { useState } from 'react'
import Display from '../Display/Display.jsx'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx'
import { StyledBackground } from './Styled.js'
import { OpenModalContext } from '../Context/OpenModalContext'
import { TempDataContext } from '../Context/TempDataContext'
import { ExpensesIdContext } from '../Context/ExpensesIdContext.js'
import Modal from '../Modal/Modal.jsx'

export default function Background() {
    const [modal, setModal] = useState(0)
    const [temp, setTemp] = useState([])
    const [ data, setData]= useState()
    return (
        <StyledBackground>
            <OpenModalContext.Provider value={{ modal, setModal }}>
                <TempDataContext.Provider value={{ temp, setTemp }}>
                    <ExpensesIdContext.Provider value= {{data, setData}}>
                    <Header />
                    <Display />
                    <Footer />
                        {
                            (modal === 1) ? <Modal expense={temp[2]} userid={temp[0]} financeid={temp[1]} /> : null
                        }
                   </ExpensesIdContext.Provider>
                </TempDataContext.Provider>
            </OpenModalContext.Provider>
        </StyledBackground>
    )
}
