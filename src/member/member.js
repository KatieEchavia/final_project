import React, { Component } from 'react';
import _ from 'lodash';

import api from '../utils/api';

class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cost: 'None'
    };
  }

  handleChange(inputType, event) {
    const nextState = {};
    nextState[inputType] = event.target.value;
    this.setState(_.merge({}, this.state, nextState), () => {
      console.log(this.state);
    });
  }

/*
  'client_email_address',
  'client_name',
  'partner_name',
  'point_of_contact',
  'member_support_number',
  'member_support_email',
  'talking_points',
  'hoo',
  'transfer_type',
  'other_contact_info',
  'portal_url',
  'cost',
  'age_restrictions',
  'sso_option',
  'geo_restrictions'
*/

  handleSubmit(event) {
    const payload = this.state;
    payload.transfer_type = payload.transferTemperature === 'warm';
    payload.sso_option = payload.supportSSOStr === 'yes';
    delete payload.transferTemperature;
    delete payload.supportSSOStr;
    console.log(payload);
    event.preventDefault();

    api.submitPartnerForm(payload);
  }

  render() {
    return (
      <div className="content">
        <article className="overview">
          <h2>Member Experience</h2>
          <h5>
            For members, Collective Health is the one-stop shop for all their
            health benefits needs. We help members understand their claims, find
            local doctors and simply understand how their benefits work.
            Whenever members have questions on their medical, dental, vision,
            health funds (if applicable) and other health-related benefits—we’re
            their first call. Members can interact with Collective Health
            through the Member Advocate team or through their Member Portal.
          </h5>
        </article>

        <h3>Member Advocates</h3>
        <p>
          The Collective Health Member Advocate team provides live help for
          employees and their dependents. When an employee or dependent calls, a
          real human answers every time and will work to resolve issues
          end-to-end.
        </p>

        <p>
          Our Member Advocates act as a single point of contact for questions
          related to their health benefits. Members can reach out to our Member
          Advocate team via phone/email/online chat. Our Member Advocates are
          also cross-trained on all health and wellness programs, empowering
          them to drive partner engagement with members when appropriate.
        </p>

        <p>
          The Member Advocates will warm transfer members to the partner support
          team when available. The Member Advocate team is available Monday
          through Friday, from 6AM to 6PM PT.{' '}
        </p>

        <h5>Please complete the following fields for each mutual client.</h5>

        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="MA-Form">
            {/* <LabelInput
            field="Email Address"
            type="email"
            placeholder="Email Address"
            value={this.state.email}
            onChange={this.handleEmailChange}
            /> */}
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              value={this.state.client_email_address}
              onChange={this.handleChange.bind(this, 'client_email_address')}
            />
          </div>

          {/* <LabelInput
            forLabel="client"
            name="Client Name"
            placeholder="Enter Client Name"
            value="client_name"
            updateFn={this.handleChange.bind(this, 'client_name')}
          /> */}

          <div className="MA-Form">
            <label htmlFor="client">Client Name</label>
            <input
              type="text"
              placeholder="Enter Client Name"
              value={this.state.client_name}
              onChange={this.handleChange.bind(this, 'client_name')}
            />
          </div>

          <div className="MA-Form">
            <label htmlFor="partner">Partner Name</label>
            <input
              type="text"
              placeholder="Enter Partner Name"
              value={this.state.partner_name}
              onChange={this.handleChange.bind(this, 'partner_name')}
            />
          </div>

          <div className="MA-Form">
            <label htmlFor="partner-contact">
              Please provide the name and contact information for the main point
              of contact we will work with on your side.
            </label>
            <input
              type="text"
              placeholder="Name and Contact Info"
              value={this.state.point_of_contact}
              onChange={this.handleChange.bind(this, 'point_of_contact')}
            />
          </div>

          <div className="MA-Form">
            <label htmlFor="talking-points">
              Please provide a few talking points about your services that our
              Member Advocate team can provide to interested members.
            </label>
            <input
              type="text"
              id="talking-points"
              placeholder="Talking Points"
              value={this.state.talking_points}
              onChange={this.handleChange.bind(this, 'talking_points')}
            />
          </div>

          <div className="MA-Form">
            <label htmlFor="phone-num">
              Please provide your Member Support phone number. Include the
              client-specific support phone number, if available. Please specify
              if this number is general or client-specific.
            </label>
            <input
              type="text"
              id="phone-num"
              placeholder="Member Support Phone Number"
              value={this.state.support_number}
              onChange={this.handleChange.bind(this, 'support_number')}
            />
            <label htmlFor="phone-num-type" />
            <select
              defaultValue={this.state.phone_type}
              onChange={this.handleChange.bind(this, 'phone_type')}
            >
              <option value="Gen">General</option>
              <option value="CS">Client-specific</option>
            </select>
          </div>

          <div className="MA-Form">
            <label htmlFor="transfer-radio">
              Can you support warm transfers* from our Member Advocate team to
              your Member Support team? *Member Advocate will call your support
              phone number while the member is on the line and transfer the
              member to speak to your Support Agent.
            </label>
            <div className="transfer-radio">
              <label htmlFor="cold">
                <input
                  type="radio"
                  name="transfer-type"
                  value="cold"
                  checked={this.state.transferTemperature === "cold"}
                  onChange={this.handleChange.bind(this, 'transferTemperature')}
                />
                We do not support warm transfers at this time.
              </label>
            </div>
            <div className="transfer-radio">
              <label htmlFor="warm">
                <input
                  type="radio"
                  name="transfer-type"
                  value="warm"
                  checked={this.state.transferTemperature === 'warm'}
                  onChange={this.handleChange.bind(this, 'transferTemperature')}
                />
                We support warm transfers.
              </label>
            </div>
          </div>

          <div className="MA-Form">
            <label htmlFor="HOO">
              Please provide the days of the week and hours each day (including
              time zone) that your Member Support team is available (e.g. M-F,
              6am-6pm PST).
            </label>
            <input
              type="text"
              id="HOO"
              placeholder="Hours of Operation"
              value={this.state.hoo}
              onChange={this.handleChange.bind(this, 'hoo')}
            />
          </div>

          <div className="MA-Form">
            <label htmlFor="support-email">
              Please provide your Member Support email. Include the
              client-specific support email, if available.
            </label>
            <input
              type="email"
              id="support-email"
              placeholder="Member Support Email"
              value={this.state.member_support_email}
              onChange={this.handleChange.bind(this, 'support_email')}
            />
          </div>

          <div className="MA-Form">
            <label htmlFor="other-contact">
              Is there another method your Member Support team can be reached?
              If so, please provide it below.
            </label>
            <input
              type="text"
              id="other-contact"
              placeholder="Other contact information"
              value={this.state.other_contact_info}
              onChange={this.handleChange.bind(this, 'other_contact_info')}
            />
          </div>

          <div className="MA-Form">
            <label htmlFor="services">
              Please provide an brief overview of the services that will be
              available to members once you launch with the client.
            </label>
            <input
              type="text"
              id="services"
              placeholder="Benefit overview"
              value={this.state.benefit_overview}
              onChange={this.handleChange.bind(this, 'benefit_overview')}
            />
          </div>

          <div className="MA-Form">
            <label htmlFor="FAQ">
              Do you have a services overview or FAQ sheet that we can share
              with our members? Please upload a PDF below.
            </label>
            <p>Placeholder for form submission button</p>
          </div>

          <h3>Member Portal</h3>
          <p>
            The Collective Health Member Portal is an online tool that helps
            employees and their dependents better manage and navigate their
            health benefits. Through a secure, HIPAA compliant login, members
            are able to view all of their plan details across medical, pharmacy,
            dental, and vision as well as learn about the health and wellness
            programs available to them.
          </p>

          <p>
            Partners are highlighted throughout the Member Portal on the Get
            Care page as well as on the benefit plan pages. We will provide a
            link (or SSO) to each partner listed on the get care page. See the
            screen shot below for reference.
          </p>

          <img alt="" className="drfinder" src="img/drfinder2.png" />

          <div className="MA-Form">
            <label htmlFor="url">
              Please provide the (unique) URL to be included on our Member
              Portal.
            </label>
            <input
              type="text"
              id="url"
              placeholder="Member Portal URL"
              value={this.state.portal_url}
              onChange={this.handleChange.bind(this, 'portal_url')}
            />
          </div>

          <div className="MA-Form">
            <label htmlFor="SSO-radio">
              Can you support Single Sign On (SSO) from our Member Portal to
              your partner site or mobile app?
            </label>
            <div className="SSO-radio">
              <label htmlFor="YesSSO">
                <input
                    type="radio"
                    name="SSO-option"
                    value="yes"
                    checked={this.state.supportSSOStr === "yes"}
                    onChange={this.handleChange.bind(this, 'supportSSOStr')}
                  />
                Yes
              </label>
            </div>
            <div className="SSO-radio">
              <label htmlFor="NoSSO">
                <input
                    id="NoSSO"
                    type="radio"
                    name="SSO-option"
                    value="no"
                    checked={this.state.supportSSOStr === "no"}
                    onChange={this.handleChange.bind(this, 'supportSSOStr')}
                  />
                No
              </label>
            </div>
          </div>

          <div className="MA-Form">
            <label htmlFor="reg-process">
              Describe the member registration process. If members can register
              in more than one way, please outline all of the ways to register
              and provide relevant registration links.
            </label>
            <input
              type="text"
              id="reg-process"
              placeholder="Registration process"
              value={this.state.registration_process}
              onChange={this.handleChange.bind(this, 'registration_process')}
            />
          </div>

          <div className="MA-Form">
            <label htmlFor="serv-blurb">
              Please provide some language or a sample blurb (1 - 3 sentences)
              about your product or service that may be used on our Open
              Enrollment and Member Portal.
            </label>
            <input
              type="text"
              id="serv-blurb"
              placeholder="Partner Service Blurb"
              value={this.state.service_blurb}
              onChange={this.handleChange.bind(this, 'service_blurb')}
            />
          </div>

          <div className="MA-Form">
            <label htmlFor="geo-restrictions">
              Are there any geographic restrictions for your service? (e.g.
              excluded states) If not, enter "N/A"
            </label>
            <input
              type="text"
              id="geo-restrictions"
              placeholder="Geographic restrictions"
              value={this.state.geo_restrictions}
              onChange={this.handleChange.bind(this, 'geo_restrictions')}
            />
          </div>

          <div className="MA-Form">
            <label htmlFor="age-restrictions">
              Are there any age restrictions to use your service? If not, enter
              "N/A"
            </label>
            <input
              type="text"
              id="age-restrictions"
              placeholder="Age restrictions"
              value={this.state.age_restrictions}
              onChange={this.handleChange.bind(this, 'age_restrictions')}
            />
          </div>

          <div className="MA-Form">
            <label htmlFor="cost">
              How much will it cost the member to use your services?
            </label>
            <select
              defaultValue={this.state.cost}
              onChange={this.handleChange.bind(this, 'cost')}
            >
              <option value="None">No cost to the member</option>
              <option value="Depends">
                Dependent on the medical benefit/Dependent on the plan design
              </option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default Member;