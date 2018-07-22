import React from 'react';
import TextInput from '../forms/TextInput';

const PersonalInfo = (props) => (
  <TextInput
    name="firstname"
    label="firstname"
    value={props.consultant.firstname}
    onChange={props.onChange}
  />
)

export default PersonalInfo;