import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Components/Input/input'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash);

function App() {
  return (
    <div className="App">
      <Input/>
    </div>
  );
}

export default App;
