import React, {Component} from 'react'
import {connect} from 'react-redux'
import { updateCurrent, saveCustomer } from './actions'

class CustomerForm extends Component {
  handleInputChange = (evt) => {
    const val = evt.target.value
    this.props.updateCurrent(val)
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.saveCustomer(this.props.currentCustomer)
  }

  render() {
    const {currentCustomer} = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          onChange={this.handleInputChange}
          value={currentCustomer}
        />
      </form>
    )
  }
}

export default connect(
  (state) => ({currentCustomer: state.customer.currentCustomer}),
  { updateCurrent, saveCustomer }
)(CustomerForm)
