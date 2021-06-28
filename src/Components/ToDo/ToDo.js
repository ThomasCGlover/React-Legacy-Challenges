import React from 'react';
import {Container} from 'reactstrap';
import ToDoList from './ToDoIndex';


const ToDo = (props) => {

  return(
    <Container className="App">
      <h1>To-Do</h1>
      <div>
        {props.tasks.map(t=> <ol>{t}<br/><button>complete</button></ol>)} 
      </div>
     </Container>
  );
};

export default ToDo;