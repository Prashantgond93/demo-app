// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddTodo } from "./components/AddTodo";
import { TodoLists } from "./components/TodoLists";

const App = () => {
  return (
    <div className="container p-4 mt-2">
      <h2>Todo Application</h2>
      <AddTodo />
      <TodoLists />
    </div>
  );
};

export default App;
