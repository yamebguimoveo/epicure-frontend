export const mockRestaurants = [
  {
    id:1,
    chef: "Ran Shmueli",
    restaurantName: "Claro",
    imagePath: "/assets/pictures/claro.jpg",
    tags: ['New'],
    dishesId: [1,2,3,4,5,6]
  },
  {
    id:2,
    chef: "Meir Adoni",
    restaurantName: "Lumina",
    imagePath: "/assets/pictures/lumina.jpg",
    tags: ['Most Popular'],
    dishesId: [1,2,3,4,5,6]
  },
  {
    id: 3,
    chef: "Yanir Green",
    restaurantName: "Tiger Lilly",
    imagePath: "/assets/pictures/tiger-lili.jpg",
    tags: ['New'],
    dishesId: [1,2,3,4,5,6]
  },
  {
     id:4,
    chef: "Yanir Green",
    restaurantName: "Tiger Lilly",
     imagePath: "/assets/pictures/tiger-lili.jpg",
    tags: ['New'],
    dishesId: [1,2,3,4,5,6]
  },
  {
    id: 5,
    chef: "Meir Adoni",
    restaurantName: "Lumina",
    imagePath: "/assets/pictures/lumina.jpg",
    tags: ['New'],
    dishesId: [1,2,3,4,5,6]
  },
  {
    id: 6,
    chef: "Ran Shmueli",
    restaurantName: "Claro",
    imagePath: "/assets/pictures/claro.jpg",
    tags: ['New'],
    dishesId: [1,2,3,4,5,6]
  }
];

export const mockDishes = [
  {
    id:1,
    dishName: "Pad Ki Mao",
    dishDescription:
      "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
    dishPrice: 88,
    dishSensitivities:['spicy','vegan'],
    chef: "asaf granit",
    restaurantName: "Tiger Lilly",
    imagePath: "/assets/pictures/pad-ki-mao.png",
    },
  {
      id:2,
    dishName: "Garbanzo Frito",
    dishDescription:
      "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
      dishPrice: 98,
      dishSensitivities:[] ,
    chef: "asaf granit",
      restaurantName: "Kab Kem",
   
    imagePath: "/assets/pictures/frito.jpg",
    },
  {
    id: 3,
    dishName: "Smoked Pizza",
    dishDescription:
      "Basil dough, cashew \"butter\", demi-glace, bison & radish",
       dishPrice: 65,
    dishSensitivities:['spicy'],
    chef: "asaf granit",
       restaurantName: "Popina",
  
    imagePath: "/assets/pictures/pizza.jpg",
    },
  {
        id:4,
    dishName: "Garbanzo Frito",
    dishDescription:
      "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
        dishPrice: 98,
    dishSensitivities:['spicy'],
    chef: "asaf granit",
        restaurantName: "Kab Kem",
    imagePath: "/assets/pictures/frito.jpg",
    },
  {
         id:5,
    dishName: "Pad Ki Mao",
    dishDescription:
      "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
         dishPrice: 88,
    dishSensitivities:['spicy'],
    chef: "asaf granit",
         restaurantName: "Tiger Lilly",
    imagePath: "/assets/pictures/pad-ki-mao.png",
    },
  {
       id:6,
    dishName: "Smoked Pizza",
    dishDescription:
      "Basil dough, cashew \"butter\", demi-glace, bison & radish",
       dishPrice: 65,
    dishSensitivities:['spicy'],
    chef: "asaf granit",
       restaurantName: "Popina",
    imagePath: "/assets/pictures/pizza.jpg",
    }
]

export const mockChef = {
  chefName: "Yossi Shitrit",
  chefDescription:
    "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each andevery dish.",
  chefImageChef: "/assets/pictures/yossi-shitrit.png",
    ownRestaurant: [
      {
          id:1,
    chef: "Yossi Shitrit",
        restaurantName: "Onza",
    tags:['New'],
        imagePath: "assets/pictures/onza.jpg",
    dishesId: [1,2,3,4,5,6]
  },
      {
        id: 2,
    chef: "Yossi Shitrit",
          restaurantName: "Kitchen Market",
    tags:[],
        imagePath: "/assets/pictures/kitchen-market.jpg",
    dishesId: [1,2,3,4,5,6]
  },
      {
          id:3,
   chef: "Yossi Shitrit",
          restaurantName: "Mashya",
    tags:['New'],
        imagePath: "/assets/pictures/mashya.jpg",
    dishesId: [1,2,3,4,5,6]
  }
    ]
};
