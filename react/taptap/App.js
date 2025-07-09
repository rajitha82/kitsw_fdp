
import React from 'react';
import Child1  from './components/Child1'
//import Raji from './components/Raji'
import a from './components/Raji'
import {Test,Test2} from './components/Test'
import Garage from './components/Garage'
//import Car from './components/Car'
function App() {
  return (
    <React.StrictMode>
      <Child1 />
      <Test/>
      <Test2/>
      <Garage/>
      
      <p>Value is: {a}</p> {/* This is fine */}
    </React.StrictMode>
  );
}



export default App;
