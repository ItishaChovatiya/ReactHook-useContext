# React Hook: useContext

## Overview

`useContext` is a React Hook that allows you to access the value of a context directly from a functional component. It simplifies the process of consuming context values without needing to use the Context Consumer component.

## Features

- **Access Context Values**: Easily access the current value of a context.
- **Simplify Component Hierarchy**: Avoid prop drilling by consuming context directly.
- **React Functional Components**: Use context with functional components in a clean and concise way.

## Installation

No additional installation is required if you are using React as `useContext` is built into React's core library.

## Basic Usage

### Setting Up

1. **Create a Context**: Use `React.createContext` to create a new context.

   ```jsx
   import React, { createContext, useContext, useState } from 'react';

   const MyContext = createContext();
   ```

2. **Provide the Context Value**: Use a context provider to pass the value down the component tree.

   ```jsx
   function MyProvider({ children }) {
     const [value, setValue] = useState('Hello, World!');

     return (
       <MyContext.Provider value={{ value, setValue }}>
         {children}
       </MyContext.Provider>
     );
   }
   ```

3. **Consume the Context Value**: Use `useContext` to access the context value within a functional component.

   ```jsx
   function MyComponent() {
     const { value, setValue } = useContext(MyContext);

     return (
       <div>
         <p>{value}</p>
         <button onClick={() => setValue('New Value')}>Change Value</button>
       </div>
     );
   }
   ```

### Example

```jsx
import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

function MyProvider({ children }) {
  const [value, setValue] = useState('Hello, World!');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}

function MyComponent() {
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue('New Value')}>Change Value</button>
    </div>
  );
}

function App() {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
}

export default App;
```

## When to Use

- **Global State Management**: Manage and share state across multiple components without prop drilling.
- **Theme Management**: Provide and consume theme-related values across your application.
- **Localization**: Share locale and translation data throughout your app.

## License

This React Hook documentation is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For questions or suggestions, please contact [Itisha Chovatiya](mailto:itishachovatiya7096@gmail.com).

---

Thank you for using `useContext`!
