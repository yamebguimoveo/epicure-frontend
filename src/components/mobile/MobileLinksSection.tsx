import React from "react";
import { Link } from "react-router-dom";

export const MobileLinksSection = () => {
  return (
    <section className='mobile-links-section'>
      <Link to='/'>
        <button className='link-button'>Chefs</button>
      </Link>
      <Link to='/restaurants'>
        <button className='link-button'>Restaurants</button>
      </Link>
    </section>
  );
};
