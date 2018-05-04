import React, { Component } from 'react';
import {
  Route
} from 'react-router';

import { HashRouter } from 'react-router-dom'

import './App.css';
import Welcome from './welcome/welcome';
import Member from './member/member';
import Security from './security/security.js';
import Eligibility from './eligibility/eligibility.js';
import Claims from './claims/claims.js';
import Nav from './components/nav.js';
import Footer from './components/footer.js';
import Header from './components/header.js';
import Sftp from './sftp/sftp.js';
import Utilization from './utilization/utilization.js';
import PlanAccounting from './plan_accounting/plan_accounting.js';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <HashRouter>
          <div>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/member" component={Member} />
            <Route exact path="/security" component={Security} />
            <Route exact path="/eligibility" component={Eligibility} />
            <Route exact path="/sftp" component={Sftp} />
            <Route exact path="/claims" component={Claims} />
            <Route exact path="/utilization" component={Utilization} />
            <Route exact path="/plan_accounting" component={PlanAccounting} />
          </div>
        </HashRouter>
        <Footer />
      </div>
    );
  }
}


export default App;
