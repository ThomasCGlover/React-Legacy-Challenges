import React, {Component} from 'react';

export default class ToDoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            taskToAdd: '',
            taskList: []
        }

    }

    taskInput = (event) => {
        this.setState({taskToAdd: event.target.value})
    }

    addTask = (event) => {
        event.preventDefault()
        this.setState({
            taskToAdd: '',
            taskList: [...this.state.taskList, this.state.taskToAdd]
        })
        console.log(this.state.taskList)
    }

    List = () => {
        return(
        <ul>
            {this.state.taskList.map(task => <li>{task}</li>)}
        </ul>
        )
    }

    render(){
        return(
            <div>
                <form className="form">
                    <input type="text" value={this.state.taskToAdd} onChange={this.taskInput} />
                    <button onSubmit={this.addTask} type="submit" value="submit">Add a Task!</button>
                </form>
                 <div>
                    {this.List}
                </div>
            </div>
        )
    }
}