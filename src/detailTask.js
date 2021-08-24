import React from 'react';

function Detail( {match} ) {

    const id = match.params.id;
    const getTask = () => {
        const tasks = JSON.parse(window.localStorage.getItem('tasks'));
        for(let i = 0; i < tasks.length; i++) {
            if(id === tasks[i].id) {
                return tasks[i];
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