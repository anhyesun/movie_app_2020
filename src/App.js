import React from 'react';
import PropTypes from "prop-types";

function Food({ name, pic, rating }) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={pic} alt={name}/>
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired

}
const foodILike = [
  { id: 1,
    name: "Galbi-jjim", 
    image: "https://www.maangchi.com/wp-content/uploads/2008/09/galbijjim-620x349.jpg",
    rating: 4.5
  },
  { id: 2,
    name: "Cinnamon Rolls", 
    image: "https://www.maangchi.com/wp-content/uploads/2019/11/cinnamonrolls-620x349.jpg",
    rating: 4
  },
  { id: 3,
    name: "Japchae", 
    image: "https://www.maangchi.com/wp-content/uploads/2019/12/japchae-three-620x349.jpg",
    rating: 4.2
  },
  { id: 4,
    name: "Tongdak", 
    image: "https://www.maangchi.com/wp-content/uploads/2019/01/koreanfriedchicken-620x349.jpg",
    rating: 4.9
  }
  ];


function renderFood(dish) {
  return <Food name={dish.name} pic={dish.image} />
}

function App() {
  return (
  <div> 
    {foodILike.map(dish => (
      <Food 
        key={dish.id} 
        name={dish.name} 
        pic={dish.image} 
        rating={dish.rating} 
      />
    ))}
    {/* {console.log(foodILike.map(renderFood))}
    {foodILike.map(renderFood)} */}
  </div>
  );
}

export default App;
