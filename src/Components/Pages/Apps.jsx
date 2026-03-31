import { useLoaderData } from "react-router-dom";
import { useMemo, useState } from "react";
import AppCard from "../Homes/Home";

const Apps = () => {
  const apps = useLoaderData();
  const [query, setQuery] = useState("");

  const filteredApps = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q === "") return apps || [];
    return (apps || []).filter((app) =>
      app.title.toLowerCase().includes(q)
    );
  }, [apps, query]);

  return (
    <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Our All Applications</h1>
        <p className="text-gray-500 mt-2">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div className="text-lg font-semibold">({filteredApps.length}) Apps Found</div>
        <input
          aria-label="search apps"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search Apps"
          className="w-full md:w-1/3 border border-gray-300 rounded-lg px-4 py-2 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
        />
      </div>

      {filteredApps.length === 0 ? (
        <div className="text-center py-20 text-gray-500">No App Found</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
