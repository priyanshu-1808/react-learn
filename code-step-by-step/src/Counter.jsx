import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [rcount ,setRcounter] = useState(10)

  return (
    <div>
      <h1>Counter:{count}</h1>
      <h2>RCounter:{rcount}</h2>
      <button onClick={() => setCount(count + 1)}>Update Counter</button>
      <button onClick={()=> setRcounter(rcount - 1)}>Reverse Counter</button>

    </div>
  );
};

export default Counter;