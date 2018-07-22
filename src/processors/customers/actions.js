import * as types from './actionTypes';
import apiClient from "../../api";

const module = "customers";

export const loadCustomers = (customers) => ({type: types.CUSTOMERS_LOAD, customers})

export const startLoadCustomers = () => {
  return async dispatch => {
    const res = await apiClient.getItems(module);
    if (!res.error)
      dispatch(loadCustomers(res));
  }
}