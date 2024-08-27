import image1 from "../assets/image.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"
import image6 from "../assets/image6.png"
import image7 from "../assets/image7.png"
import image8 from "../assets/image8.png"
export const foodOptions = [
    {
      type: 'Pizza',
      items: [
        {
           id: '1',
          name: 'Margarita',
          ingredients: 'Tomato, Mozzarella, Basil',
          price: '$10.99',
          img: image1
        },
        {
          name: 'Pepperoni',
          id: '2',
          ingredients: 'Tomato, Mozzarella, Pepperoni',
          price: '$12.99',
          img: image2
        }
      ]
    },
    {
      type: 'Burgers',
      items: [
        {   id: '3',
          name: 'Classic Burger',
          ingredients: 'Beef, Lettuce, Tomato, Cheese',
          price: '$8.99',
          img: image3
        },
        {   id: '4',
          name: 'Bacon Burger',
          ingredients: 'Beef, Bacon, Lettuce, Tomato, Cheese',
          price: '$9.99',
          img: image4
        }
      ]
    },
    {
      type: 'Sushi',
      items: [
        {
          id: '5',
          name: 'California Roll',
          ingredients: 'Crab, Avocado, Cucumber',
          price: '$11.99',
          img: image5
        },
        {
          id: '6',
          name: 'Spicy Tuna Roll',
          ingredients: 'Tuna, Spicy Mayo, Cucumber',
          price: '$12.99',
          img:image6
        }
      ]
    },
    {
      type: 'Salads',
      items: [
        {
          id: '7',
          name: 'Caesar Salad',
          ingredients: 'Lettuce, Croutons, Parmesan, Caesar dressing',
          price: '$7.99',
          img:image7
        },
        {   id: '8',
          name: 'Greek Salad',
          ingredients: 'Tomato, Cucumber, Olives, Feta',
          price: '$8.99',
          img:image8
        }
      ]
    }
  ];