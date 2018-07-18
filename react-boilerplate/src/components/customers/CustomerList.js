import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCustomers, deleteCustomer } from './actions'

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
    this.props.fetchCustomers();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.customers.map(customer =>
            <Customer 
              key={customer.id} 
              deleteCustomer={ this.props.deleteCustomer } 
              {...customer} 
            />
          )}
        </ul>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => ({ customers: state.customer.customers }),
  { fetchCustomers, deleteCustomer }
)(CustomerList)
