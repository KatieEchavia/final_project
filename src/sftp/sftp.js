import React from 'react';

const Sftp = () => (
  <div className="content">
    <article className="overview">
        <h2>SFTP File Transfer Protocol Set Up</h2>
        <h5>Thanks for working with Collective Health.  We have entered a relationship that includes the need to transfer data over SFTP and this form will help ensure a smooth set up process.</h5>
        <h5>Note, if you plan to exchange data over some other method, for example an API call, this is not the correct form for you.</h5>
    </article>

    <p>This form includes 3 sections:</p>
    <ul>
        <li>Section 1:  General contact information from you (the Provider/Partner).</li>
        <li>Section 2:  Outgoing requests -- where Collective Health hosts the SFTP connection and Partner sends data to Collective Health (e.g. Inbound eligibility data, Partner claims data, utilization data, etc.)</li>
        <li>Section 3: Incoming requests -- where Partner hosts the SFTP connection and Collective Health sends data to Partner. (e.g. Outbound eligibility data, Collective Health claims data, etc.)</li>
    </ul>

    <p>A few points about Collective Health SFTP Connections:</p>
    <p>We prefer to have separate authentication accounts for testing vs. production (eg. separate logins/keys/passwords).  We can support different sub directories if necessary instead.</p>

    <p>We prefer to use SSH key rather than password but it is not a firm requirement.</p>

    <p>Our outgoing IP address list for whitelisting include:</p>
    <ul>
        <li>52.25.215.13/32</li>
        <li>52.26.120.27/32</li>
        <li>52.88.247.177/32</li>
        <li>8.44.166.0/25</li>
    </ul>

    <p>Collective Health Point of Contact: SFTPrequests@collectivehealth.com</p>


    <h5>Please complete all relevant sections below.</h5>

    <form action="">

    <h3>Contact Information </h3>
    <p>If you can provide a single set of contact information that goes to a phone/contact email alias that is always preferable. If not, please provide two contacts so we have a backup.</p>

      <div className="Sftp-Form">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Email Address" />
      </div>

      <div className="Sftp-Form">
          <label htmlFor="setup-date">Requested Set Up Date</label>
          <input type="text" id="setup_date" placeholder="Date" />
      </div>

      <div className="Stfp-Form">
          <label htmlFor="company">Company</label>
          <input type="text" id="company" placeholder="Enter Company Name" />
      </div>

      <div className="Sftp-Form">
          <label htmlFor="primary-contact-fullname">Primary Contact - Full Name</label>
          <input type="text" id="primary-contact-full-name" placeholder="Full Name" />
      </div>

      <div className="Sftp-Form">
          <label htmlFor="primary-contact-phone-number">Phone number (and extension) - Primary Contact </label>
          <input type="text" id="primary-contact-phone-number" placeholder="Phone Number" />
      </div>

      <div className="Sftp-Form">
          <label htmlFor="email-primary-contact">Email - Primary Contact</label>
          <input type="text" id="primary-email" placeholder="Email" />
      </div>

      <div className="Sftp-Form">
          <label htmlFor="secondary-contact-phone-number">Phone - Secondary Contact</label>
          <input type="text" id="secondary-contact-phone-number" placeholder="Phone Number" />
      </div>

      <div className="Sftp-Form">
          <label htmlFor="secondary-contact-email">Email - Secondary Contact</label>
          <input type="text" id="secondary-contact-email" placeholder="Email" />
      </div>


      <h3>Collective Health Hosted Connection - Partner Sends Data to CH </h3>
      <p>
        Our SFTP Server URL is:   ftpsquare.collectivehealth.com   Port:  22
        Requested Folder Structure: Typically Collective Health will provide either folders for each type of data being received (e.g. Eligibility, Billing, Claims, etc) or root directory access, however if you have special requests please provide an attachment with your requested folder structure and email the requirements to sftprequests@collectivehealth.com
        Once this form is returned, we will send you your username.  If you shared a key, your account will be enabled shortly. If not, you must provide an email address to receive a secure email with your account password.
        Once the account is enabled, please upload a file (preferably named connection_test.txt) containing your name, company, or other identifiable information to confirm the connection is working
      </p>

      <div className="Sftp-Form">
          <label htmlFor="desired-username">Desired Username (if left blank, we will provide one)</label>
          <input type="text" id="desired-username" placeholder="username" />
      </div>

      <div className="Sftp-Form">
        <label htmlFor="authentication"><h4>Authentication</h4></label>
        <p>We use SSH Key (e.g. Public/Private keys) to enable secure connections. Please send your public SSH Key to SFTPrequests@collectivehealth.com. If you are unable to support this set up, please email SFTPrequests@collectivehealth.com and Collective Health will provide a one-time link to the password for your account(s).</p>
        <div className="Sftp-radio">
          <input type="radio" name="Sftp-option" id="Yes" /> Yes, I will send my public SSH key to Collective Health.
        </div>
      </div>

      <div className="Sftp-Form">
        <label htmlFor="public_ip_addresses"><h4>Please provide your public IP address(es)</h4></label>
        <p>We filter incoming connections by IP Address. Provide public IP addresses of all servers which will attempt to connect to Collective Health SFTP servers.</p>
        <input type="text" id="public_ip_addresses" placeholder="Public Ip Addresses" />
      </div>

      <div className="Sftp-Form">
          <label htmlFor="minimum_record_threshold"><h4>Minimum Record Threshold</h4></label>
          <p>If there is a minimum record threshold to setup an SFTP account, please provide the minimum number of records here. If no limit, please enter zero.</p>
          <input type="text" id="minimum_record_threshold" placeholder="minimum_record_threshold" />
      </div>


      <h3>Partner Hosted Connection - CH Sends Data to Partner</h3>
      <p>Our outgoing IP address list for whitelisting include:</p>
      <ul>
        <li>52.25.215.13/32</li>
        <li>52.26.120.27/32</li>
        <li>52.88.247.177/32</li>
        <li>8.44.166.0/25</li>
      </ul>
      <p>Please send the account information to SFTPrequests@collectivehealth.com</p>

      <p>A copy of your responses will be emailed to the address you provided.</p>

      <img alt="" className="drfinder" src="img/drfinder2.png" />

      <p>Never submit passwords through Google Forms.</p>

      <button type="submit">Submit</button>
    </form>
  </div>
);

export default Sftp;
