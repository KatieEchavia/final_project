import React, { Component } from 'react';

class LabelInput extends Component {
  render () {
    return (
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          type={this.props.type}
          id="email"
          placeholder="Email Address"
          value={this.state.email}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}