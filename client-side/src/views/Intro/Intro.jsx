import React from 'react'
import { StyledIntroBg, StyledLogo } from './Styled'

export default function Intro() {
    return (
       <StyledIntroBg>
           <StyledLogo>
               <h2>DEVinBank</h2>
               <p>Bem vindo ao DEVinBank</p>
               <p>Aqui você pode acessar a <i>Conta365</i>
               utilize a aba de usuários para conhecer os usuários e a aba de despesas para adicionar ou remover gastos
               </p>
           </StyledLogo>
       </StyledIntroBg>
    )
}
