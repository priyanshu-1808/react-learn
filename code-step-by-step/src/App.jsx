import { useState } from "react";
import Counter from "./Counter";


function App() {
  const [fruit, setFruit] = useState("Apple");

  const handleFruits=()=>{
    setFruit("Banana")
  }
  return (
    <div>
      <h1>State In React JS</h1>
      <h1>{fruit}</h1>
      <button onClick={handleFruits}>Change Fruits</button>

       <Counter/>


    </div>
  )
}
export default App