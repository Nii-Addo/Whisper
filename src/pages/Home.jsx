import React from 'react'
import PropTypes from 'prop-types';
import Posts from '../components/layouts/Posts';
import NavigationBar from "../components/layouts/NavigationBar";
import '../css/HomeCss.css';
const Home = ( props ) => {
  const tittle = props.tittle;
  const author = props.author;
  const date = props.date;
  const content = props.content;
  return ( <div className="home-mod">
    <div className="nav-mod">
      <NavigationBar/>
    </div>
    <div className="content-mod">
      <Posts tittle={tittle} author={author} date={date} content={content}/>
    </div>
  </div> )
}
export default Home