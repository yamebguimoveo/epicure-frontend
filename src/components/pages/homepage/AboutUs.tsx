import React from "react";
import { stores } from "../../../utils/icons";
import { DownloadButton } from "../../reusable/DownloadButton";

export const AboutUs = () => {
  return (
    <section className='about-us-section '>
      <div className='about-us-content'>
        <h3 className='section-title align-self-start'>ABOUT US:</h3>
        <div className='about-us-middle-content'>
          <p className='about-us-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
            vel justo fermentum bibendum non eu ipsum. Cras porta malesuada
            eros, eget blandit turpis suscipit at. Vestibulum sed massa in magna
            sodales porta. Vivamus elit urna, dignissim a vestibulum. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel
            justo fermentum bibendum no eu ipsum. Cras porta malesuada eros.
          </p>
          <img
            className='about-us-logo'
            src='assets/logo/about-logo@3x.png'
            alt='logo'
          ></img>
        </div>
        <div className='download-buttons align-self-start flex-row'>
          <DownloadButton store={stores[0]} />
          <DownloadButton store={stores[1]} />
        </div>
      </div>
    </section>
  );
};
