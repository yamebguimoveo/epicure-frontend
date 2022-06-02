import React, { Fragment, useState } from "react";
import { DishFooter } from "../../reusable/DishFooter";

//need to make refactor that changes and sideDishes are in the Dish
export const DishModal = (props: {
  dish: Dish | null;
  sideDishes: string[];
  changes: string[];
  closeModalHandler: Function;
}) => {
  const [selectedSideDish, setSelectedSideDish] = useState<string>(
    props.sideDishes[0]
  );
  const [selectedChanges, setSelectedChanges] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);

  //handler for select side dish
  const sideDishChangeHandler = (sideDish: string) => {
    setSelectedSideDish(sideDish);
  };

  //handler for select change for dish
  const sideChangeHandler = (change: string) => {
    setSelectedChanges((prevChanges) => {
      if (prevChanges.includes(change)) {
        return prevChanges.filter((existedChange) => existedChange !== change);
      } else {
        return [...prevChanges].concat(change);
      }
    });
  };

  //handler for change dish quantity
  const quantityChangeHandler = (e: React.MouseEvent, valueToAdd: number) => {
    e.preventDefault();
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + valueToAdd;
      return newQuantity < 1 ? prevQuantity : newQuantity;
    });
  };
  if (!props.dish) return <></>;

  const handleDishOrder = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      "The user add to cart " + quantity.toString() + " " + props.dish?.name
    );
    console.log(selectedChanges);
    console.log(selectedSideDish);
  };

  return (
    <Fragment>
      <div
        className='dish-modal-close'
        onClick={() => props.closeModalHandler()}
      >
        <img
          className='dish-modal-close-button'
          src='/assets/icons/x-white.svg'
          alt='close'
        ></img>
      </div>
      <div className='dish-modal'>
        <img className='dish-image' src={props.dish.imageSrc} alt='dish' />
        <h3 className='dish-title'>{props.dish.name}</h3>
        <DishFooter data={props.dish} />
        <form onSubmit={(e) => handleDishOrder(e)} className='dish-form'>
          <div className='dish-form-side'>
            <legend className='dish-form-title'>
              <span>Choose a side</span>
            </legend>
            {props.sideDishes.map((sideDish, index) => {
              return (
                <div className='dish-side-option' key={index}>
                  <input
                    type='radio'
                    checked={sideDish === selectedSideDish}
                    id={`side-dish-option-${index + 1}`}
                    name={sideDish}
                    value={sideDish}
                    onChange={() => sideDishChangeHandler(sideDish)}
                  />
                  <label htmlFor={`side-dish-option-${index + 1}`}>
                    {sideDish}
                  </label>
                </div>
              );
            })}
          </div>
          <div className='dish-form-changes'>
            <legend className='dish-form-title'>
              <span>Changes</span>
            </legend>
            {props.changes.map((change, index) => {
              return (
                <div className='dish-change-option' key={index}>
                  <input
                    type='checkbox'
                    checked={selectedChanges.includes(change)}
                    id={`changes-option-${index + 1}`}
                    name={change}
                    value={change}
                    onChange={() => sideChangeHandler(change)}
                  />
                  <label htmlFor={`changes-option-${index + 1}`}>
                    {change}
                  </label>
                </div>
              );
            })}
          </div>
          <div className='dish-form-quantity'>
            <legend className='dish-form-title'>
              <span>Quantity</span>
            </legend>
            <div className='quantity-input'>
              <button
                onClick={(e) => quantityChangeHandler(e, -1)}
                className={`quantity-button ${
                  quantity === 1 ? "disabled" : ""
                }`}
              >
                -
              </button>
              <span className='quantity-value'>{quantity}</span>
              <button
                onClick={(e) => quantityChangeHandler(e, 1)}
                className='quantity-button '
              >
                +
              </button>
            </div>
          </div>
          <button type='submit' className='dish-form-submit'>
            ADD TO BAG
          </button>
        </form>
      </div>
    </Fragment>
  );
};
