import React from 'react';
import ListTask from './listTask';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return(
    <div>
      <ErrorBoundary>
        <ListTask></ListTask>
      </ErrorBoundary>
    </div>
  );
}

export default App;
