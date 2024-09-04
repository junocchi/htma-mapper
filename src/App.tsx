import { useState } from "react";
import lemonLogo from "/lemon.svg";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={lemonLogo} className="logo" alt="Juliana Nocchi logo" />
      </div>
      <h1 className="text-3xl font-bold underline">HTMA Mapper</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">By Ju Nocchi</p>
    </>
  );
}
