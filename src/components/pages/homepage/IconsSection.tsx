import React from "react";
import { sensitivitiesIcons } from "../../../utils/icons";

export const IconsSection = () => {
  return (
    <section className='icons-section '>
      <h2 className='section-title'> THE MEANING OF OUR ICONS:</h2>
      <div className='icons flex-row '>
        {sensitivitiesIcons.map((icon, index) => {
          return (
            <div className='icon' key={index}>
              <img
                className='icon-image'
                src={icon.iconUrl}
                alt={`${icon.iconMeaning}-icon`}
              ></img>
              <p>{icon.iconMeaning}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
