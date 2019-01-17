import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './components/header';
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Users from "./components/users";
import Form from "./components/form";


const r = (
    <Router>
        <div>
        <Route exact path="/" component={Header} />
        <Route path="/users" component={Users} />
        <Route path="/form" component={Form} />
        
        </div>
      
    </Router>
  );
ReactDOM.render(r, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
