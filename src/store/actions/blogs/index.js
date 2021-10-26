import {  postConstants  } from "../../reducers/mapper";
import { blogService } from "../../services";


function getPosts(params) {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch(request());

      blogService.getPosts().then(
        (data) => {
          dispatch(success(data));
          resolve(data);
        },
        (error) => {
          dispatch(failure(error.toString()));
          console.log(error);
          reject(error);
        }
      );
    });
  };

  function request() {
    return { type: postConstants.POST_REQUEST };
  }
  function success(responseData) {
    return { type: postConstants.POST_SUCCESS,  posts:responseData};
  }
  function failure(error) {
    return { type: postConstants.POST_FAILURE, error };
  }
}



export const blogActions = {
    getPosts,
};
