import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import AboutUs from '../Dashboard/AboutUs'
const LazyAboutUs=React.lazy(()=>import("../Dashboard/AboutUs"))
// import CreateMissingList from '../Dashboard/CreateMissingList'
const LazyCreateMissingList=React.lazy(()=>import("../Dashboard/CreateMissingList"))
// import FoundList from '../Dashboard/FoundList'
const LazyFoundList=React.lazy(()=>import("../Dashboard/FoundList"))
// import MissingPersonCard from '../Dashboard/MissingPersonCard'
const LazyMissingPersonTable=React.lazy(()=>import("../Dashboard/MissingPersonTable"))
// import SubmittedList from '../Dashboard/SubmittedList'
const LazySubmittedList=React.lazy(()=>import("../Dashboard/SubmittedList"))
// import Sidebar from '../Pages/Sidebar'
const LazySidebar=React.lazy(()=>import("../Pages/Sidebar"))
// import ChangePassword from '../Component/ChangePassword'
const LazyChangePassword=React.lazy(()=>import("../Component/ChangePassword"))
// import ForgotPassword from '../Component/ForgotPassword'
const LazyForgotPassword=React.lazy(()=>import("../Component/ForgotPassword"))
// import Login from '../Component/Login'
const LazyLogin=React.lazy(()=>import("../Component/Login"))
// import Signup from '../Component/Signup'
const LazySignup=React.lazy(()=>import("../Component/Signup"))
// import MissingPersonFinder from '../MissingPersonFinder'
const LazyMissingPersonFinder=React.lazy(()=>import('../MissingPersonFinder'))
// import Modal from '../Modal/Modal'
const LazyModal=React.lazy(()=>import("../Modal/Modal"))
// import Home from '../Dashboard/Home'
const LazyHome=React.lazy(()=>import("../Dashboard/Home"))
// import Header from '../Component/Header'
const LazyHeader=React.lazy(()=>import("../Component/Header"))
// import PostMissingPersonForm from '../Pages/Form/PostMissingPersonForm'
const LazyCreatetMissingPersonForm=React.lazy(()=>import("../Pages/Form/CreateMissingPersonForm"))
// import SubmittedListTable from '../Pages/Form/SubmittedListTable'
const LazySubmittedListTable=React.lazy(()=>import("../Pages/Form/SubmittedListTable"))
// import FoundListTable from '../Pages/Form/FoundListTable'
const LazyFoundListTable = React.lazy(()=>import("../Pages/Form/FoundListTable"))
// import AboutUsDetail from '../Pages/AboutUsDetail'
const LazyAboutUsDetail =React.lazy(()=>import("../Pages/AboutUsDetail"))
const LazyMissingPersonTableForm= React.lazy(()=>import('../Pages/Form/MissingPersonTable'))
const LazyHomeDashBoard=React.lazy(()=>import("../Pages/Form/HomeDashBoard"))
const Routing = () => {
  return (
      <Suspense fallback="Loading">
<BrowserRouter>
<Routes>
    <Route path='/' element={<LazyMissingPersonFinder/>}/>
    <Route path="/login" element={<LazyLogin/>}/>
    <Route path="/signup" element={<LazySignup/>}/>
    <Route path="/forgotPassword" element={<LazyForgotPassword/>}/>
    <Route path="/changePassword" element={<LazyChangePassword/>}/>
    <Route path='/sidebar' element={<LazySidebar/>}/>
    <Route path='/header' element= {<LazyHeader/> }/>
    <Route path='/missingPersonFinder/createMissingList' element={<LazyCreatetMissingPersonForm/>}/>
    <Route path='missingPersonFinder/submittedList' element={<LazySubmittedListTable/>}/>
    <Route path= 'missingPersonFinder/FoundListTable' element={<LazyFoundListTable/>}/>
    <Route path='missingPersonFinder/aboutUsDetail' element={<LazyAboutUsDetail/>}/>
    <Route path='/missingPersonFinder/MissingPersonTable' element={<LazyMissingPersonTableForm/>}/>
    <Route path="/dashboard/home" element={<LazyHome/>}/>
    <Route path='/dashboard/createMissingList' element={<LazyCreateMissingList/>}/>
    <Route path="/dashboard/missingPersonCard" element={<LazyMissingPersonTable/>}/>
    <Route path='/dashboard/submittedList' element={<LazySubmittedList/>}/>
    <Route path="/dashboard/foundList" element={<LazyFoundList/>}/>
    <Route path="/dashboard/aboutUs" element={<LazyAboutUs/>}/>
    <Route path="/modal" element={<LazyModal/>}/>
    <Route path="missingPersonFinder/homeDashBoard" element={<LazyHomeDashBoard/>}/>
    <Route path='*' element="ERROR 404!!"/>
  
</Routes>

</BrowserRouter>
</Suspense>

  )
}

export default Routing



