import React, { useState } from 'react';
// Importing Child and SubChild components
import Child from './Components/Child';
// Importing dataContext for context management
import dataContext from './Components/Context';
import SubChild from './Components/SubChild';

const App = () => {
  // State to hold the current value, initialized to 0
  const [data, setData] = useState(0);

  /*
   * The App component provides context to its children components.
   * dataContext.Provider is used to pass down the `data` and `setData` state.
   * This allows Child and SubChild components to access and modify the `data` state.
   */
  return (
    <div>
      <dataContext.Provider value={{ data, setData }}>
        <h1>Rendered from App: {data}</h1>
        {/* Button to increase the data value */}
        <button onClick={() => setData(data + 1)}>Increase btn</button>
        {/* Rendering Child and SubChild components */}
        <Child />
        <SubChild />
      </dataContext.Provider>
    </div>
  );
}

export default App;
