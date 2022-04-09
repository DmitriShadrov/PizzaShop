export const foodItems = [
{
    name: 'Cheese Pizza',
    img: 'img/pizza.jpg',
    section: 'Pizza',
},
{
    name: 'Pepperoni Pizza',
    img: 'img/pizza2.jpg',
    section: 'Pizza',
},
{
    name: 'Chicken Pizza',
    img: 'img/chicken-pizza.jpg',
    section: 'Pizza',
},
{
    name: 'Healthy Pizza',
    img: 'img/healthy-pizza.jpg',
    section: 'Pizza',
},

{
    name: 'Burger',
    img: 'img/burger.jpg',
    section: 'Sandwich',
},
{
    name: 'Gyro',
    img: 'img/gyro.jpg',
    section: 'Sandwich',
},
{
    name: 'Sandwich',
    img: 'img/sandwich.jpg',
    section: 'Sandwich',
},
{
    name: 'Chicken Fingers',
    img: 'img/chicken-fingers.jpg',
    section: 'Sides',
},
{
    name: 'Fries',
    img: 'img/fries.jpg',
    section: 'Sides',
},
// {
//     name: 'Chicken Salad',
//     img: 'img/salad.jpg',
//     section: 'Sides',
// },
]

export const foods = foodItems.reduce((res, food) => {
    if(!res[food.section]){
        res[food.section] = [];
    }
    res[food.section].push(food)
    return res;
}, {});