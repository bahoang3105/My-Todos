import React from 'react';
import Task from './Task';
import ErrorBoundary from './ErrorBoundary';
import CreateTask from './CreateTask';
import { connect } from 'react-redux';
import { getListTask } from '../redux/selectors';

const ListTask = ({ data }) => {
    window.localStorage.setItem("tasks", JSON.stringify(data));
    let listTask = data.map(task => <Task task={task} key={task.id}></Task>);
    return (
        <div>
            <CreateTask></CreateTask>
            <h1>My Todos</h1>
            <br></br>
            <div id="listTask"><ErrorBoundary>{listTask}</ErrorBoundary></div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    data: getListTask(state)
});

export default connect(mapStateToProps)(ListTask);