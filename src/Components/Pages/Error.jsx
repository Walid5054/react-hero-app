import React from 'react';
import errorImg from '../../assets/App-Error.png';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="pt-24 px-4 min-h-screen flex items-center justify-center">
      <div className="text-center max-w-2xl">
        <img src={errorImg} alt="Error 404" className="w-64 h-64 mx-auto mb-8 object-contain" />
        <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 text-lg mb-8">
          Sorry! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition font-semibold">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;