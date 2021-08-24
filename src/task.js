import React from "react";

class Task extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: props.task.name, id: props.task.id, isComplete: props.task.isComplete};
    }

    delete = () => {
        document.getElementById('node' + this.state.id).style.display = 'none';
        this.setState({
            isDelete: 'true'
        });
    }

    complete = () => {
        this.setState({
            isComplete: 'true'
        });
    }

    update = () => {
        let newName = document.getElementById('text' + this.state.id).value;
        document.getElementById(this.state.id).innerHTML = newName;
        document.getElementById('text' + this.state.id).value = '';
        this.setState({
            name: newName
        });
    }

    render() {
        let textId = 'text' + this.state.id;
        let nodeId = 'node' + this.state.id;
        let isComplete = 'none';
        if(this.state.isComplete === 'true') {
            isComplete = 'line-through';
        }
        return (
            <div style={{ display:"inline" }} id={nodeId}>
                <h3 id={this.state.id} style={{ textDecorationLine: isComplete }}>{this.state.name}</h3>
                <button onClick={this.delete}>Delete</button>
                <button onClick={this.complete}>Complete</button>
                <br></br>
                Update New Name:
                <input type="text" id={textId}></input>
                <button type="submit" onClick={this.update}>Submit</button>
            </div>
        );
    }

    componentDidMount() {
        console.log("component Did Mount");
    }

    componentWillReceiveProps(nextProps) {
		console.log("Component con da nhan duoc props tu component cha");
	}
    
    componentDidUpdate() {
        let tasks = JSON.parse(window.localStorage.getItem('tasks'));
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
                    break;
                }
            }
        }
        window.localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}


export default Task;