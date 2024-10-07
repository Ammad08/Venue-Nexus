import React, { useState, useEffect } from 'react';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowForm(true), 500); // Delay for transition effect
  }, []);

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    // Name validation
    if (!name.trim()) {
      tempErrors.name = 'Name is required.';
      isValid = false;
    }

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

    // Confirm Password validation
    if (password !== confirmPassword) {
      tempErrors.confirmPassword = 'Passwords do not match.';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle successful signup logic
      console.log('Form submitted:', { name, email, password });
      alert("Account created succuessfully")
    }
  };

  return (
    <div
      className="min-h-screen bg-[url('/image5.jpg')]  bg-cover bg-center flex items-center justify-center transition-opacity duration-700"
      
    >
      <div
        className={` bg-white bg-opacity-50 p-8 py-2 rounded-3xl shadow-2xl w-full max-w-sm  text-center transition-transform duration-1000 ${
          showForm ? 'transform scale-100 opacity-100' : 'transform scale-75 opacity-0'
        }`}
      >
        {/* Logo */}
        <div className="mb-2 transform transition duration-500 hover:scale-125">
          <img
            src="logo1.png"
            alt="Logo"
            className="mx-auto h-20 w-20 md:h-32 md:w-32 lg:h-32 lg:w-32 xl:h-32 xl:w-32 bg-white bg-opacity-80 rounded-2xl"
          />
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6 mt-3transform transition duration-500 hover:scale-125 ">SIGNUP</h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4 transform transition duration-500 hover:scale-105">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 bg-slate-300 rounded-xltransform transition duration-500 hover:scale-125 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div className="mb-4 transform transition duration-500 hover:scale-105">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 bg-slate-300 rounded-xl text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-4 transform transition duration-500 hover:scale-105">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 bg-slate-300 rounded-xl text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <div className="mb-6 transform transition duration-500 hover:scale-105">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.confirmPassword && (
              <p className="text-red-500  rounded-xl text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>
          <button
            type="submit"
            className='w-full transform transition duration-500 hover:scale-105 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  px-6 py-2 rounded-xl  text-center'
          >
            Submit
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-gray-950 ">
          Already have an account?{' '}
          <a href="/Login" className="text-red-600 hover:underline transform transition duration-500 hover:scale-105">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
