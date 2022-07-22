import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Header from './Component/Header'
import Sidebar from './Pages/Sidebar'
import store from './store'

// main page  for misssing person finder


const MissingPersonFinder = () => { 
    const selector = useSelector(state=> state.UserData.yes)
    console.log("Hello yes how are you" , selector)
    console.log(selector.token,"TOken")
    return (
        <div>
    <Header/>
    <Sidebar/>

        </div>
    )
}

export default MissingPersonFinder