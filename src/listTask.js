import React from 'react';
import Task from './task';
import ErrorBoundary from './ErrorBoundary';

class listTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    setNewName = (event) => {
        this.setState({
            newTask: event.target.value
        });
    } 

    createTask = () => {
        let taskName = this.state.newTask;
        var [...tasks] = this.state.data;
        tasks.push({"name": taskName, "isComplete": "false", "id": taskName});
        this.setState({
            data: tasks
        });
        window.localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    componentDidMount() {
        this.setState({
            data: JSON.parse(window.localStorage.getItem('tasks'))
        });
    }

    getData() {
        let listTask = this.state.data.map(task => <Task task={task} key={task.id} listTask={this.state.data}></Task>);
        return <div id="listTask"><ErrorBoundary>{listTask}</ErrorBoundary></div>
    }

    render() {
        return (
            <div>
                <h1>My Todos</h1>
                <div>
                    <p>Create New Task</p>
                    <p>Name: </p>
                    <input type="text" id="createTask" onChange={this.setNewName}></input>
                    <button type="submit" onClick={this.createTask}>Submit</button>
                </div>
                <br></br>
                { this.getData() }
            </div>
        );
    }
}

export default listTask;