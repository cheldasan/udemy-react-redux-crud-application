import React from 'react';

function App() {
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onClick={() => {console.log('I am clicked.')}}/>
    </React.Fragment>
  )
  // const dom = <input type="text" onClick={() => {console.log('I am clicked.')}}/>;
  // return dom;
}

export default App;
