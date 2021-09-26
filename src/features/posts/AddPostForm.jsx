import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { postAdded } from './postsSlice';

function AddPostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const onTitleChanged = e => setTitle(e.target.value);
  const onContentChanged = e => setContent(e.target.value);
  const onSavePost = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(postAdded(title, content));
      setTitle('');
      setContent('');
    }
  }


  return (
    <section>
      <h2>Add a new post</h2>
      
      <form onSubmit={onSavePost}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />

        <label htmlFor="postContent">Content:</label>
        <input
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />

        <button type="submit">Save Post</button>
      </form>
    </section>
  )
}

export default AddPostForm
