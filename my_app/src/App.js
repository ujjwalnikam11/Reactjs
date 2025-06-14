/*import logo from './logo.svg';
// import './App.css';

// function App() {
//   // return (
//   //   <div className="App">
//   //     <header className="App-header">
//   //       <img src={logo} className="App-logo" alt="logo" />
//   //       <p>
//   //         Edit <code>src/App.js</code> and save to reload.
//   //       </p>
//   //       <a
//   //         className="App-link"
//   //         href="https://www.w3schools.com/react/react_intro.asp"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         Learn React
//   //       </a>
//   //     </header>
//   //   </div>
//   // );
 }*/
import React from 'react';

function App() {
  const myElement = <h1>I Love JSX!</h1>;
  const myElement2 = <h2>It is {5 + 5} times better with JSX!</h2>;
  const myElement3 = (
    <p>
      JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write HTML-like code within JavaScript, making it easier to create and visualize the structure of your UI components.
    </p>
  );
  const myElement4 = (
    <p>
      JSX is not required to use React, but it is widely used because it makes the code more readable and easier to write.
    </p>
  );
  const myElement5 = (
    <p>
      JSX is compiled to JavaScript at build time, which means that it is transformed into standard JavaScript function calls that create React elements.
    </p>
  );
  const myElement6 = (
    <p>
      JSX can also include JavaScript expressions, which allows you to dynamically render content based on the state or props of your components.
    </p>
  );
  const myElement7 = (
    <p>
      JSX supports embedding JavaScript expressions using curly braces, which allows you to include variables, function calls, and other expressions directly within your JSX code.
    </p>
  );
  const myElement8 = (
    <p>
      JSX can be used with React components, allowing you to create reusable UI elements that can be composed together to build complex user interfaces.
    </p>
  );
  const myElement9 = (
    <p>
      JSX is a powerful tool that enhances the development experience in React, making it easier to create and manage UI components.
    </p>
  );

  return (
    <div>
      {myElement}
      {myElement2}
      {myElement3}
      {myElement4}
      {myElement5}
      {myElement6}
      {myElement7}
      {myElement8}
      {myElement9}
    </div>
  );
}

export default App;
