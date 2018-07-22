import * as types from './actionTypes';
import apiClient from "../../api";

const module = "consultants";

export const loadConsultants = (consultants) => ({type: types.CONSULTANTS_LOAD, consultants})

export const fetchConsultants = () => {
  return async dispatch => {
    const res = await apiClient.getItems(module);
    if (!res.error)
      dispatch(loadConsultants(res));
  }
}