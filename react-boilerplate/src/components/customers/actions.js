import * as types from './actionTypes';
import apiClient from "../../networking/client";

export const loadCustomers = (customers) => ({type: types.CUSTOMERS_LOAD, payload: customers})
export const addCustomer = (customer) => ({type: types.CUSTOMER_ADD, payload: customer})
export const updateCurrent = (val) => ({type: types.CURRENT_UPDATE, payload: val})
export const removeCustomer = (id) => ({type: types.CUSTOMER_REMOVE, payload: id})

export const fetchCustomers = () => {
  return async dispatch => {
    const res = await apiClient.getCustomers();
    if (!res.error)
      dispatch(loadCustomers(res));
  }
}

export const saveCustomer = (name) => {
  return async dispatch => {
    const res = await apiClient.createCustomer(name);
    if (!res.error)
      dispatch(addCustomer(res));
  }
}

export const deleteCustomer = (id) => {
  return async dispatch => {
    const res = await apiClient.clearCustomer(id);
    if (!res.error)
      dispatch(removeCustomer(id));
  }
}