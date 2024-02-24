import React from 'react';
import './MainLayout.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Layout =({children}) =>{
  return(
    <div className='main-layout'>
      <Header/>
      <main>{children}</main> 
      <Footer/>
    </div>
  )
}
  
export default Layout;