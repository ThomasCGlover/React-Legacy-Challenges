import { render } from '@testing-library/react';
import React from 'react';
import {Container} from 'reactstrap';
import DogIndex from './DogIndex';
 
const Dogs = () => {

  return (
    <Container className="App">
      <DogIndex />
      
    </Container>
    
  );
  

}
 
export default Dogs;
