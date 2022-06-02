import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Lazy } from "swiper";
import { Card } from "./Card";
import "swiper/css";
import "swiper/css/lazy";
import { isTemplateMiddle } from "typescript";

const isDish = (object: Dish | Restaurant): object is Dish => {
  return (object as Dish).price !== undefined;
};

export const CardSwiper = (props: {
  items: Restaurant[] | Dish[];
  isDish?: boolean;
  isMinimalCardShow?: boolean;
}) => {
  //for mobile carousel
  const mobileWidth = props.isMinimalCardShow ? 170 : props.isDish ? 260 : 200;
  const slidesPerMobileView = 390 / mobileWidth; //mobile view

  console.log(props.items);

  return (
    <div className='card-swiper flex-center'>
      <Swiper
        slidesPerView={slidesPerMobileView}
        lazy={true}
        modules={[Lazy]}
        breakpoints={{
          500: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={props.isMinimalCardShow ? -40 : 15}
      >
        {props.items.map((item, index) => {

          return (
            <SwiperSlide key={index}>
              <div className='flex-center flex-column'>
                {!!isDish(item)  && (
                  <h3 className='above-card-title'> {item.restaurant.name}</h3>
                )}
                <Card
                  data={item}
                  isMinimalShow={!!props.isMinimalCardShow}
                  key={item._id}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
