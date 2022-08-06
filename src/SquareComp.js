const SquareComp = ({ value, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="border-2 border-indigo-500 h-20 w-20 flex items-center justify-center"
    >
      <span className="text-5xl font-bold">{value}</span>
    </div>
  );
};

export default SquareComp;
