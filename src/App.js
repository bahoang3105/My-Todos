import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListTask from './component/ListTask';
import Detail from './component/DetailTask';

function App() {
  return(
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={ListTask} />
          <Route path='/detail/:id' component={Detail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
