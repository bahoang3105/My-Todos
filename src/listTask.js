import React from 'react';
import Task from './task';

class listTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    createTask = () => {
        var taskName = document.getElementById('createTask').value;
        document.getElementById('createTask').value = '';
        var tasks = this.state.data;    
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
        let listTask = this.state.data.map(task => <Task task={task} key={task.id}></Task>);
        return <div id="listTask">{listTask}</div>
    }

    render() {
        return (
            <div>
                <h1>My Todos</h1>
                <div>
                    <p>Create New Task</p>
                    <p>Name: </p>
                    <input type="text" id="createTask"></input>
                    <button type="submit" onClick={this.createTask}>Submit</button>
                </div>
                <br></br>
                { this.getData() }
            </div>
        );
    }
}

export default listTask;