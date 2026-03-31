import { useLoaderData } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import toast, { Toaster } from "react-hot-toast";

const MyInstallations = () => {
  const apps = useLoaderData();
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("high");

  useEffect(() => {
    const installs = JSON.parse(localStorage.getItem("installedApps") || "[]");
    if (apps) {
      const installed = apps.filter((app) => installs.includes(app.id));
      setInstalledApps(installed);
    }
  }, [apps]);

  const sortedApps = useMemo(() => {
    const copy = [...installedApps];
    if (sortOrder === "high") {
      return copy.sort((a, b) => b.downloads - a.downloads);
    } else {
      return copy.sort((a, b) => a.downloads - b.downloads);
    }
  }, [installedApps, sortOrder]);

  const uninstallApp = (appId) => {
    const installs = JSON.parse(localStorage.getItem("installedApps") || "[]");
    const next = installs.filter((id) => id !== appId);
    localStorage.setItem("installedApps", JSON.stringify(next));
    
    const appTitle = installedApps.find((a) => a.id === appId)?.title;
    setInstalledApps((prev) => prev.filter((app) => app.id !== appId));
    toast.success(`${appTitle} uninstalled successfully`);
  };

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto min-h-screen pb-16">
      <Toaster position="top-right" />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Your Installed Apps</h1>
        <p className="text-gray-500 mt-2">Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div className="text-lg font-semibold">({installedApps.length}) Apps Found</div>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
        >
          <option value="high">Sort By Size - High to Low</option>
          <option value="low">Sort By Size - Low to High</option>
        </select>
      </div>

      {installedApps.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-lg">No apps installed yet</p>
          <p className="text-sm">Install apps from the Apps page to see them here</p>
        </div>
      ) : (
        <div className="space-y-3">
          {sortedApps.map((app) => (
            <div key={app.id} className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <img
                src={app.image}
                alt={app.title}
                className="w-16 h-16 object-contain rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{app.title}</h3>
                <div className="flex gap-6 text-sm text-gray-600 mt-1">
                  <span>⬇ {(app.downloads / 1000000).toFixed(1)}M</span>
                  <span>★ {app.ratingAvg}</span>
                  <span>{app.size} MB</span>
                </div>
              </div>
              <button
                onClick={() => uninstallApp(app.id)}
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-semibold"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyInstallations;
