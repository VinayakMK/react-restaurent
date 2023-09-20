import React from 'react'
import { Container} from 'react-bootstrap'
import { useState, useEffect, Row, Col, Card } from 'react';
import { useParams } from 'react-router-dom'

function RestaurantDetails() {

  const {id} = useParams();
  const [restaurants, setRestaurants] = useState([]);

  useEffect(()=> {
    let fetchRestaurant = async () =>{
      let data = await fetch('/restaurants.json')
                  .then((res) => res.json())
                  .catch((err) => console.log(err));
      
      setRestaurants(data.restaurants);            
    }

    fetchRestaurant();
    
  
  }, []);

  let findRestaurant = restaurants.find((item) => item.id == id)

  return (
    <Container>
      <Row>
        {
          restaurants && restaurants.map((restaurant) => (
              <Col className='mt-3' md={3} key={restaurant.id}>
          <Card.Img variant="top" src={`${restaurant.photograph}`} />
            
          
              </Col>
                ))

              }  
      </Row>
    </Container>
  );
}


export default RestaurantDetails