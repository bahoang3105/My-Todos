import React from 'react';
import { useSelector } from 'react-redux';
import { selectListTask } from './features/listTask/listTaskSlice'; 

function Detail( {match} ) {
    const data = useSelector(selectListTask);
    const id = match.params.id;
    const getTask = () => {
        for(let i = 0; i < data.length; i++) {
            if(id === data[i].id) {
                return data[i];
            }
        }
    }

    const {name, isComplete, link} = getTask();
    const display = (link === "") ? 'none' : 'inline';
    const status = (isComplete==='true') ? 'Completed' : 'Doing' 
    return (
        <div>
            <h1>Task: {name}</h1>
            <h1>Status: {status}</h1>
            <h1 style={{ display: display }}>Link file: <a target='_blank' href={link} rel="noopener noreferrer">{link}</a></h1>
        </div>
    );
}

export default Detail;