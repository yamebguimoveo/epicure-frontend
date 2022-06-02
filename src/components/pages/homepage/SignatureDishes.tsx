import React from "react";
import ReactLoading from "react-loading";
import { CardSwiper } from "../../reusable/CardSwiper";

export const SignatureDishes = (props: { dishes: Dish[] | null }) => {
  return (
    <section className='signature-dishes-section'>
      <h3 className='section-title'>SIGNATURE DISH OF:</h3>
      {!props.dishes ? (
        <ReactLoading
          type={"balls"}
          color={"#f7e0b2"}
          height={"20%"}
          width={"10%"}
        />
      ) : (
        <CardSwiper items={props.dishes} isDish={true} />
      )}
    </section>
  );
};
