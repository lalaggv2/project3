import React from 'react';
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Jumbotron, Container, Button } from 'react-bootstrap';
import inspages from './inspages.css';

function AutoIns() {
  return (
    <>
      <Nav />
      <Container className="inspage">
        <Jumbotron className="myJumbotron" fluid>
          <h1 className="text"> Auto Insurance</h1>
        </Jumbotron>

        <p>Vehicle insurance (also known as car insurance, motor insurance, or auto insurance) is insurance for cars, trucks, motorcycles, and other road vehicles. Its primary use is to provide financial protection against physical damage or bodily injury resulting from traffic collisions and against liability that could also arise from incidents in a vehicle. Vehicle insurance may additionally offer financial protection against theft of the vehicle, and against damage to the vehicle sustained from events other than traffic collisions, such as keying, weather or natural disasters, and damage sustained by colliding with stationary objects. The specific terms of vehicle insurance vary with legal regulations in each region.</p>
      </Container>
      <Footer />
    </>
  )
};

export default AutoIns;