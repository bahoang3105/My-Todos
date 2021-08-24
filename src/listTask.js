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
        var tasks = JSON.parse(window.localStorage.getItem("tasks"));
        tasks.push({"name": taskName, "isComplete": "false", "id": taskName});
        this.setState({
            data: tasks
        });
        window.localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    getData() {
        let t = [];
        let data = JSON.parse(window.localStorage.getItem('tasks'));
        for(let i = 0; i < data.length; i++) {
            t.push(<Task task={data[i]} key={data[i].id}></Task>);
        }
        return <div id="listTask">{t}</div>
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