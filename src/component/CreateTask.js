import React from "react";
import { connect } from "react-redux";
import { createTask } from "../redux/actions";

class CreateTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  setName = (name) => {
    this.setState({ name });
  };

  handleCreateTask = () => {
    this.props.createTask(this.state.name);
    this.setState({ name: "" });
  };

  render() {
    return (
        <div>
            <p>Create New Task</p>
            <p>Name: </p>
            <input type="text" id="createTask" 
                value={this.state.name} onChange={e => {this.setName(e.target.value)}}>    
            </input>
            <button type="submit" 
                onClick={this.handleCreateTask}>Submit</button>
        </div>
    );
  }
}

export default connect(null, { createTask })(CreateTask);