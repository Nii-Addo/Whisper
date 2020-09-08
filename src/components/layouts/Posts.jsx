import React from 'react'
import PropTypes from 'prop-types';
import Post from '../../components/layouts/Post';
const Posts = ( props ) => {
  const tittle = props.tittle;
  const author = props.author;
  const date = props.date;
  const content = props.content;
  return ( <div>
    <div>
      <h6>Create new post</h6>
       <textarea name="post" rows="10" cols="30" style={{width:"80%", height:"100px"}} className="form-control mb-2" />
       <button className="btn btn-success" style={{width:"100px"}}>Post</button>
    </div>
    <br/>
    <br/>
    <br/>
    <div className="mt-4">
      <h5>Current Posts</h5>
      <Post tittle={tittle} author={author} date={date} content={content}/>
      <Post tittle={tittle} author={author} date={date} content={content}/>
      <Post tittle={tittle} author={author} date={date} content={content}/>
      <Post tittle={tittle} author={author} date={date} content={content}/>
    </div>
  </div> )
}
export default Posts