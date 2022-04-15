import React from "https://cdn.skypack.dev/react@17.0.1";
//

import { BrowserRouter as Router, Switch, Route , Link } from "https://cdn.skypack.dev/react-router-dom@5.1.2";
import PropTypes from "https://cdn.skypack.dev/prop-types";
import { withRouter } from "https://cdn.skypack.dev/react-router";
//import Tabs from './components/Tabs';
//import Tab from './components/Tab';
//import Tabsnew from './components/Tabsnew';
//import Tabnew from './components/Tabnew';
import Tablinks from './components/Tablinks';
import Prereqfund from './pages/Tabone';
import Tabvessel from './pages/Tabvessel';
import Tabitadm from './pages/Tabitadm';
//import Services from './pages/Services';


class App extends React.Component {
  
  constructor(props) {
    super(props);
  }

   static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  
  render(){
    
     const path  = JSON.stringify(window.location.href);
    const { match, location, history } = this.props;
    
    console.log(window.location.href);
    console.log('====');
     console.log(path);
     console.log('====');
     console.log('location');
    console.log(location);
   
    return (
      <div>
           <Router>
        <h1>Hey welcome home!</h1>
        
           <Link to='/' className="tab-list-item">Profile</Link>
          <Link to='/comments' className="tab-list-item">Comments</Link>
          <Link to='/contact' className="tab-list-item">Contact</Link>
             
        <div className="tabs">
     
          <Switch>
            <Route exact path='/' component={Prereqfund} />
            <Route exact path='/comments' component={Tabvessel} />
            <Route exact path='/contact' component={Tabitadm} />
            <Route component={Prereqfund} />
            
          </Switch>
            
        </div>
       </Router>
      </div>
    );
  }
}

export default App;
