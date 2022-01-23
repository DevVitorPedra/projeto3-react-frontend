import React from 'react'
import { LogoContainer, MenuBar, MenuButton, StyledHeader } from './Styled'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <StyledHeader>
           <Link to={'/'}><LogoContainer /></Link> 
            <MenuBar>
                <Link to={'/users'} ><MenuButton>Usuários</MenuButton> </Link>
                <Link to={'/expenses'}><MenuButton>Despesas</MenuButton></Link>
            </MenuBar>
        </StyledHeader>
    )
}
