import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postAdded } from './postsSlice';

function AddPostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const dispatch = useDispatch();

  const users = useSelector(state => state.users);

  const canSave = title && content && userId;

  const onTitleChanged = e => setTitle(e.target.value);
  const onContentChanged = e => setContent(e.target.value);
  const onAuthorChanged = e => setUserId(e.target.value);
  const onSavePost = (e) => {
    e.preventDefault();
    if (canSave) {
      dispatch(postAdded(title, content, userId));
      setTitle('');
      setContent('');
      setUserId('');
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

        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {users.map((user) => <option value={user.id} key={user.id}>{user.name}</option>)}
        </select>

        <button type="submit" disabled={!canSave}>Save Post</button>
      </form>
    </section>
  )
}

export default AddPostForm
