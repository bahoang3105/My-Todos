import React, { useState } from 'react';
import Task from '../task/task';
import ErrorBoundary from '../../ErrorBoundary';
import { useSelector, useDispatch } from 'react-redux';
import { createTask, selectListTask } from './listTaskSlice'; 

function ListTask() {
    const dispatch = useDispatch();
    const data = useSelector(selectListTask);
    const [newName, setNewName] = useState("");
    const listTask = data.map(task => <Task task={task} key={task.id} listTask={data}></Task>);
    return (
        <div>
            <h1>My Todos</h1>
            <div>
                <p>Create New Task</p>
                <p>Name: </p>
                <input type="text" id="createTask" 
                    value={newName} onChange={e => setNewName(e.target.value)}>    
                </input>
                <button type="submit" 
                    onClick={() => dispatch(createTask({"name": newName, "isComplete": "false", "id": newName, "link": ""}))}>Submit</button>
            </div>
            <br></br>
            <div id="listTask"><ErrorBoundary>{listTask}</ErrorBoundary></div>
        </div>
    );
}

export default ListTask;