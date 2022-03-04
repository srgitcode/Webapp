import React, { useState } from 'https://cdn.skypack.dev/react@17.0.1';
import * as FaIcons from 'https://cdn.skypack.dev/react-icons@v4.3.1/fa';
import * as AiIcons from 'https://cdn.skypack.dev/react-icons@v4.3.1/ai';
import { BrowserRouter as Router,Route, Link } from 'https://cdn.skypack.dev/react-router-dom@5.1.2';
import { SidebarData } from './SidebarData.js';
//import './Navbar.scss';
import { IconContext } from 'https://cdn.skypack.dev/react-icons@v4.3.1';
//
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: true,
    };
      this.toggleMenu = this.toggleMenu.bind(this);
  }
 
  
  toggleMenu()  {
    this.setState({isMenuOpen: !this.state.isMenuOpen});
      console.log("on click " + this.state.isMenuOpen);
  }
  
  

  
  render () {

  return (
    <>
  
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={() => this.toggleMenu()} />
          </Link>
        </div>
        <nav className={this.state.isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={() => this.toggleMenu()}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
    
            {SidebarData.map((item, index) => {
              return (
                
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
                 
            })}
         
          </ul>
        </nav>
      </IconContext.Provider>
       
    </>
  );
}
}

export default Navbar;
