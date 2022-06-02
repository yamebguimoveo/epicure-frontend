import React from "react";
import { NavbarButton } from "./NavbarButton";

export const FilterNavbar = (props: {
  activeFilterTerm: string;
  filterTerms: string[];
  handlerFunc: Function;
}) => {
  return (
    <ul className='filter-navbar'>
      {props.filterTerms.map((option) => {
        return (
          <li key={option}>
            <NavbarButton
              activeFilterTerm={props.activeFilterTerm}
              filterTerm={option}
              handler={() => props.handlerFunc(option)}
            />
          </li>
        );
      })}
    </ul>
  );
};
