import React, { useState, useEffect } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowForm(true), 500); // Delay for transition effect
  }, []);

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    // Email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      tempErrors.email = 'Please enter a valid email.';
      isValid = false;
    }

    // Password validation
    if (password.length < 8) {
      tempErrors.password = 'Password must be at least 8 characters long.';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle successful login logic
      console.log('Form submitted:', { email, password });
      alert("Login Successfully")
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-[url('/image5.jpg')] bg-slate-400 bg-center flex items-center justify-center transition-opacity duration-700"
      
    >
      <div
        className={ `bg-transparent md:bg-slate-300 lg:bg-slate-300 xl:bg-slate-300 p-8   rounded-3xl shadow-2xl w-full  max-w-sm text-center transition-transform duration-1000 ${
          showForm ? 'transform scale-100 opacity-100' : 'transform scale-75 opacity-0'
        }`}
      >
        {/* Logo */}
        <div className="mb-4 ">
          <img
            src="logo1.png"
            alt="Logo"
            className="mx-auto h-20 w-20 md:h-32 md:w-32 lg:h-32 lg:w-32 xl:h-32 xl:w-32 bg-slate-200 rounded-xl md:bg-transparent lg:bg-transparent xl:bg-transparent"
          />
        </div>

        {/* Heading */}
        <h2 className="text-black text-2xl font-bold mb-6 ">LOGIN</h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 bg-slate-300 rounded-xl text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 bg-slate-300 rounded-xl text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            // className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          className='w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  px-6 py-2 rounded-xl  text-center'
          >
            Submit
          </button>
        </form>

        {/* Signup Link */}
        <p className="mt-4 text-gray-200 md:text-gray-600 lg:text-gray-600 xl:text-gray-600">
          Don't have any account?{' '}
          <a href="/signup" className="text-blue-500 hover:underline">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
