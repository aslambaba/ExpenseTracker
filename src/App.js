import React from 'react';
import './App.css';
import Child from './Child';
import {ContextPro} from './Context';

function App() {

  return (
    <ContextPro>
      <Child />
    </ContextPro>
      
  );
}

export default App;
