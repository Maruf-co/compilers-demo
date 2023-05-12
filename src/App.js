import React, { useState } from 'react';

import Input from './components/Input';
import Output from './components/Output';

const App = () => {
  const [text, setText] = useState('');
  const [showOutput, setShowOutput] = useState(false);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowOutput(true);
  };

  const handleClose = () => {
    setShowOutput(false);
  };

  return (
    <div className="container is-max-desktop wrap">
      <h1 className="title my-4 p-2">Mom, I'm Compiler</h1>

      <Input handleSubmit={handleSubmit} handleChange={handleChange} isDisabled={showOutput} />

      {showOutput && <Output handleClose={handleClose} text={text} />}
    </div>
  );
};

export default App;
