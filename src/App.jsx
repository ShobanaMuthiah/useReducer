import React, { useReducer } from 'react';
import handlechange from './Components/CompA';

const App = () => {
  const [state,dispatch]=useReducer(handlechange,0)
  return (
    <div>
        {state}
        <div>
          <button onClick={()=>{dispatch({type:"ADD"})}}>ADD</button>
          <button onClick={()=>{dispatch({type:"SUB"})}}>SUB</button>
        </div>
    </div>
  );
};

export default App;