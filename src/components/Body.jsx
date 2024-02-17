import bodyIcon from "../assets/bodyIcon.jpg";

export function Body() {
  return (
    <div className="flex justify-center items-center mx-4 mt-20 mb-8">
      <div className="my-20 mr-2">
        <h1 className="text-5xl font-meta-bold">
          Get started with<h1></h1> MetaMask Portfolio
        </h1>
        <h3 className="my-8">
          With MetaMask installed, start enjoying the convenience{" "}
          <h3>
            of tracking and managing your web3 everything, all in one place.
          </h3>
        </h3>
        <button className="bg-meta-blue rounded-3xl p-3.5 px-7 ">
          View Metamask Portfolio
        </button>
      </div>
      <div>
        <img src={bodyIcon} width={500}></img>
      </div>
    </div>
  );
}
