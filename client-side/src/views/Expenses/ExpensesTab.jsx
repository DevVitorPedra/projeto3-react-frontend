import React from 'react'
import { Link } from 'react-router-dom'
import { CgInsertBeforeO } from 'react-icons/cg'
import { RiMoneyDollarCircleLine, RiListCheck2 } from 'react-icons/ri'
import { StyledUsersCardAdd } from '../Users/Styled'
export default function ExpensesId() {
    return (
        <>
            <Link style={{ "color": "black" }} to={'/expensesid'}> <StyledUsersCardAdd><RiListCheck2 />Listar</StyledUsersCardAdd></Link>
            <Link style={{ "color": "black" }} to={'/userexpenses'}> <StyledUsersCardAdd><RiMoneyDollarCircleLine />Despesas</StyledUsersCardAdd></Link>
            <Link style={{ "color": "black" }} to={'/insertexpenses'}><StyledUsersCardAdd><CgInsertBeforeO />Inserir</StyledUsersCardAdd></Link>
        </>
    )
}
