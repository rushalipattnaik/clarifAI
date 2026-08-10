import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-6 py-4">
      
      <Link
        to="/"
        className="text-2xl font-bold text-indigo-400"
      >
        ClarifAI
      </Link>

      <div className="flex items-center gap-3">

        <button
          className="rounded-lg border border-slate-700 px-4 py-2 text-slate-300 transition hover:bg-slate-800"
        >
          About
        </button>

        <Link
          to="/login"
          className="rounded-lg border border-indigo-500 px-4 py-2 text-indigo-400 transition hover:bg-indigo-500 hover:text-white"
        >
          Sign In
        </Link>

        <Link
          to="/signup"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700"
        >
          Sign Up
        </Link>

        <button
          onClick={() =>
            window.open("https://github.com/rushalipattnaik", "_blank")
          }
          className="rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700"
        >
          GitHub
        </button>

      </div>
    </nav>
  );
}

export default Navbar;