"use client"; // Allows components to run in the browser
import { useState } from 'react'

export default function Home() {

  const [search, setSearch] = useState("") // Holds current text user is typing
  const [result, setResult] = useState("") // Holds final submitted value
  return (
    <div>
      <p>
        <form onSubmit={(e) => {
          e.preventDefault();
          setResult(search);
        }
        }>
          <input type='text' placeholder='Enter text' onChange={(e) => setSearch(e.target.value)}></input>
          <button type='submit'>Submit</button>
          <p>Product Name: {result} </p>

        </form>
      </p>
    </div>
  );
}
