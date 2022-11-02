import { GET_LIST_BLOG_SUCCESS } from "../actions";

const initialState = {
  blogs: [],
  total: 0,
};

export const MODULE_BLOG = "MODULE_BLOG";

export default function blogReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LIST_BLOG_SUCCESS:
      return {
        ...state,
        blogs: action.payload.data,
        total: action.payload.total,
      };
    default:
      return state;
  }
}
