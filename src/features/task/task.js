import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { del, complete, rename, updateLink } from '../listTask/listTaskSlice';

function Task( {task} ) {
    const dispatch = useDispatch();

    return (
        <div>
            <Link to={`/detail/${task.id}`}>
                <h3 id={task.id} style={{ textDecorationLine: task.isComplete==='true' ? 'line-through' : 'none' }}>
                    {task.name}
                </h3>
            </Link>
            <button onClick={() => dispatch(del(task.id))}>Delete</button>
            <button onClick={() => dispatch(complete(task.id))}>Complete</button>
            <br></br>
            Update New Name:
            <input type="text" id={`text${task.id}`} onChange={e => dispatch(rename({"id": task.id, "newName": e.target.value}))}>
            </input>
            <br></br>
            Upload File:
            <input type="text" onChange={e => dispatch(updateLink({"id": task.id, "link": e.target.value}))}></input>
        </div>
    );
}

export default Task;