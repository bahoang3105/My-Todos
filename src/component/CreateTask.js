import React, { useState } from "react";
import { connect } from "react-redux";
import { createTask } from "../redux/actions";

function CreateTask(props) {
  const [name, setName] = useState("");

  const handleCreateTask = () => {
    props.createTask(name);
    setName("");
  };

  return (
    <div>
        <p>Create New Task</p>
        <p>Name: </p>
        <input type="text" id="createTask" 
            value={name} onChange={e => {setName(e.target.value)}}>    
        </input>
        <button type="submit" 
            onClick={handleCreateTask}>Submit</button>
    </div>
  );
}

export default connect(null, { createTask })(CreateTask);