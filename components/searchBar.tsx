function SearchBar() {
  return (
    <div className="w-full fixed bg-white z-20 px-5 py-3">
      <div className="relative h-12 my-5">
        <input
          type="search"
          placeholder="Search Your Chats"
          className="w-full bg-slate-100 outline-none px-2 h-full rounded-xl"
        />
        <span className="absolute right-3 top-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default SearchBar;
