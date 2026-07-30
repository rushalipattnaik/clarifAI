function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5">

      <h1 className="text-3xl font-bold text-indigo-400">
        ClarifAI
      </h1>

      <button
        className="rounded-lg bg-indigo-600 px-5 py-2 text-white transition hover:bg-indigo-700"
      >
        GitHub
      </button>

    </nav>
  );
}

export default Navbar;