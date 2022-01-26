import React from 'react'
import { Route, Routes } from 'react-router'
import FindUser from '../../views/UserViews/FindUser/FindUser'
import UpdateUser from '../../views/UserViews/UpdateUser/UpdateUser'
import UserCreate from '../../views/UserViews/UserCreate/UserCreate'
import Users from '../../views/Users/Users'
import { DisplayBG } from './Styled'
import Intro from '../../views/Intro/Intro'
import ExpensesTab from '../../views/Expenses/ExpensesTab'
import ExpensesId from '../../views/ExpensesViews/ExpensesId/ExpensesId'

export default function Display() {
    return (
        <DisplayBG>
            <Routes>
                <Route path={'/'}  element={<Intro/>}/>
                <Route path={'/users'} element={<Users/>}/>
                <Route path={'/usercreate'} element={<UserCreate/>}/>
                <Route path={'/finduser'} element={<FindUser/>}/>
                <Route path={'/updateuser'} element={<UpdateUser/>}/>
                <Route path={'/expenses'} element={<ExpensesTab/>}/>
                <Route path={'/expensesid'} element={<ExpensesId/>}/>
            </Routes>
        </DisplayBG>
    )
}
