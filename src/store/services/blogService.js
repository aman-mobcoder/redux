import axios from "axios";

export const blogService = {
    getPosts
};

async function getPosts() {
  let response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts" 
  );

  return response.data;
}



