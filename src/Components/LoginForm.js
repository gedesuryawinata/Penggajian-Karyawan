import React from 'react';

function LoginForm() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-medium mb-4">Login</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="username">
              Username
            </label>
            <input className="w-full border border-gray-300 p-2 rounded-lg" type="text" id="username" name="username" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input className="w-full border border-gray-300 p-2 rounded-lg" type="password" id="password" name="password" />
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
