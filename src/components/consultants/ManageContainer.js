import React, { Component } from 'react';

import PersonalInfo from './PersonalInfo';
import AccountInfo from './AccountInfo';
import ContactInfo from './ContactInfo';

class ManageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consultant: {firstname: '', email: '', address: ''},
      saving: false
    };
  }

  render() {
    return (
      <div className="container">
        <h3>Manage Consultants</h3>
        <div>
          <form>
            <PersonalInfo consultant={this.state.consultant}  onChange={() => {}} />
            <AccountInfo consultant={this.state.consultant}  onChange={() => {}} />
            <ContactInfo consultant={this.state.consultant}  onChange={() => {}} />
          </form>
        </div>
      </div>
    )
  }
}

export default ManageContainer;
