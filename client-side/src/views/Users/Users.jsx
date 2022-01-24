import React from 'react'
import { StyledUsersCardFind, StyledUsersCardAdd } from './Styled'
import {RiSearch2Line, RiAddCircleFill, RiRefreshLine} from 'react-icons/ri'

import { Link } from 'react-router-dom'
export default function Users() {
    return (<>
      <Link style={{"color":"black"}}to={'/usercreate'}> <StyledUsersCardAdd><RiAddCircleFill/>Adicionar</StyledUsersCardAdd></Link>
      <Link style={{"color":"black"}}to={'/finduser'}> <StyledUsersCardAdd><RiSearch2Line/>Procurar</StyledUsersCardAdd></Link>
      <Link style={{"color":"black"}}to={'/updateuser'}><StyledUsersCardAdd><RiRefreshLine/>Atualizar</StyledUsersCardAdd></Link>
       
       </>
    )
}
