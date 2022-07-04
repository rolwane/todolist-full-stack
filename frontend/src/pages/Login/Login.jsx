import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="flex w-full h-screen bg-sky-600 items-center justify-center">

      <form className="flex flex-col max-w-[340px] w-full gap-4 p-4" onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 rounded-lg text-md font-semibold text-gray-600"
          onChange={({ target }) => setEmail(target.value)}
          value={email}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 rounded-lg text-md font-semibold text-gray-600"
          onChange={({ target }) => setPassword(target.value)}
          value={password}
          required
        />

        <button
          type="submit"
          className="w-full p-4 rounded-lg bg-teal-500 text-white text-md font-bold"
        >
          Sign In
        </button>

        <Link
          to="/asdasdad"
          className="text-white text-center text-sm font-bold"
        >
          {'Don\'t have an account?'}
        </Link>

      </form>

    </section>
  );
}

export default Login;
