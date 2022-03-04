import React from 'https://cdn.skypack.dev/react@17.0.1';
//import './App.scss';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router , Switch , Route, Link } from 'https://cdn.skypack.dev/react-router-dom@5.1.2';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';

 

class App extends React.Component {
  render () {
    console.log('app js');
  return (
    <>
    
  <Router>
      <Navbar />
   <ul>
      <li><Link to="/">Dashboard</Link></li>
      <li><Link to="/products">Products</Link></li>
    </ul>
   
     <Switch>
        <Route exact path='/'  component={Home} />
          <Route path='/products'  component={Products} />
        <Route path="*" component={Home} />
       </Switch>
   </Router>
        </>
      
  );
  }
  
}

export default App;
