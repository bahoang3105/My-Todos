import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { complete, rename, updateLink, del } from "../redux/actions";

const Task = ({ task, complete, rename, updateLink, del }) => (
    <div>
        <Link to={`/detail/${task.id}`}>
            <h3 id={task.id} style={{ textDecorationLine: task.isComplete==='true' ? 'line-through' : 'none' }}>
                {task.name}
            </h3>
        </Link>
        <button onClick={() => del(task.id)}>Delete</button>
        <button onClick={() => complete(task.id)}>Complete</button>
        <br></br>
        Update New Name:
        <input type="text" id={`text${task.id}`} onChange={e => rename(task.id, e.target.value)}>
        </input>
        <br></br>
        Upload File:
        <input type="text" onChange={e => updateLink(task.id, e.target.value)}></input>
    </div>
);

export default connect(
    null,
    { complete, rename, updateLink, del }
)(Task);