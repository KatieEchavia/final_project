import React from 'react';

const Security = () => (

  <div className="content">
  	<article className="overview">
  		<h2>TLS Set Up</h2>
  		<h5>In order to easily and securely send PHI back-and-forth via email, Collective Health sets up TLS (Transport-Layer Security) enforcement with all established partners.  
		This allows us to send member information in an email without having to use Virtru or encrypt the email. More information on this setup and what it means can be found here: </h5> 
	
		<a href="https://support.mcafeesaas.com/mcafee/_cs/AnswerDetail.aspx?sSessionID=&inc=128111&caller=~%2FFindAnswers.aspx%3FtxtCriteria%3Dtls%26sSessionid%3D">
			McAfee SaaS Transport Layer Security Protocol
		</a>

		<h5>You may already have TLS in place, which should make this a quick and easy process. Please reach out to tls@collectivehealth.com with any questions.</h5>
  	</article>

  	<form action="">
  	<div className="TLS-Form">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" placeholder="Email Address" />
  	</div>

	<div className="TLS-Form">
	    <label htmlFor="partner">Partner Name</label>
	    <input type="text" id="partner" placeholder="Enter Partner Name" />
	</div>

	<div className="TLS-Form">
		<label htmlFor="partner-tls-contact">Please provide the name and contact information for the main point of contact we will work with on your side to set up TLS.</label>
		<input type="text" id="partner-tls-contact" placeholder="Enter contact name" />
	</div>

	<div className="TLS-Form">
		<label htmlFor="subdomains">Please list all subdomains that your company uses. ( E.g. are there any domains leveraged by your company other than @partner.com)</label>
		<input type="text" id="subdomains" placeholder="Enter all subdomains here" />
	</div>

	<div className="TLS-Form">
		<input type="checkbox" id="bounce-confirmation" /><label htmlFor="bounce-confirmation">Please confirm that any failure to send TLS email will be bounced, and may not be delivered.</label>
	</div>

	<h5>Collective Health Info:</h5>
		<p>We only send emails from @collectivehealth.com domain.</p>
		<p>We accept that any failure to TLS encrypt email from/to Partner will fail and cause an error.</p>
	<button type="submit">Submit</button>
	</form>
  </div>

  );

export default Security;