import React from "react";

export const Pagination = (props: {
  changeFunction: any;
  activePage: number;
  pageCount: number;
}) => {
  const items = [];
  for (let i = 1; i <= props.pageCount; i++) {
    items.push(i);
    console.log(items);
  }
  return (
    <div className='pagination'>
      {items.map((num) => {
        return (
          <button
            key={num}
            className={
              props.activePage === num ? `page-button active` : `page-button`
            }
            onClick={() => props.changeFunction(num)}
          >
            {num}
          </button>
        );
      })}
    </div>
  );
};
