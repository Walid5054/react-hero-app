import { useParams, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import toast, { Toaster } from "react-hot-toast";

const AppDetails = () => {
  const { id } = useParams();
  const apps = useLoaderData();
  const app = apps.find((a) => a.id === parseInt(id));

  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    if (!app) return;
    const installs = JSON.parse(localStorage.getItem("installedApps") || "[]");
    setInstalled(installs.includes(app.id));
  }, [app]);

  if (!app) {
    return (
      <div className="pt-24 px-4 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">App Not Found</h1>
          <p className="text-gray-600">The app you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const installApp = () => {
    const installs = JSON.parse(localStorage.getItem("installedApps") || "[]");
    if (installs.includes(app.id)) {
      setInstalled(true);
      toast("Already installed", { icon: "✅" });
      return;
    }

    const next = [...installs, app.id];
    localStorage.setItem("installedApps", JSON.stringify(next));
    setInstalled(true);
    toast.success(`${app.title} installed successfully`);
  };

  const chartData = app.ratings.map((rating) => ({
    name: rating.name,
    value: rating.count,
  })).reverse();

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto min-h-screen pb-16">
      <Toaster position="top-right" />

      <div className="flex flex-col lg:flex-row gap-12 mb-16 pb-8 border-b">
        {/* Left: Image */}
        <div className="lg:w-1/4 flex items-start justify-center">
          <img
            src={app.image}
            alt={app.title}
            className="w-48 h-48 object-contain"
          />
        </div>

        {/* Right: Content */}
        <div className="lg:w-3/4">
          <h1 className="text-3xl font-bold mb-1">{app.title}</h1>
          <p className="text-gray-600 mb-8">Developed by <span className="text-blue-600 font-semibold">{app.companyName}</span></p>

          {/* Stats */}
          <div className="flex gap-8 mb-6">
            <div className="text-center">
              <div className="text-green-500 text-2xl mb-2">⬇</div>
              <div className="text-2xl font-bold">{(app.downloads / 1000000).toFixed(1)}M</div>
              <div className="text-sm text-gray-500">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-400 text-2xl mb-2">★</div>
              <div className="text-2xl font-bold">{app.ratingAvg}</div>
              <div className="text-sm text-gray-500">Average Ratings</div>
            </div>
            <div className="text-center">
              <div className="text-purple-500 text-2xl mb-2">📋</div>
              <div className="text-2xl font-bold">{(app.reviews / 1000).toFixed(0)}K</div>
              <div className="text-sm text-gray-500">Total Reviews</div>
            </div>
          </div>

          <button
            onClick={installApp}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              installed ? "bg-gray-300 text-gray-700 cursor-not-allowed" : "bg-green-500 text-white hover:bg-green-600"
            }`}
            disabled={installed}
          >
            {installed ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Ratings</h2>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 20, left: 100, bottom: 5 }}>
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" width={90} />
              <Tooltip />
              <Bar dataKey="value" fill="#f59e0b" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <p className="text-gray-700 leading-relaxed text-base">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;

