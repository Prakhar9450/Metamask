import swag from "../assets/swag.webp";

export function Swag() {
  return (
    <div className="grid grid-cols-1 place-items-center bg-meta-gray-200 p-10">
      <div className="w-8/12 flex items-start">
        <div>
          <img src={swag} width={400} />
        </div>
        <div className="grid grid-cols-1 px-5 py-20">
          <h2 className="text-2xl font-semibold py-16">Shop MetaMask Swag</h2>
          <div>
            <button className="rounded-3xl border-solid border-2 border-white px-9 py-3 hover:text-meta-blue hover:border-meta-blue">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
