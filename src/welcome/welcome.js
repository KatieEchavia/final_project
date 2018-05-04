import React from 'react';
import Header from '../components/header.js';

const Welcome = () => (
<div>
<Header />
  <div className="content">
    <article className="overview">
      <h2>Welcome to Collective Health</h2>
      <h5>Collective Health is a total health benefits solution for self-funded employers. Here's how it works:</h5>
      <h4>Connect</h4>
      <p>We combine our medical partners' broad network with PBM, Dental, and Vision networks, the client's HR/Ben Admin System, and an open, flexible ecosystem of innovative point solutions.</p>
      <h4>Run</h4>
      <p>We then integrate and adjudicate medical claims, manage elibility files for clients, and help manage payments to and from network and program partners.</p>
      <h4>Optimize</h4>
      <p>Through our integrated analytics, predictive intelligence, and live performance dashboards, we assist our employer clients with making real-time decisions on how their plans and programs and working.</p>
      <h4>Engage</h4>
      <p>For members, we are the one stop shop for all their health benefit needs. We help members understand their claims, find local doctors, and simply udnerstand how their benefits work.</p>
    </article>

    <h3>Eligibility</h3>
    <h5>To be completed 8 weeks before launch</h5>
    <div className="row">
      <article className="col-1-2">
        Collective Health is the source of truth for client eligibility to
        partners. Collective Health receives eligibility directly from our
        clients' Ben Admin, parses it, and delivers it to partners. Are you
        requesting an eligibility file feed on behalf of the Plan Sponsor?
      </article>
      <article className="col-1-2">
        If yes, please complete the eligibility specification here.
      </article>
    </div>

    <h3>Claims</h3>
    <div className="row">
      <article className="col-1-2">
        <h4>Inbound Claims</h4>
        <h5>To be completed 8 - 10 weeks before launch</h5>
        <p>
          Will you be generating and sending claims directly to Collective
          Health? If yes, please review the Claims Guide here and provide a
          sample 837.
        </p>
      </article>
      <article className="col-1-2">
        <h4>Outbound Claims</h4>
        <h5>Requires 4 - 6 weeks for set up</h5>
        <p>
          Did the Plan Sponsor request that Collective Health send you Medical
          or Rx claims data? If yes, please complete the Data Security
          Questionnaire here.
        </p>
      </article>
    </div>

    <h3>Utilization</h3>
    <h5>To be completed 8 - 10 weeks after launch</h5>
    <p>
      Collective Health typically receives a utilization file from partners.
      This captures engagement, satisfaction, among other metrics, and helps
      power the various touchpoints of member engagement. Please review
      Collective Health's utilization file here and submit a test file here.</p>

    <h3>SFTP</h3>
    <h5>To be completed 8 weeks before launch</h5>
    <p>Description</p>

    <h3>Member Experience</h3>
    <h5>To be completed 3 - 5 weeks before launch</h5>
    <p>Description</p>

    <h3>Billing</h3>
    <h5>To be completed 2 - 4 weeks before launch</h5>
    <p>Description</p>

    <h3>Security</h3>
    <h5>To be completed 0 - 4 weeks before launch</h5>
    <p>Description</p>
    <footer></footer>
  </div>
  </div>
);

export default Welcome;