import React from 'react'
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import '../../css/NavigationBarCss.css';
const NavigationBar = ( props ) => {
  const logout = () => {
    props.history.push( '/' )
  }
  return ( <div>
    <div className="nav-brand">
      <Link to="/"><h1>WHISPER</h1></Link>
    </div>
    <div className="navi">
      <Link to="/blog">Home</Link>
      <Link to="/blog">Podcast</Link>
      <Link to="/blog">Resources</Link>
    </div>
    <div className="logout-space">
      <button className="btn btn-secondary logout-btn" onClick={logout}>Logout</button>
    </div>

    </div> )
}
export default withRouter( NavigationBar );