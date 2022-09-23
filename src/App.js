/* eslint-disable */ 
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
 } from 'react-router-dom';
import { CalculatorDesign } from './components/Calculator';
import { Homepage } from './components/Home';
import { Quotepage } from './components/Quote';
function App() {
  const pageHandler = (e) => {
    const target = e.target;
    const lists = Array.from(document.querySelectorAll('li'));
    lists.forEach( li => {
      const anchor = li.querySelector('a');
      anchor.style.color = 'rgb(133, 134, 147)';
    })
    target.style.color = '#aaa';
  }
  return (
    <Router>
      <div className="App">
        <nav className="navClass">
          <h1> Math Magicians </h1>
          <ul>
           <li>
            <Link to="/" onClick={pageHandler}>Home</Link>
          </li>
           <li>
            <Link to="/Calculator" onClick={pageHandler}>Calculator</Link>
          </li>
          <li>
            <Link to = "/Quote" onClick={pageHandler}>Quote</Link>
          </li>
         </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/Calculator">
            <CalculatorDesign />
          </Route>
          <Route path="/Quote">
            <Quotepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
