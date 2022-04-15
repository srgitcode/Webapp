import React from "https://cdn.skypack.dev/react@17.0.1";
//import './Button.css';
import { Link } from "https://cdn.skypack.dev/react-router-dom@5.1.2";


class Tablinks extends React.Component{
  
  render(){
    
    
    return (
      <div>
       <div className="tab-list-item">
          <Link to='/' className="tab-list-item">Profile</Link>
          <Link to='/comments' className="tab-list-item">Comments</Link>
          <Link to='/contact' className="tab-list-item">Contact</Link>
        </div>
        
      </div>
    );
  }
}

export default Tablinks;

