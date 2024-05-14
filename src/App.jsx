import React, { useReducer } from 'react';
import handlechange from './Components/CompA';

const App = () => {
  const [state,dispatch]=useReducer(handlechange,0)
  return (
    <div>
        
        <div>
        <button onClick={()=>{dispatch({type:"SUB"})}}>-</button>
        
        <p className='scr'>{state}</p>
          <button onClick={()=>{dispatch({type:"ADD"})}}>+</button>
        </div>
    </div>
  );
};

export default App;