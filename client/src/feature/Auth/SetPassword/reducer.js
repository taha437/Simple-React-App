import { SET_PASSWORD_ERROR, SET_PASSWORD_SUCCESS } from "./actions";

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  accessToken: "",
  refreshToken: "",
  password: "",
  user: {
    id: "",
    name: "",
    email: ""
  }
};

export const setPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PASSWORD_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error.message
      };
    case SET_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.data.user,
        accessToken: action.data.accessToken,
        refreshToken: action.data.refreshToken,
        password: action.data.password
      };
    default:
      return state;
  }
};
