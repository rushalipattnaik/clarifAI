import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../services/api";

function ReportHistory() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadReports() {
      try {
        const response = await api.get("/reports/");

        setReports(response.data.reports || []);
      } catch (err) {
        console.error("Failed to load reports:", err);

        setError(
          err.response?.data?.detail ||
            "Unable to load reports."
        );
      } finally {
        setLoading(false);
      }
    }

    loadReports();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <p className="text-xl">
          Loading reports...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">

        <div className="flex flex-wrap items-center justify-between gap-4">

          <div>
            <h1 className="text-4xl font-bold">
              Report History
            </h1>

            <p className="mt-2 text-slate-400">
              Your previously generated SRS reports
            </p>
          </div>

          <Link
            to="/questions"
            className="rounded-lg bg-indigo-600 px-5 py-3 font-medium transition hover:bg-indigo-500"
          >
            New Report
          </Link>

        </div>

        {error && (
          <div className="mt-6 rounded-lg border border-red-800 bg-red-950/40 p-4 text-red-400">
            {error}
          </div>
        )}

        {!error && reports.length === 0 && (
          <div className="mt-10 rounded-xl border border-slate-700 bg-slate-900 p-8 text-center">

            <p className="text-slate-400">
              You haven't generated any reports yet.
            </p>

            <Link
              to="/questions"
              className="mt-5 inline-block rounded-lg bg-indigo-600 px-5 py-3 transition hover:bg-indigo-500"
            >
              Create Your First Report
            </Link>

          </div>
        )}

        <div className="mt-8 space-y-4">

          {reports.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-slate-700 bg-slate-900 p-6 shadow-lg"
            >

              <h2 className="text-xl font-semibold">
                {item.project}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Created:{" "}
                {new Date(item.created_at).toLocaleString()}
              </p>

              <Link
                to={`/reports/${item.id}`}
                className="mt-4 inline-block rounded-lg bg-indigo-600 px-4 py-2 transition hover:bg-indigo-500"
              >
                Open Report
              </Link>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default ReportHistory;