import React, { useContext } from 'react'
import { AuthContext } from '../global/context/AuthenticationContext'
import { SignIn } from '../screens/SignIn/SignIn'
import { TopTabs } from './TopTabs'

export function Routes() {
    const {isAuthenticated} = useContext(AuthContext)
    return (
       isAuthenticated ? <TopTabs /> : <SignIn />
    )
}