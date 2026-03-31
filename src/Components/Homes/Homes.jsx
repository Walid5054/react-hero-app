import { Link } from "react-router-dom";
import AppCard from "./Home";
import { useState, useEffect } from "react";
import homeImg from "../../assets/hero.png";

const Homes = ({ apps = [] }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const topApps = apps.slice(0, 8);

  return (
    <div className="pt-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          We Build <span className="text-purple-600">Productive</span> Apps
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition flex items-center gap-2"
          >
            <span>▶</span> Google Play
          </a>

          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition flex items-center gap-2"
          >
            <span>🍎</span> App Store
          </a>
        </div>
      </div>

      <div className="flex justify-center mb-12">
        <img src={homeImg} alt="HERO.IO App" className="w-full max-w-sm" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-center bg-gradient-to-r from-purple-500 to-purple-600 text-white p-10 rounded-2xl">
        <div>
          <h2 className="text-4xl font-bold">29.6M</h2>
          <p className="text-purple-100 text-sm">Total Downloads</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">906K</h2>
          <p className="text-purple-100 text-sm">Total Reviews</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">132+</h2>
          <p className="text-purple-100 text-sm">Active Apps</p>
        </div>
      </div>

      <div className="mb-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Trending Apps</h2>
          <p className="text-gray-500">Explore top trending apps on the market developed by us</p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-600 border-t-transparent"></div>
          </div>
        ) : apps && apps.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
            {topApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            <p>No apps available</p>
          </div>
        )}

        <div className="flex justify-center mt-12">
          <Link to="/apps">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition font-semibold">
              Show All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homes;
