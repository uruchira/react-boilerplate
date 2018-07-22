import * as types from './actionTypes';
import apiClient from "../../api";

const module = "customers";

export const loadCustomers = (customers) => ({type: types.CUSTOMERS_LOAD, payload: customers})

export const fetchCustomers = () => {
  return async dispatch => {
    const res = await apiClient.getItems(module);
    if (!res.error)
      dispatch(loadCustomers(res));
  }
}