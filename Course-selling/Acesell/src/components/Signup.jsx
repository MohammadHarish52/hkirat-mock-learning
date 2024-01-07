export function SignUp() {
  return (
    <div className="font-poppins bg-gray-900 text-white flex flex-col items-center justify-center h-screen">
      <div className="mb-4 text-center">
        <p className="text-base">
          Welcome to Aceshell. Please sign up to continue.
        </p>
      </div>
      <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden w-96 animate__animated animate__pulse animate__infinite">
        <div className="bg-purple-600 text-white py-8 text-center">
          <h1 className="text-2xl font-bold">Sign Up</h1>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-light">
              Email:
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded bg-gray-700 text-white focus:outline-none focus:ring focus:border-purple-500 transition duration-300 ease-in-out"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 font-light">
              Password:
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded bg-gray-700 text-white focus:outline-none focus:ring focus:border-purple-500 transition duration-300 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
