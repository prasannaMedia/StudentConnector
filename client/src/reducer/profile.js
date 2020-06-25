import { GET_PROFILE } from "../action/type";
import { PROFILE_ERROR } from "../action/type";
import { CLEAR_PROFILE } from "../action/type";
import { GET_PROFILES } from "../action/type";
import { GET_REPOS } from "../action/type";
const intitialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};
export default function (state = intitialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };

    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false,
      };

    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        loading: false,
        repos: [],
      };
    default:
      return state;
  }
}
