import { api } from "../../../helpers/api";

export const SET_PASSWORD_SUCCESS = "SET_PASSWORD_SUCCESS";
export const SET_PASSWORD_ERROR = "SET_PASSWORD_ERROR";

export const setPasswordSuccess = data => ({
  type: SET_PASSWORD_SUCCESS,
  data
});

export const setPasswordError = error => ({
  type: SET_PASSWORD_ERROR,
  error
});

export const setPasswordRequest = formData => async dispatch => {
  try {
    const data = await api("post", "auth/setpassword", formData);

    dispatch(setPasswordSuccess(data));
  } catch (error) {
    dispatch(setPasswordError(error.response ? error.response.data : error));
  }
};
