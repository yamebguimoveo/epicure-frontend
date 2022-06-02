export const DishFooter: React.FC<{ data: Dish }> = (props: { data: Dish }) => {
  return (
    <div className='dish-footer flex-column flex-center space-around'>
      <p className='dish-description'>{props.data.description}</p>
      <div className='sensitivities-icons flex-row'>
        {props.data.sensitivities.map((sensitivity) => {
          return (
            <img
              key={sensitivity}
              className='sensitivity-icon'
              src={`/assets/icons/${sensitivity}-icon.svg`}
              alt='sensitivity-icon'
            ></img>
          );
        })}
      </div>
      <div className='card-price flex-center flex-row gap-10'>
        <div className='price-line'></div>
        <p className='price'>
          <span className="price-symbol">₪</span>
          {props.data.price}
        </p>
        <div className='price-line'></div>
      </div>
    </div>
  );
};
