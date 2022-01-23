import React from 'react'
import { Route, Routes } from 'react-router'
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
            </Routes>
        </DisplayBG>
    )
}
