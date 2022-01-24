import React from 'react'
import { Route, Routes } from 'react-router'
import FindUser from '../../views/FindUser/FindUser'
import UpdateUser from '../../views/UpdateUser/UpdateUser'
import UserCreate from '../../views/UserCreate/UserCreate'
import Users from '../../views/Users/Users'
import { DisplayBG } from './Styled'


export default function Display() {
    return (
        <DisplayBG>
            <Routes>
                <Route path={'/'} />
                <Route path={'/users'} element={<Users/>}/>
                <Route path={'/usercreate'} element={<UserCreate/>}/>
                <Route path={'/finduser'} element={<FindUser/>}/>
                <Route path={'/updateuser'} element={<UpdateUser/>}/>
            </Routes>
        </DisplayBG>
    )
}
