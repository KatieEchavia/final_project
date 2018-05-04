import React from 'react';

const Eligibility = () => (
  <div className="content">
    <article className="overview">
        <h2>Eligibility</h2>
        <h5>Overview, etc</h5>

        <h5>Instructions: If your integration requires an eligibility file, please complete the form below and provide your electronic signature. You will need to complete one form for each mutual client. More information on the eligibility file can be found in the overview below.</h5>
        <h5>If you need to update your original submission, please contact ProgramParters@collectivehealth.com.</h5>
    </article>

    <form action="">
      <div className="Elig-Form">
      	<label htmlFor="client">Client Name</label>
      	<input type="text" id="client" placeholder="Enter Client Name" />
      </div>

	<div className="Elig-Form">
        <label htmlFor="partner">Partner Name</label>
        <input type="text" id="partner" placeholder="Enter Partner Name" />
  	</div>

  	<h5>File Requirements</h5>
  		<div className="Elig-Form">
      		<label htmlFor="delimiter">This file will be in .txt format, with headers / labels on the first line. Files will be submitted in comma delimited format. Please indicate below if you cannot support a .txt file or comma delimited format and require a .csv file format or a pipe delimited format.</label>
      		<div><input type="checkbox" class="delimiter" id="csv-format" /><p>Partner requires .csv format.</p></div>
      		<div><input type="checkbox" class="delimiter" id="pipe-format" /><p>Partner requires pipe delimited format.</p></div>
  		</div>	

  		<div className="Elig-Form">
  			<label htmlFor="cadence">Please select the cadence at which you'd like to receive the file.</label>
  			<div><input type="checkbox" class="cadence" id="weekly" /><p>Weekly</p></div>
      		<div><input type="checkbox" class="cadence" id="biweekly" /><p>Biweekly (2x per week)</p></div>
      		<div><input type="checkbox" class="cadence" id="daily" /><p>Daily</p></div>
  		</div>

  		<p>For each of the fields below, please populate a "1" if you would like Collective Health to send this data on the eligibility file when available, or a "0" if you do not want Collective Health to send this data on the eligibility file. If you populate a "0", the field will still be included in the file but the rows under that column will be null. If you populate a "1", Collective Health will send that information only if we have received it on the inbound file from the employer's Ben Admin.</p>
  		
  		<div className="Elig-Form">
  			<label htmlFor="ch_id">ch_id (required)</label>
  			<select id="ch_id">
  				<option value="1">1</option>
			</select>
  		</div>
  		
  		<div className="Elig-Form">
  			<label htmlFor="subscriber_ch_id">subscriber_ch_id</label>
  			<select id="subscriber_ch_id">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="ssn_last_4">ssn_last_4</label>
  			<select id="ssn_last_4">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="relationship">relationship</label>
  			<select id="relationship">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="last_name">last_name</label>
  			<select id="last_name">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>	

  		<div className="Elig-Form">
  			<label htmlFor="middle_name">middle_name</label>
  			<select id="middle_name">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>		

  		<div className="Elig-Form">
  			<label htmlFor="first_name">first_name</label>
  			<select id="first_name">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>	

  		<div className="Elig-Form">
  			<label htmlFor="suffix">suffix</label>
  			<select id="suffix">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>	

  		<div className="Elig-Form">
  			<label htmlFor="dob">dob</label>
  			<select id="dob">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="gender">gender</label>
  			<select id="gender">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="address_line_1">address_line_1</label>
  			<select id="address_line_1">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="address_line_2">address_line_2</label>
  			<select id="address_line_2">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="city">city</label>
  			<select id="city">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="state">state</label>
  			<select id="state">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="postal_code">postal_code</label>
  			<select id="postal_code">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="primary_phone">primary_phone</label>
  			<select id="primary_phone">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="secondary_phone">secondary_phone</label>
  			<select id="secondary_phone">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="email">email</label>
  			<select id="email">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="employee_id">employee_id</label>
  			<select id="employee_id">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="office_location">office_location</label>
  			<select id="office_location">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="department">department</label>
  			<select id="department">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="subsidiary">subsidiary</label>
  			<select id="subsidiary">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="employment_start_date">employment_start_date</label>
  			<select id="employment_start_date">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="employment_end_date">employment_end_date</label>
  			<select id="employment_end_date">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="eligibility_start_date">eligibility_start_date</label>
  			<select id="eligibility_start_date">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="eligibility_end_date">eligibility_end_date</label>
  			<select id="eligibility_end_date">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="cobra_status">cobra_status</label>
  			<select id="cobra_status">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="subscriber_id_prefix">subscriber_id_prefix</label>
  			<select id="subscriber_id_prefix">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="subscriber_id">subscriber_id</label>
  			<select id="subscriber_id">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="subscriber_id_suffix">subscriber_id_suffix</label>
  			<select id="subscriber_id_suffix">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="medical_group_id">medical_group_id</label>
  			<select id="medical_group_id">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="medical_plan">medical_plan</label>
  			<select id="medical_plan">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="medical_coverage_level">medical_coverage_level</label>
  			<select id="medical_coverage_level">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="medical_start_date">medical_start_date</label>
  			<select id="medical_start_date">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>


  		<div className="Elig-Form">
  			<label htmlFor="medical_end_date">medical_end_date</label>
  			<select id="medical_end_date">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="dental_plan">dental_plan</label>
  			<select id="dental_plan">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="dental_coverage_level">dental_coverage_level</label>
  			<select id="dental_coverage_level">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>

  		<div className="Elig-Form">
  			<label htmlFor="dental_start_date">dental_start_date</label>
  			<select id="dental_start_date">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>  		

  		<div className="Elig-Form">
  			<label htmlFor="dental_end_date">dental_end_date</label>
  			<select id="dental_end_date">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div>  	

  		<div className="Elig-Form">
  			<label htmlFor="vision_plan">vision_plan</label>
  			<select id="vision_plan">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div> 

  		<div className="Elig-Form">
  			<label htmlFor="vision_coverage_level">vision_coverage_level</label>
  			<select id="vision_coverage_level">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div> 

  		<div className="Elig-Form">
  			<label htmlFor="vision_start_date">vision_start_date</label>
  			<select id="vision_start_date">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div> 

  		<div className="Elig-Form">
  			<label htmlFor="vision_end_date">vision_end_date</label>
  			<select id="vision_end_date">
  				<option value="0">0</option>
  				<option value="1">1</option>
			</select>
  		</div> 

<h5>If you would like a test file, please reach out to ProgramParters@collectivehealth.com.</h5>

<button type="submit">Submit</button>		

	</form>
    </div>
);

export default Eligibility;