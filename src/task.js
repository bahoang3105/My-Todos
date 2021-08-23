import React from "react";

class Task extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: props.task.name, id: props.task.id, isComplete: props.task.isComplete, textDecorationLine: 'none', display: 'inline'};
    }

    delete = () => {
        this.setState({
            isComplete: 'true',
            display: 'none'
        });
    }

    complete = () => {
        this.setState({
            textDecorationLine: 'line-through'
        });
    }

    render() {
        var textId = 'text' + this.state.id;
        return (
            <div style={{ display:this.state.display }}>
                <h3 id={this.state.id} style={{ textDecorationLine: this.state.textDecorationLine }}>{this.state.name}</h3>
                <button onClick={this.delete}>Delete</button>
                <button onClick={this.complete}>Complete</button>
                <br></br>
                Update New Name:
                <input type="text" id={textId}></input>
                <button type="submit" onClick={() => {
                    document.getElementById(this.state.id).innerHTML = document.getElementById(textId).value;
                    document.getElementById(textId).value = '';
                }}>Submit</button>
            </div>
        );
    }
}


export default Task;