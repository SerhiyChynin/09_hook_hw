import './App.css';
import React from 'react';
// import Button from './Button';
import PlaceholderPost from './PlaceholderPost';
import Comment from './Comment';
import Comment2 from './Comment2';
import PlaceholderPostHook from './PlaceholderPostHook';
import ComponentHook from './ComponentHook';


function App() {
  return (
    <>
      {/* <PlaceholderPost /> */}
      {/* <Comment/> */}
      {/* <Comment2 /> */}
      <PlaceholderPostHook/>
      <ComponentHook/>
    </>
  );
}

export default App;
