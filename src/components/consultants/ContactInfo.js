import React from 'react';
import TextInput from '../forms/TextInput';

const ContactInfo = (props) => (
  <TextInput
    name="address"
    label="address"
    value={props.consultant.address}
    onChange={props.onChange}
  />
)

export default ContactInfo;