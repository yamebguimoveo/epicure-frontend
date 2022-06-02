import React from "react";
import { useNavigate } from "react-router-dom";
import { DishFooter } from "./DishFooter";

const isDish = (object: Dish | Restaurant): object is Dish => {
  return (object as Dish).price !== undefined;
};

export const Card = (props: {
  data: Dish | Restaurant;
  isMinimalShow?: boolean;
  openModalHandler?: Function;
}) => {
  const specificClassName: string = isDish(props.data)
    ? "dish-card"
    : !!props.isMinimalShow
    ? "restaurant-minimal-card"
    : "restaurant-card";

  const navigate = useNavigate();

  const handleClick = () => {
    if (!isDish(props.data)) {
      navigate(`/restaurant/${props.data._id}`, {
        state: props.data,
      });
    } else if (!!props.openModalHandler) {
      props.openModalHandler(props.data);
    }
  };
  return (
    <article
      onClick={handleClick}
      className={specificClassName.concat(" card")}
    >
      <img src={props.data.imageSrc} alt='dish'></img>
      <h2 className='card-title'>{props.data.name}</h2>
      {isDish(props.data) && <DishFooter data={props.data} />}
      {!isDish(props.data) && !props.isMinimalShow && (
        <p>{props.data.chef.name}</p>
      )}
    </article>
  );
};
