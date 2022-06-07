import React from "react";
import { Link } from "react-router-dom";

export const MobileLinksSection = () => {
  return (
    <section className='mobile-links-section'>
      <Link to='/'>
        <button className='link-button'>CHEFS</button>
      </Link>
      <Link to='/restaurants'>
        <button className='link-button'>RESTAURANTS</button>
      </Link>
    </section>
  );
};
