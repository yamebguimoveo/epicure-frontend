interface Restaurant {
  _id: string;
  imageSrc: string;
  chef: Chef;
  name: string;
  isOpen: boolean;
  new: boolean;
  mostPopular: boolean;
}

interface Dish {
  _id: string;
  restaurant: Restaurant;
  imageSrc: string;
  name: string;
  price: number;
  description: string;
  sensitivities: string[];
  lunch: boolean;
  dinner: boolean;
  breakfast: boolean;
}

interface Icon {
  iconMeaning: string;
  iconUrl: string;
}

interface Chef {
  _id: string;
  name: string;
  description: string;
  imageSrc: string;
  restaurants: Restaurant[];
}

type RestaurantLocation = {
  from: {
    state: Restaurant;
  };
};
