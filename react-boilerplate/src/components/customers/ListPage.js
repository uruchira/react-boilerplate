import React from 'react';
import CustomerList from './CustomerList'
import CustomerForm from './CustomerForm'

const ListPage = () => (
  <div className="container-fluid">
    <h1>Customers</h1>
    <CustomerForm />
    <CustomerList />
  </div>
);

export default ListPage;
