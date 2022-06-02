import React from "react";
import { SearchInput } from "../../reusable/SearchInput";

export const Hero = () => {
  return (
    <section className=' hero-section'>
      <div className='hero-card'>
        <div className='hero-card-content'>
          <h2 className='hero-title'>
            Epicure works with the top chef restaurants in Tel Aviv
          </h2>
          <SearchInput />
        </div>
      </div>
    </section>
  );
};
