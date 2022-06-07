import React from "react";
import { useMediaQuery } from "react-responsive";
import { getFirstName } from "../../../utils/helpers";
import { Card } from "../../reusable/Card";
import { CardSwiper } from "../../reusable/CardSwiper";

export const ChefOfTheWeek = (props: { chef: Chef | null }) => {
  const isMobile = useMediaQuery({ query: "(max-width:500px)" });

  if (props.chef === null) {
    return <></>;
  }

  return (
    <section className='week-chef-section'>
      <h3 className='section-title align-center'>CHEF OF THE WEEK:</h3>
      <div className='chef-middle-content flex-row'>
        <img
          className='chef-image'
          src={props.chef.imageSrc}
          alt={props.chef.name}
        ></img>
        <p className='chef-description align-center'>
          {props.chef.description}
        </p>
      </div>
      <p className='secondary-title'>
        {getFirstName(props.chef.name)}’s restaurants:
      </p>
      {isMobile ? (
        <CardSwiper items={props.chef.restaurants} isMinimalCardShow={true} />
      ) : (
        <div className='chef-restaurants-cards flex-row'>
          {props.chef.restaurants.map((restaurant) => {
            return (
              <Card
                key={restaurant._id}
                data={restaurant}
                isMinimalShow={true}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};
