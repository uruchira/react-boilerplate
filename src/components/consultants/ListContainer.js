import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startLoadConsultants } from '../../processors/consultants/actions';
import ListItem from './ListItem';

class ListContainer extends Component {
  componentDidMount() {
    this.props.startLoadConsultants();
  }

  render() {
    return (
      <div className="container">
        <h1>Consultants</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            {this.props.consultants.map(consultant =>
              <ListItem 
                key={consultant.id} 
                {...consultant} 
              />
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => ({ consultants: state.consultants }),
  { startLoadConsultants }
)(ListContainer)
