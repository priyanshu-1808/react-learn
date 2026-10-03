import User from "./User"
import Wrapper from "./Wrapper"

function App(){
  return(
    <div>
      <h1>Props in React JS</h1>
      
      <Wrapper color = "orange">
        <h1>Hello Everyone</h1>
      </Wrapper>

      <Wrapper>
        <h1>Hello Agarwal ji</h1>
      </Wrapper>

      <Wrapper>
        <h1>Hello Admin ji</h1>
        <h2 style={{color:"red"}}>Please login</h2>
      </Wrapper>

      {/*  <User name = "Agarwal ji"/>
      <User name = "Singh ji"/>
      <User name = "Tiwari Ji"/>

      <User />
      <User /> */}

    </div> 
  )
}

export default App