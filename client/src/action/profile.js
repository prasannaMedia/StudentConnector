import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  GET_PROFILES,
  GET_REPOS,
  DELETE_ACCOUNT,
} from "../action/type";
//get user profile

export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/profile/me");
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => (dispatch) => setAlert(error.msg, "danger"));
    }
  }
};

//profile by id
export const getProfileById = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/profile/user/${userId}`);
    console.log(res);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => (dispatch) => setAlert(error.msg, "danger"));
    }
  }
};

//get all profile
export const getProfiles = () => async (dispatch) => {
  dispatch({
    type: CLEAR_PROFILE,
  });
  try {
    const res = await axios.get("/api/profile/");
    console.log(res);
    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
  }
};

export const getGithubRepos = (username) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/profile/github/${username}`);
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
  }
};
export const createProfile = (formData, history, edit = false) => async (
  dispatch
) => {
  console.log("in action");
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("/api/profile", formData, config);
    console.log("res");
    console.log(res);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert(edit ? "profile updated" : "profile created", "success"));

    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => (dispatch) => setAlert(error.msg, "danger"));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteAccount = () => async (dispatch) => {
  if (window.confirm("Are you sure this is not be undone!!")) {
    try {
      const res = await axios.delete("/api/profile");
      console.log(res);
      dispatch({
        type: DELETE_ACCOUNT,
      });
      dispatch({
        type: CLEAR_PROFILE,
      });

      dispatch(setAlert("Your Account deleted!"));
    } catch (err) {
      const erros = err.response.data.errors;
      if (erros) {
        dispatch({
          type: PROFILE_ERROR,
          payload: { msg: err.response.statusText },
        });
      }
    }
  }
};
