import React, { useState } from 'react'
import PropTypes from 'prop-types'
const DropDown = ( props ) => {
  const [ isOpen, setIsOpen ] = useState( false );
  const toggleOpen = () => {
    if ( isOpen === true ) {
      setIsOpen( false );
    } else {
      setIsOpen( true );
    }
  }
  const menuClass = `dropdown-menu${isOpen ? " show" : ""}`;
  return ( <div className="dropdown" onClick={toggleOpen}>
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
      >
        =
      </button>
      <div className={menuClass} aria-labelledby="dropdownMenuButton">
        <button className="dropdown-item">
          Edit
        </button>
        <button className="dropdown-item">
          Delete
        </button>
      </div>
    </div> );
}
export default DropDown