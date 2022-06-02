import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = (props: {
  isHidden: boolean;
  hiddenStateFunc: () => void;
}) => {
  return (
    <nav
      onClick={props.hiddenStateFunc}
      className={props.isHidden ? "hidden" : ""}
    >
      <div className='sidebar-header'>
        <img src='/assets/icons/x.svg' alt='close-sidebar-button'></img>
      </div>
      <div className='sidebar hidden'>
        <button
          onClick={props.hiddenStateFunc}
          className='sidebar-close-button'
        ></button>
        <ul className='sidebar-links'>
          <Link to='/'>
            <li className='sidebar-link'>
              <span>Chefs</span>
            </li>
          </Link>
          <Link to='/restaurants'>
            <li className='sidebar-link'>
              <span>All Restaurants</span>
            </li>
          </Link>
          <div className='sidebar-middle-border'></div>
          <Link to='/'>
            <li className='sidebar-link sidebar-footer-link'>
              <span>Sign in</span>
            </li>
          </Link>
          <Link to='/'>
            <li className='sidebar-link sidebar-footer-link'>
              <span>Contact us</span>
            </li>
          </Link>
          <Link to='/'>
            <li className='sidebar-link sidebar-footer-link'>
              <span>Terms of use</span>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
