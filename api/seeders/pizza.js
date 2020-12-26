const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user:1234@pizza-app.cu1rl.mongodb.net/pizza-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Pizza = require('../models/pizza');
const newPizzas = [
  {
    title: 'Half & Half pizza',
    description: 'Two pizzas in one',
    img: 'https://eu2dodostatic.blob.core.windows.net/usa/Img/Products/Pizza/en-US/8238c401-a341-48fe-a3b5-875baaf11314.jpg',
    priceUsd: 14.00,
  },
  {
    title: 'Cheese',
    description: 'Mozzarella, marinara sauce, fresh basil',
    img: 'https://eu2dodostatic.blob.core.windows.net/usa/Img/Products/Pizza/en-US/4e964617-c0f2-4a62-88fa-6d2c82fe717a.jpg',
    priceUsd: 9.00,
  },
  {
    title: 'TB Mexican Taco',
    description: 'Mozzarella, marinara sauce, fresh basil',
    img: 'https://eu2dodostatic.blob.core.windows.net/usa/Img/Products/bb40a66004c74a6594ff13a1d678144a_584x584.jpeg',
    priceUsd: 8.99,
  },
  {
    title: 'Cheeseburger',
    description: 'Beef, cheddar, red onions, pickles , marinara sauce, mozzarella, cherry tomatoes',
    img: 'https://eu2dodostatic.blob.core.windows.net/usa/Img/Products/0a940938e43441e99e892fc890ae6d22_584x584.jpeg',
    priceUsd: 13.00,
  },
  {
    title: 'Low Gluten Cheese',
    description: 'Low gluten crust , mozzarella, fresh basil, marinara sauce',
    img: 'https://eu2dodostatic.blob.core.windows.net/usa/Img/Products/5bbdc80e196947329b7d56919cb72ab4_584x584.jpeg',
    priceUsd: 11.00,
  },
  {
    title: 'Low Gluten Pepperoni',
    description: 'Pepperoni, mozzarella, marinara sauce, fresh basil, low gluten crust',
    img: 'https://eu2dodostatic.blob.core.windows.net/usa/Img/Products/5bef4b6240c6410d8312f41b03fe8da2_233x233.jpeg',
    priceUsd: 12.00,
  },
  {
    title: 'Vegan Veggie',
    description: 'Red onions, mushrooms, black olives, marinara sauce, fresh basil, vegan mozzarella , cherry tomatoes, pepper green, bell',
    img: 'https://eu2dodostatic.blob.core.windows.net/usa/Img/Products/84c4d3874f8045aeb56641cd3fce1f8f_233x233.jpeg',
    priceUsd: 12.00,
  },
  {
    title: 'From Russia with Love',
    description: 'Fries, ranch , grilled chicken, marinara sauce, red onions, pickles , mozzarella',
    img: 'https://eu2dodostatic.blob.core.windows.net/usa/Img/Products/be630493bfcc4e6fa466aa31c59666f9_233x233.jpeg',
    priceUsd: 13.00,
  },
  {
    title: 'Half Pepperoni Half Cheese',
    description: 'Pepperoni, mozzarella, marinara sauce, fresh basil',
    img: 'https://eu2dodostatic.blob.core.windows.net/usa/Img/Products/Pizza/en-US/ce55ee3c-507a-4598-b255-de78a6f0cbb9.jpg',
    priceUsd: 11.00,
  },
  {
    title: 'Supreme',
    description: 'Pepperoni, fresh basil, mozzarella, italian sausage, bacon, mushrooms, red onions, black olives, green peppers, marinara sauce',
    img: 'https://eu2dodostatic.blob.core.windows.net/usa/Img/Products/Pizza/en-US/e17f6dd8-882c-4a9f-b465-177fdc28c31a.jpg',
    priceUsd: 13.50,
  },
  {
    title: 'The Meats',
    description: 'Pepperoni, ham, italian sausage, mozzarella, bacon, marinara sauce, fresh basil',
    img: 'https://eu2dodostatic.blob.core.windows.net/usa/Img/Products/Pizza/en-US/65c4de39-4759-4aa1-99cc-d3939955ac8f.jpg',
    priceUsd: 13.50,
  },
  {
    title: 'Spinach Feta',
    description: 'Fresh spinach, feta, ricotta, mozzarella, red onions',
    img: 'https://eu2dodostatic.blob.core.windows.net/usa/Img/Products/Pizza/en-US/3f740340-6c94-405a-b9ac-74f3eb87bf3f.jpg',
    priceUsd: 11.00,
  },
];

for (let i = 0; i < newPizzas.length; i++) {
  Pizza.create(newPizzas[i]);
}