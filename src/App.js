import { useState } from "react";
import Board from "./Board";
function App() {
  const [reset, setReset] = useState(false);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-2xl">Lokesh X-O Game</h1>
      <div className="">
        <Board />
      </div>
    </div>
  );
}

export default App;
