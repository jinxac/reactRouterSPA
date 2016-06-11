import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About';
import Contact from './Contact';

 
ReactDOM.render((
     <Router history={browserHistory}>
      <Route path="/" component={App}/>
       <Route path="/about" component={About}/>
       <Route path="/contact" component={Contact}/>
  </Router>
), document.getElementById('insights-app'));

