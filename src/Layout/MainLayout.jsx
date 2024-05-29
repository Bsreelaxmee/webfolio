import React from 'react'
import Navbar from '../Components/Navbar'
import HomePage from '../Pages/HomePage'
import AboutPage from '../Pages/AboutPage'
import ServicesPage from '../Pages/ServicesPage'


const MainLayout = () => {
  return (
    <div style={{ width:'100%',height:'105vh',backgroundColor:'#000000',color:'white'}}>
     
     <div style={{ width:'inherit',height:'12vh'}}>
     <Navbar/> 
     </div>

        
          {/* <AboutPage/>  */}
          {/* <HomePage/>  */}
           <ServicesPage/> 

    </div>
  )
}

export default MainLayout
