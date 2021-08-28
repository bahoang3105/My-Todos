import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { complete, rename, del } from "../redux/actions";
import UploadFile from './UploadFile';

function Task(props) {
    const [name, setName] = useState(props.task.name);
    const [displayChangeName, setDisplayChangeName] = useState(true);

    const openChangeName = () => {
        setDisplayChangeName(!displayChangeName);
    }

    const saveChangeName = () => {
        setDisplayChangeName(!displayChangeName);
        props.rename(props.task.id, name);
    }

    return (
        <div className="task">
            <h3 
                id={props.task.id} className="nameOfTask"
                style={{ textDecorationLine: props.task.isComplete==='true' ? 'line-through' : 'none', display: displayChangeName ? "block" : "none" }}
                onClick={openChangeName}
            >
                    {props.task.name}
            </h3>

            <div style={{ display: displayChangeName ? "none" : "flex" }}>
                <input type="text" className="changeNameInput" value={name} onChange={e => setName(e.target.value)}></input>
                <button type="button" className="changeNameButton" onClick={() => saveChangeName()}>Rename</button>
            </div>

            <br></br>
            <Link to={`/detail/${props.task.id}`}>
                <input type="button" value="View Detail"></input>
            </Link>
            <button onClick={() => props.del(props.task.id)}>Delete</button>
            <button onClick={() => props.complete(props.task.id)}>Complete</button>
            <br></br>
            <UploadFile id={props.task.id}></UploadFile>
            <hr></hr>
        </div>
    );
}

export default connect(
    null,
    { complete, rename, del }
)(Task);