import React, { useState } from 'react'
import List from './components/List';


const App = () => {

  const [input, setInput] = useState("");

  return (
    <main>
      <h1> CRUD Operations</h1>
      <div>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit'>ADD Task</button>
      </div>
      <ul>
        <List />
      </ul>
    </main>

  )
}

export default App
