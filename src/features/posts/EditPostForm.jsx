import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postUpdated, selectPostById } from './postsSlice';

function EditPostForm({ match }) {
  const { postId } = match.params;

  const post = useSelector(selectPostById(postId));

  const [title, setTitle] = useState(post.title || '');
  const [content, setContent] = useState(post.content || '');

  const dispatch = useDispatch();
  const history = useHistory();

  const onTitleChanged = e => setTitle(e.target.value);
  const onContentChanged = e => setContent(e.target.value);
  const onSavePost = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }));
      history.push(`/posts/${postId}`);
    }
  }


  return (
    <section>
      <h2>Edit Post</h2>
      
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

export default EditPostForm
