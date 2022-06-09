type MealType = "Breakfast" | "Lunch" | "Dinner";

export const sortByMealType = (dishes: Dish[], mealType: MealType) => {
  const sortedArray = dishes.filter((dish) => {
    if (mealType === "Breakfast" && dish.breakfast === true) return dish;
    if (mealType === "Dinner" && dish.dinner === true) return dish;
    if (mealType === "Lunch" && dish.lunch === true) return dish;
    else {
      return;
    }
  });
  return sortedArray;
};
