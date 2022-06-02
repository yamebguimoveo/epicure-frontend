import { Link, NavLink } from "react-router-dom";
import { SearchInput } from "./reusable/SearchInput";
import { useMediaQuery } from "react-responsive";
import { Sidebar } from "./mobile/Sidebar";
import { Fragment, useState } from "react";

export const Header = () => {
  //forMobile
  const isMobile = useMediaQuery({ query: "(max-width:500px)" });
  const [isSidebarHidden, setIsSidebarHidden] = useState(true);
  
  //handler function for open/close sidebar 
  const sidebarHandler = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };

  return (
    <Fragment>
      <header className='header flex-row space-around'>
        {isMobile ? (
          <button className='sidebar-button'>
            <img
              className='sidebar-button'
              src='/assets/icons/mobile-sidebar-icon.svg'
              alt='sidebar-button'
              onClick={sidebarHandler}
            ></img>
          </button>
        ) : (
          <ul className='header-navlinks'>
            <Link to='/'>
              <li className='nav-item logo'>
                <img src={"/assets/logo/logo.jpg"} alt='logo'></img>
                <p className='logo-title'>EPICURE</p>
              </li>
            </Link>
            <NavLink to='/restaurants'>
              <li className='nav-item'>Restaurants</li>
            </NavLink>
            <li className='nav-item'>Chefs</li>
          </ul>
        )}
        {isMobile ? (
          <Link to='/'>
            <li className='nav-item logo'>
              <img src='/assets/logo/logo.jpg' alt='logo'></img>
            </li>
          </Link>
        ) : (
          <></>
        )}
        <ul className='header-secondary-links'>
          <li className='nav-item'>
            <SearchInput />
          </li>
          <li className='nav-item'>
            <img
              className='action-icon'
              src='/assets/icons/user-icon.svg'
              alt='user'
            ></img>
          </li>
          <li className='nav-item'>
            <img
              className='action-icon'
               src='/assets/icons/bag-icon.svg'
              alt='cart'
            ></img>
          </li>
        </ul>
      </header>
      <Sidebar isHidden={isSidebarHidden} hiddenStateFunc={sidebarHandler} />
    </Fragment>
  );
};
