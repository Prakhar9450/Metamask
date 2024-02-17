export function Bluebar() {
  return (
    <div className="bg-meta-blue flex justify-center items-center font-meta-bold p-2.5 underline text-sm-2">
      <div className="">
        Discover MetaMask Portfolio today. Track and manage your web3 assets in
        one place!
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-3.5 h-4 ml-0.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
}
