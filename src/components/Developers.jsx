export function Developers() {
  return (
    <div className="bg-meta-gray-300 grid grid-cols-1 place-items-center p-10">
      <h2 className="text-2xl font-semibold m-7">Developers</h2>
      <h4 className="text-sm">
        MetaMask is powered by a strong community from across the globe.
        Interested in contributing? Find out how and what to contribute using
        the
      </h4>
      <h4 className="text-sm">resources below.</h4>
      <div className="grid grid-cols-1 place-items-center text-base-2 my-7">
        <a className="flex items-center cursor-pointer p-5">
          Open Issues
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="currentColor"
            class="w-3 h-3 ml-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
        <a className="flex items-center cursor-pointer p-5">
          Open Bounties
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="currentColor"
            class="w-3 h-3 ml-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
        <a className="flex items-center cursor-pointer p-5">
          Documentation
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="currentColor"
            class="w-3 h-3 ml-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
        <a className="flex items-center cursor-pointer p-5">
          Contributing Guidelines
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="currentColor"
            class="w-3 h-3 ml-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
