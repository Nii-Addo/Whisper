import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../css/SignupCss.css';
import { Redirect } from 'react-router-dom';
const Signup = ( props ) => {
  const [ fullname, setFullname ] = useState();
  const [ email, setEmail ] = useState();
  const [ password, setPassword ] = useState();
  const [ redirectOnLogin, setRedirectOnLogin ] = useState( false );
  const handleFullNameChange = ( event ) => {
    const fullName = event.target.value;
    setFullname( fullName );
  }
  const handleEmailChange = ( event ) => {
    const email = event.target.value;
    setEmail( email );
  }
  const handlePasswordChange = ( event ) => {
    const password = event.target.value;
    setPassword( password );
  }
  const signup = ( event ) => {
    if ( fullname === 'Admin' && email === 'admin@test.com' && password === 'password' ) {
      setRedirectOnLogin( true );
      console.log( fullname );
      console.log( email );
      console.log( password );
      event.preventDefault();
    } else {
      setRedirectOnLogin( false );
      console.log( fullname );
      console.log( email );
      console.log( password );
      event.preventDefault();
    }
  }
  return ( <div className="signup-page">

     <div className="card signup-form">
        <h3 className="signup-header">Signup</h3>
        <form onSubmit={signup}>
          <div className="signup-field-mod form-group">
            <input name='fullname' type="text" placeholder="Full name" className="form-control" onChange={handleFullNameChange}/>
          </div>
          <div className="signup-field-mod form-group">
            <input name='email' type="email" placeholder="email" className="form-control" onChange={handleFullNameChange}/>
          </div>
          <div className="signup-field-mod form-group">
            <input name='password' type="password" placeholder="password" className="form-control" onChange={handlePasswordChange}/>
          </div>
          <div className="form-group">
            <button className="btn btn-success" type="submit">Signup</button>
          </div>
        </form>
        </div>
     </div> )
}
export default Signup