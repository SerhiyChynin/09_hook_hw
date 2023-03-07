import './App.css';
import React from 'react';
import PlaceholderPost from './PlaceholderPost';
import Comment from './Comment';
import Comment2 from './Comment2';
import PlaceholderPostHook from './PlaceholderPostHook';
import CommentHook from './CommentHook';
import CommentsListHook from './CommentListHook';
import Comment2Hook from './Comment2Hook';


function App() {
  return (
    <>
      {/* <PlaceholderPost /> */}
      {/* <Comment/> */}
      {/* <PlaceholderPostHook/> */}
      {/* <CommentHook /> */}
      <Comment2Hook/>
      <Comment2 />
    </>
  );
}

export default App;
