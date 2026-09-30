import { useState } from "react"
import User from "./User"


function App() {

  const [display, setDisplay] = useState(true)

  return (
    <div>
      <h1>Toggle In React JS</h1>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      
      
      {/*{
        display ? <h1>Priyanshu Agarwal</h1> : null
      } */}
      {
        display?<User/> :null
      }


    </div>
  )
}


export default App