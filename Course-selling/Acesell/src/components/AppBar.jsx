export function AppBar({ isNightMode, onToggleNightMode }) {
  return (
    <div className={`bg-blue-500 p-4 flex justify-between items-center`}>
      <div className="flex items-center space-x-4">
        <h1 className={`text-lg font-bold text-white`}>Aceshell</h1>
      </div>
      <div className="flex items-center space-x-2">
        <button
          className={`px-4 py-2 rounded bg-blue-200 text-blue-800 hover:bg-blue-300 transition duration-300 ease-in-out`}
        >
          Sign Up
        </button>
        <button
          className={`px-4 py-2 rounded bg-blue-200 text-blue-800 hover:bg-blue-300 transition duration-300 ease-in-out`}
        >
          Sign In
        </button>
        <div
          onClick={onToggleNightMode}
          className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ${
            isNightMode
              ? "bg-blue-300 text-blue-800"
              : "bg-blue-200 text-blue-800"
          } hover:bg-${
            isNightMode ? "blue-400" : "blue-300"
          } transition duration-300 ease-in-out`}
        >
          {isNightMode ? "D" : "N"}
        </div>
      </div>
    </div>
  );
}
