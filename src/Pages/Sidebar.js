import { Box, GridItem, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import AboutUs from '../Dashboard/AboutUs'
import CreateMissingList from '../Dashboard/CreateMissingList'
import FoundList from '../Dashboard/FoundList'
import Home from '../Dashboard/Home'
import MissingPersonTable from '../Dashboard/MissingPersonTable'
import SubmittedList from '../Dashboard/SubmittedList'
import SidebarDataMap from '../Component/SidebarDataMap'
const Sidebar = ({ children }) => {

  return (

    <SimpleGrid columns={{ base: 1, md: 10 }} >
      <GridItem colSpan={2} display={{ base: "none", md: "inline-block" }} ml={10}  >
        {/* <Link to='/missingPersonFinder/homeDashBoard'>
          <Home />
        </Link>
        <br /><br />

        <Link to='/missingPersonFinder/createMissingList' >
          <CreateMissingList />
        </Link>
        <br /><br />
        <Link to='/missingPersonFinder/MissingPersonTable'>
          <MissingPersonTable />
        </Link>
        <br /><br />

        <Link to='/missingPersonFinder/submittedList'>
          <SubmittedList />
        </Link>
        <br /><br />
        <Link to='/missingPersonFinder/FoundListTable'>
          <FoundList />
        </Link>
        <br /><br />

        <Link to='/missingPersonFinder/aboutUsDetail'>
          <AboutUs />
        </Link> */}


<SidebarDataMap/>


      </GridItem>
      <GridItem colSpan={8} display={{ base: "1", md: "inline-block" }}  >

        {children}
      
      </GridItem>
    </SimpleGrid>
  )
}

export default Sidebar