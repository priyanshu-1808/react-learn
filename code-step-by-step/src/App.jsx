

function App() {
  const name = "Anil Sidhu";

  const userObj = {
    name: 'Prince',
    email: 'kr.priyanshu.1808@gmail.com',
    age: 20
  }

  const userArray = ['sam', 'peter', 'prince', 'agarwal']

  let x = 10;
  let y = 20;
  function fruit() {
    return "Apple"
  }

  function sum(a, b) {
    return a + b;
  }
  function Operation(a, b, op) {
    let result = 0;
    if (op == '+') {
      return a + b;
    } else if (op == '-') {
      return a - b;
    } else {
      return a * b;
    }
  }

  return (
    <div>
      <h1>JSX With Curly Braces</h1>
      <h1>{name}</h1>
      <h1> {x + y} </h1>
      <h4> {fruit()} </h4>
      <h1>{sum(10, 25)}</h1>

      <h1>{Operation(25, 4, '-')}</h1>

      <h1>{userObj.email}</h1>

      <h1>{userArray[2]}</h1>

    </div>
  )
}

export default App