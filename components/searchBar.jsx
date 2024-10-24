"use state"
function SearchBar({ close }) {
  return (
    <div className="w-full absolute z-20  py-3">
      <div className=" bg-slate-50 relative h-12 my-5">
        <input
          type="search"
          placeholder="Search Your Chats"
          className="w-full outline-none shadow-md px-2 h-full rounded-xl"
        />

        <span className="absolute right-3 top-3 " onClick={() => close(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>

        </span>
      </div>
    </div>
  );
}

export default SearchBar;
