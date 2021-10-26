import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {blogActions} from './store/actions/index'



import logo from './logo.svg';
import './App.css';



function App() {

  let dispatch = useDispatch();

  let posts = useSelector(
    (state) => state.posts
  );

  console.log("posts:::" , posts);

  useEffect(() => {

    getPosts()
    
  },[])

  const getPosts = async() => {
    
   let _posts =  await dispatch(blogActions.getPosts());

  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
