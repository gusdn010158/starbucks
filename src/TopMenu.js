import React from 'react';
import {Link} from 'react-router-dom';
import {FaSistrix} from "react-icons/fa";
import './TopMenu.css';

function TopMenu() {
  // const searchEl = document.querySelector('.search');
  // const searchInputEl = searchEl.querySelector('input');    
    
  //   searchEl.addEventListener('click', function () {
  //     searchInputEl.focus();
  //   });
    
  //   searchInputEl.addEventListener('focus', function () {
  //     searchEl.classList.add('focused');
  //     searchInputEl.setAttribute('placeholder', '통합검색');
  //   });
    
  //   searchInputEl.addEventListener('blur', function () {
  //     searchEl.classList.remove('focused');
  //     searchInputEl.setAttribute('placeholder', '');
  //   });
    return (
        <div className="TopMenu"> 
        <nav>        
            <ul>
            <Link to="/">
                <li className="line">Sign in</li>
            </Link>
        <Link to="/">
              <li className="line">My Starbucks</li>
        </Link>
        <Link to="/">
          <li className="line">Customer Service & Ideas</li>
        </Link>
        <Link to="/">
          <li className="line">Find a store</li>
        </Link>
        
        <div class="menu">
          <div class="search">
            <input type="text" />
              <div class="material-icons"> <FaSistrix size="26"/></div>
          </div>
        </div>
     
  
        </ul>
       
        </nav>

        </div>
    );
}

export default TopMenu;