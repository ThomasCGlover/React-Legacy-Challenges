import React from 'react';
import {Container} from 'reactstrap';
import ToDoList from './ToDoIndex';

const ToDo = () => {
  return(
    <Container className="App">
      <ToDoList />
     </Container>
  );
};

export default ToDo