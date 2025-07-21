import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const maxCount = 10;

  const increment = () => {
    if (count < maxCount) {
      setCount(prev => prev + 1);
    }
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          React Counter App
        </h1>
        
        <div className="text-8xl font-bold text-center mb-8 text-white font-mono relative">
          <div className="absolute inset-0 bg-white/10 blur rounded-full -m-4"></div>
          <span className="relative">{count}</span>
        </div>

        {count < 0 && (
          <div className="bg-red-500/20 backdrop-blur-sm text-red-100 p-4 rounded-xl text-center mb-6 font-medium border border-red-500/30">
            Below zero!
          </div>
        )}

        {count >= maxCount && (
          <div className="bg-yellow-500/20 backdrop-blur-sm text-yellow-100 p-4 rounded-xl text-center mb-6 font-medium border border-yellow-500/30">
            Maximum reached!
          </div>
        )}

        <div className="flex flex-col gap-4">
          <button
            onClick={increment}
            disabled={count >= maxCount}
            className="w-full bg-green-500 bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 border border-green-500/30"
          >
            Add (+)
          </button>

          <button
            onClick={decrement}
            className="w-full bg-red-500 bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 hover:scale-105 border border-red-500/30"
          >
            Subtract (-)
          </button>

          <button
            onClick={reset}
            className="w-full bg-blue-500 bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 hover:scale-105 border border-blue-500/30"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter; 