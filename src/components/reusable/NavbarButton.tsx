import React from 'react'

export const NavbarButton = (props: {
  activeFilterTerm: string;
  filterTerm: string;
  handler: Function;
}) => {
    
  return (
    <button
      onClick={() => {
        props.handler(props.filterTerm);
      }}
      className={
        props.filterTerm === props.activeFilterTerm
          ? "restaurants-filter-button nav-active"
          : "restaurants-filter-button "
      }
    >
      {props.filterTerm}
    </button>
  );
};
