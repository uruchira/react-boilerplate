import React from 'react';
import TextInput from '../forms/TextInput';

const AccountInfo = (props) => (
  <TextInput
    name="email"
    label="email"
    value={props.consultant.email}
    onChange={props.onChange}
  />
)

export default AccountInfo;