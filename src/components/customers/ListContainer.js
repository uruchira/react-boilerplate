import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startLoadCustomers } from '../../processors/customers/actions';
import ListItem from './ListItem';

class ListContainer extends Component {
  componentDidMount() {
    this.props.startLoadCustomers();
  }

  render() {
    return (
      <div className="container">
        <h3>Customers</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            {this.props.customers.map(customer =>
              <ListItem 
                key={customer.id} 
                {...customer} 
              />
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => ({ customers: state.customers }),
  { startLoadCustomers }
)(ListContainer)
