import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#d6e6ff] shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-custom font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Nest</span>
            <span className="text-slate-700">Quest</span>
          </h1>
        </Link>
        <form className="bg-slate-100  p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-slate-700 font-custom focus:outline-none w-24 sm:w-64 "
          />
          <FaSearch className="text-slate-700" />
        </form>

        <ul className="flex gap-4">
          <Link to="/">
            <li className="font-custom font-semibold hidden sm:inline text-slate-700 hover:opacity-80">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="font-custom font-semibold hidden sm:inline text-slate-700 hover:opacity-80">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="font-custom font-semibold text-slate-700 hover:opacity-80">
              Sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
