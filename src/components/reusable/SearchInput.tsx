import React, { useState } from "react";


export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const typingHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };
  return (
    <div className='search-input-div flex-center'>
      <span className='search-icon'>
        <img src='/assets/icons/search-icon.svg' alt='search-icon'></img>
      </span>
        <input
          className='search-input'
          onChange={typingHandler}
          value={searchValue}
          placeholder='Search for restaurant cuisine, chef'
        ></input>
    </div>
  );
};
