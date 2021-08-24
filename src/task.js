import React from "react";
import { Link } from 'react-router-dom';

class Task extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: props.task.name, id: props.task.id, isComplete: props.task.isComplete, link:""};
    }

    delete = () => {
        this.setState({
            isDelete: 'true'
        });
    }

    complete = () => {
        this.setState({
            isComplete: 'true'
        });
    }

    updateName = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    updateLink = (event) => {
        this.setState({
            link: event.target.value
        });
    }

    render() {
        let textId = 'text' + this.state.id;
        let nodeId = 'node' + this.state.id;
        let isComplete = 'none';
        if(this.state.isComplete === 'true') {
            isComplete = 'line-through';
        }
        let howToDisplay = 'inline';
        if(this.state.isDelete === 'true') {
            howToDisplay = 'none';
        }
        return (
            <div style={{ display: howToDisplay }} id={nodeId}>
                <Link to={`/detail/${this.state.id}`}>
                    <h3 id={this.state.id} style={{ textDecorationLine: isComplete }}>
                        {this.state.name}
                    </h3>
                </Link>
                <button onClick={this.delete}>Delete</button>
                <button onClick={this.complete}>Complete</button>
                <br></br>
                Update New Name:
                <input type="text" id={textId} onChange={this.updateName}></input>
                <br></br>
                Upload File:
                <input type="text" onChange={this.updateLink}></input>
            </div>
        );
    }
    
    componentDidUpdate() {
        let tasks = this.props.listTask;
        if(this.state.isDelete === 'true') {
            for(let i = 0; i < tasks.length; i++) {
                if(tasks[i].id === this.state.id) {
                    tasks.splice(i, 1);
                    break;
                }
            }
            window.localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        else {
            for(let i = 0; i < tasks.length; i++) {
                if(tasks[i].id === this.state.id) {
                    tasks[i].name = this.state.name;
                    tasks[i].isComplete = this.state.isComplete;
                    tasks[i].link = this.state.link;
                }
            }
        }
        window.localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

export default Task;