import React from 'react';
import './Footer.css';

const Footer =() =>{
  return(
    <footer>
      <div className="wrapper">
        <ul className='links'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Terms and Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Collection Statement</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#">Manage Account</a></li>
        </ul>
        <span>Copyright &copy; 2016 DEMO Streaming. All rights Reserved. </span>
        <div className="social">
          <ul>
            <li>
              <a href="#" >
                <img src="./fb.png" />
              </a>
            </li>
            <li>
              <a href="#" >
                <img src="./tw.png" />
              </a>
            </li>
            <li>
              <a href="#" >
                <img src="./ig.png" />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" >
                <img src="./app-store.png" />
              </a>
            </li>
            <li>
              <a href="#" >
                <img src="./google-play.png" />
              </a>
            </li>
            <li>
              <a href="#" >
                <img src="./ms.png" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    )
  }
  
export default Footer;