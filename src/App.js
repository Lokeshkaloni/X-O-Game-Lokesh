import Board from "./Board";
function App() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/2-e1k87CQxc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h1 className="font-bold text-2xl">Lokesh X-O Game</h1>
      <div>
        <Board />
      </div>
    </div>
  );
}

export default App;
