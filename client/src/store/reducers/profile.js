import constants from "../constants/constants";

const locallyStored = localStorage.getItem("profile")
  ? JSON.parse(localStorage.getItem("profile"))
  : {
      user: null,
      token: null,
      isAuthenticated: false,
      errorMessage: null,
      successMessage: null,
      loading: false,
    };

const initialState = {
  user: locallyStored.user,
  token: locallyStored.token,
  isAuthenticated: locallyStored.isAuthenticated,
  errorMessage: locallyStored.errorMessage,
  successMessage: locallyStored.successMessage,
  loading: locallyStored.loading,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.USER_LOGIN_SUCCESS:
      return action.payload;

    case constants.USER_LOGIN_FAIL:
      return action.payload;

    default:
      return state;
  }
};

export default profileReducer;
