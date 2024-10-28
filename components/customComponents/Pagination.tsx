export default function Pagination({
  postsPerPage,
  length,
  currentPage,
  setCurrentPage,
  showing,
}: {
  postsPerPage: number;
  length: number;
  currentPage: number;
  setCurrentPage: any;
  showing: number;
}) {
  const paginationNumbers = [];
  let total = Math.ceil(length / postsPerPage);
  for (let i = 1; i <= total; i++) {
    paginationNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-between mt-4 bg-white py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          onClick={() => currentPage !== 0 && setCurrentPage(currentPage - 1)}
          href="#"
          className="relative inline-flex items-center rounded-md border border-black-300 bg-white px-4 py-2 text-sm font-medium text-black-700 hover:bg-black-50"
        >
          Previous
        </a>
        <span
          className="relative ml-3 inline-flex items-center rounded-md border border-black-300 bg-white px-4 py-2 text-sm font-medium text-black-700 hover:bg-black-50"
          onClick={() =>
            currentPage !== length && setCurrentPage(currentPage + 1)
          }
        >
          Next
        </span>
      </div>

      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-black-700">
            Showing <span className="font-medium">{currentPage}</span> Out of{" "}
            <span className="font-medium">{total}</span>
          </p>
        </div>
        <div>
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          >
            <span className="relative inline-flex items-center rounded-l-md px-2 py-2 text-black-400 ring-1 ring-inset ring-black-300 hover:bg-black-50 focus:z-20 focus:outline-offset-0">
              <span
                className="sr-only"
                onClick={() =>
                  currentPage == 1
                    ? setCurrentPage(1)
                    : setCurrentPage(currentPage - 1)
                }
              >
                Previous
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                onClick={() =>
                  currentPage == 1
                    ? setCurrentPage(1)
                    : setCurrentPage(currentPage - 1)
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            {/* Current: "z-10 bg-black text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black", Default: "text-black-900 ring-1 ring-inset ring-black-300 hover:bg-black-50 focus:outline-offset-0" */}
            {paginationNumbers.map((pNumber: number, id) => (
              <span
                aria-current="page"
                className={`${
                  currentPage === pNumber ? "bg-black text-white" : ""
                } relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-black focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black select-none cursor-pointer`}
                key={id}
                onClick={() => setCurrentPage(pNumber)}
              >
                {pNumber}
              </span>
            ))}

            <span className="relative inline-flex items-center rounded-r-md px-2 py-2 text-black-400 hover:bg-black-50 focus:z-20 focus:outline-offset-0">
              <span
                className="sr-only"
                onClick={() =>
                  currentPage == total
                    ? setCurrentPage(1)
                    : setCurrentPage(currentPage + 1)
                }
              >
                Next
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                onClick={() =>
                  currentPage == total
                    ? setCurrentPage(1)
                    : setCurrentPage(currentPage + 1)
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </nav>
        </div>
      </div>
    </div>
  );
}
