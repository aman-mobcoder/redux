const initialState = { posts: [] };

export const postConstants = {
  POST_REQUEST: "POST_REQUEST",
  POST_SUCCESS: "POST_SUCCESS",
  POST_FAILURE: "POST_FAILURE",
};

export function posts(state = initialState, action) {
  switch (action.type) {
    case postConstants.POST_REQUEST:
      return {
        isfetching: true,
        posts: [],
      };
    case postConstants.POST_SUCCESS:
      return {
        isfetching: false,
        data: action.posts
      };
    case postConstants.POST_FAILURE:
      return { error: "Server Error", posts: [] };
    default:
      return state;
  }
}
