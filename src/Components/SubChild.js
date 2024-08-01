import React, { useContext } from 'react';
import dataContext from './Context'; // Importing the context

const SubChild = () => {
  // Using useContext hook to access the context values
  const new_variable = useContext(dataContext);

  return (
    <div>
      {/* Displaying the data value from the context */}
      <h3>subchild: {new_variable.data}</h3>
      {/* Button to increase the data value by 1 using the context's setData function */}
      <button onClick={() => new_variable.setData(new_variable.data + 1)}>SubData increase</button>
    </div>
  );
}

export default SubChild;
