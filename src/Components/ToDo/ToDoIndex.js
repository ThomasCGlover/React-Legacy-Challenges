import React, {Component} from 'react';
import ToDo from './ToDo';

export default class ToDoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            taskToAdd: '',
            taskList: ['class', 'gym', 'work'],
          
        }
        // this.taskInput = this.taskInput.bind(this);
        // this.addTask = this.addTask.bind(this);
    }

    taskInput = (event) => {
        this.setState({taskToAdd: event.target.value})
    }

    addTask = (event) => {
        event.preventDefault()
        this.setState({
            taskList: [...this.state.taskList, this.state.taskToAdd],
            // taskToAdd: '',
        })
        console.log(this.state.taskList)
    }


    render(){
        return(
            <div>
                <form className="form">
                    <input type="text" value={this.state.taskToAdd} onChange={this.taskInput} />
                    <button onClick={this.addTask} type="submit" value="submit">Add a Task!</button>
                </form>
                    <ToDo tasks={this.state.taskList} />  
            </div>
        )
    }
}