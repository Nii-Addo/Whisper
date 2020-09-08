import React, { useState } from 'react'
import PropTypes from 'prop-types';
import '../../css/PostCss.css';
import DropDown from '../../components/layouts/DropDown';
import { Link } from 'react-router-dom';
const Post = ( props ) => {
  const [ upvote, setUpvote ] = useState( 0 );
  const [ downvote, setDownvote ] = useState( 0 );
  const tittle = props.tittle;
  const author = props.author;
  const date = props.date;
  const content = props.content;
  return ( <div className="post-mod">
    <Link to="/details">
      <div className="post-meta">
        <div className="options">
          <DropDown/>
        </div>
        <div className="post-tittle">{tittle}</div>
        <div className="post-info">{author}</div>
        <small className="post-info">{date}</small>
      </div>
      <section className="post-content">
          {content}
      </section>
    </Link>

    <div className="post-reactions d-flex flex-wrap">
      <div className="votes-mod votes-btn-space">
        <button className="btn btn-primary mr-2 votes-btn " onClick={()=>{setUpvote(upvote=>upvote=upvote+1)}}>Up Vote</button>
        <span>{upvote}</span>
      </div>
      <div className="ghost">
      </div>
      <div className="votes-mod">
        <button className="btn btn-primary mr-2 votes-btn" onClick={()=>{setDownvote(downvote=>downvote=downvote+1)}}>Down Vote</button>
        <span>{downvote}</span>
      </div>
    </div>
  </div> )
}
export default Post