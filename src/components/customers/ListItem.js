import React from 'react';

const ListItem = ({ name, address, job }) => (
  <tr>
    <td>{name}</td>
    <td>{address}</td>
    <td>{job}</td>
  </tr>
)

export default ListItem;