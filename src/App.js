import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Task from './task';

const Tasks = [{'name': "task1", "isComplete": "false", "id": "1"}, {'name': "task2", "isComplete": "true", "id": "2"}];

function createTask() {
  var taskName = document.getElementById('createTask').value;
  document.getElementById('createTask').value = '';
  var newTask = ReactDOMServer.renderToStaticMarkup(<Task task={{'name': taskName, 'isComplete': 'false', 'id': '3'}}></Task>);
  document.getElementById('listTask').innerHTML += newTask;
}

function App() {
  var t = [];
  for(var i = 0; i < Tasks.length; i++) {
    t.push(<Task task={Tasks[i]}></Task>);
  }
  return(
    <div>
      <h1>My Todos</h1>
      <div>
        <p>Create New Task</p>
        <p>Name: </p>
        <input type="text" id="createTask"></input>
        <button type="submit" onClick={createTask}>Submit</button>
      </div>
      <br></br>
      <div id="listTask">{t}</div>
    </div>
  );
}

export default App;
