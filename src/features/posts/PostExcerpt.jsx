import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor';
import ReactionButtons from './ReactionButtons';
import TimeAgo from './TimeAgo';

const PostExcerpt = ({ post }) => {
  return (
    <article className="post-excerpt" key={post.id}>
    <h3>{post.title}</h3>
    <PostAuthor userId={post.user} />
    <TimeAgo timestamp={post.date} />
    <p className="post-content">{post.content.substring(0, 100)}</p>

    <ReactionButtons post={post} />
    <Link to={`/posts/${post.id}`} className="button muted-button">View Post</Link>
  </article>
  )
}

PostExcerpt.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })
}

export default PostExcerpt
