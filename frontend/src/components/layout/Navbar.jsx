function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      <h1 className="text-3xl font-bold tracking-tight text-indigo-400">
        ClarifAI
      </h1>

      <div className="flex items-center gap-4">
        <button
          className="rounded-lg border border-slate-700 px-4 py-2 text-slate-300 transition hover:bg-slate-800"
        >
          About
        </button>

        <button
          className="rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700"
        >
          GitHub
        </button>
      </div>
    </nav>
  );
}

export default Navbar;