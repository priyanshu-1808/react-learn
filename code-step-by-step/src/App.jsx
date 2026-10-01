import { useState } from "react";

function App() {
  const [status, setStatus] = useState("loading");

  return (
    <div>
      {status === "loading" && <h2>Loading...</h2>}

      {status === "success" && <h2>Data Loaded Successfully!</h2>}

      {status === "error" && <h2>Something went wrong!</h2>}

      <button onClick={() => setStatus("loading")}>
        Loading
      </button>

      <button onClick={() => setStatus("success")}>
        Success
      </button>

      <button onClick={() => setStatus("error")}>
        Error
      </button>
    </div>
  );
}

export default App;