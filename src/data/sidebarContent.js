import {  FaHome,FaEdit,FaListAlt} from 'react-icons/fa'
import {BsFillPersonXFill} from "react-icons/bs"
import { CgSearchFound } from 'react-icons/cg'
import { BsFillInfoCircleFill } from 'react-icons/bs'


const content= [{
    title:"Home",
    link:'/missingPersonFinder/homeDashBoard',
    icon:<FaHome/>,

},
{
    title:"Create Missing List",
    link:'/missingPersonFinder/createMissingList',
    icon:<FaEdit/>,
},
{
   title:"Missing Person Table",
   link:"/missingPersonFinder/MissingPersonTable",
   icon:<BsFillPersonXFill/>,
},
{
    title:"Submitted List Table",
    link:"/missingPersonFinder/submittedList",
    icon:<FaListAlt/>,
},
{
    title:"Found List Table",
    link:"/missingPersonFinder/FoundListTable",
    icon: <CgSearchFound/>,
       
},
{
    title:"About us",
    link:"/missingPersonFinder/aboutUsDetail",
    icon:<BsFillInfoCircleFill/>
}]
export default content