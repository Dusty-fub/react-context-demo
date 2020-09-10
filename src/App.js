import React from 'react';
import Myc from './context.js'
import Child from './Child.js'

function App() {
  return (
    <div className="App">
      context demo
      <Myc.Provider value='hw'>
        <Child />
      </Myc.Provider>
    </div>
  );
}

export default App;
