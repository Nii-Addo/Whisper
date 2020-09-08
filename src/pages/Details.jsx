import React, { useState } from 'react'
import PropTypes from 'prop-types';
import '../css/DetailsCss.css';
const Details = ( props ) => {
  const tittle = props.title;
  const author = props.author;
  const date = props.date;
  const content = props.content;
  return ( <div>
    <div className="details-meta">
      <div className="details-tittle">{tittle}</div>
      <div className="details-info">{author}</div>
      <small className="details-info">{date}</small>
    </div>
    <section className="details-content">
        {content}
    </section>

  </div> )
}
export default Details