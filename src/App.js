import React from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
// import HomePage from './components/HomePage'
// import Buyer from './components/Buyer'
// import Seller from './components/Seller'
import SignIn from './components/SignIn'
import SignUpContainer from './components/SignUpContainer'
 
class App extends React.Component{
  render(){
    return (
      <React.Fragment>
        <header className="header">
          <Link to="/">Home</Link>
          <Link to="/buyer">Buyer</Link>
          <Link to="/seller">Seller</Link>
          <Link to="/login">SignIn</Link>
        </header>
        <main className="content">
          {/* <Route path="/" exact component={HomePage} /> */}
          {/* <Route path="/buyer" component={Buyer} /> */}
          {/* <Route path="/seller" component={Seller} /> */}
          <Route path="/login" component={SignIn} />
          <Route path="/signup" component={SignUpContainer} />
        </main>
        <footer className="footer">
          <p>Ebay Buy and Sell App</p>
        </footer>
      </React.Fragment>
  );
  } 
}

export default App;
