import React from 'react'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  
  const [restaurants, setRestaurants] = useState([]);

  useEffect(()=> {
    let fetchRestaurant = async () =>{
      let data = await fetch('./restaurants.json')
                  .then((res) => res.json())
                  .catch((err) => console.log(err));
      
      setRestaurants(data.restaurants);            
    }

    fetchRestaurant();
    
  
  }, []);

  console.log(restaurants);

  return (
    <Container>
      <Row>
        {
          restaurants && restaurants.map((restaurant) => (
              <Col className='mt-3' md={3} key={restaurant.id}>
            <Card style={{height:'720px'}}>
          <Card.Img variant="top" src={`${restaurant.photograph}`} />
          <Card.Body>
                <Card.Title>{restaurant.name}</Card.Title>
                <Card.Text>
                    <br /><strong>Cuisine:</strong> {restaurant.cuisine_type}
                    <br/><strong>Address:</strong> {restaurant.address}
                </Card.Text>
                <Button as={Link} to={`/restaurant/${restaurant.id}`} variant="primary" className='mt-5'>More Details</Button>
          </Card.Body>
            </Card>
              </Col>
                ))

              }  
      </Row>
    </Container>
  )
}

export default Home