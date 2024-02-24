import React from 'react';
import './Header.css';

const Header =() =>{
  return(
    <header>
      <div className="wrapper">
        <h1><a href="/">DEMO Streaming</a></h1>
        <button onClick={() => {
          console.warn('open hamburger');
        }} className='mobile-nav'></button>
        <nav>
          <ul>
            <li>
              <a href="">Login</a>
            </li>
            <li>
              <a href="" className='call-to-action'>Start your free trial</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    )
  }
  
export default Header;