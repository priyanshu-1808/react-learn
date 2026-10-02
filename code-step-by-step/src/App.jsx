import { useState } from "react"
import College from "./College"
import Student from "./Student"
import User from "./User"

function App() {
  // let userName= "Prince9835";
  // let age = 29;
  // let email = "tech.prince@gmail.com"

  let userObject1 = {
    name: "Priyashu Kr",
    age: "20",
    email: "priyanshu@test.com"
  }

  let userObject2 = {
    name: "Prince Kr",
    age: "21",
    email: "prince@test.com"

  }

  let collegeNames = ['IET', 'DU', 'MIT', 'NIT', 'SCE']

  const [student,setStudent] = useState()


  return (
    <div>
      <h1>Props In React JS</h1>

       {student && <Student name = {student}/> }
        <button onClick={()=>setStudent("Agaarwall")}>Update Student Name</button>

      {/* <User name = {userName} age = {age} email = {email}/> */}

      <College name={collegeNames[0]} />
      <College name={collegeNames[2]} />
      <College name={collegeNames[3]} />
      <College name={collegeNames[4]} />


      <User user={userObject1} />
      <User user={userObject2} />




    </div>
  )
}

export default App