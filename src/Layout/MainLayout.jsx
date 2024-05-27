import React from 'react'
import Navbar from '../Components/Navbar'
import HomePage from '../Pages/HomePage'
import AboutPage from '../Pages/AboutPage'


const MainLayout = () => {
  return (
    <div style={{ width:'100%',height:'120vh',backgroundColor:'#000000',color:'white'}}>
     
     <div style={{ width:'inherit',height:'12vh'}}>
     <Navbar/> 
     </div>

        
          {/* <AboutPage/>  */}
         <HomePage/>
     

    </div>
  )
}

export default MainLayout
