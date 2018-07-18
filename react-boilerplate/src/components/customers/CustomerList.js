import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actions from './actions'

const Customer = ({ id, name, isComplete, deleteCustomer }) => (
  <li>
    <span className='delete-item'>
      <button onClick={() => deleteCustomer(id)}>X</button>
    </span>
    {name}
  </li>
)

class CustomerList extends Component {
  componentDidMount() {
    this.props.actions.fetchCustomers();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.customers.map(customer =>
            <Customer 
              key={customer.id} 
              deleteCustomer={ this.props.actions.deleteCustomer} 
              {...customer} 
            />
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    customers: state.customer.customers 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList)
