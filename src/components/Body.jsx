import bodyIcon from "../assets/bodyIcon.jpg";
import bodyIcon2 from "../assets/bodyIcon2.svg";
import bodyIcon3 from "../assets/bodyIcon3.svg";

export function Body() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1">
        <div className="flex justify-between items-center mx-4 mt-20 mb-8">
          <div className="my-20 mr-2">
            <h1 className="text-5xl font-meta-bold">
              Get started with
              <br /> MetaMask Portfolio
            </h1>
            <h3 className="my-8">
              With MetaMask installed, start enjoying the convenience of <br />
              tracking and managing your web3 everything, all in one place.
            </h3>
            <button className="bg-meta-blue rounded-3xl p-3.5 px-7 ">
              View Metamask Portfolio
            </button>
          </div>
          <div>
            <img src={bodyIcon} width={500} />
          </div>
        </div>
        <div className="grid place-items-center text-xs">
          LEARN MORE
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="4"
            stroke="currentColor"
            class="w-4 h-4 mt-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div className="flex justify-between items-center mx-4 mt-20 mb-8">
          <div className="my-20 mr-20">
            <h2 className="text-2xl font-meta-bold py-5">
              Buy, store, send and swap tokens
            </h2>
            <h3>
              Available as a browser extension and as a mobile <br /> app,
              MetaMask equips you with a key vault, secure <br /> login, token
              wallet, and token exchange—everything <br /> you need to manage
              your digital assets.
            </h3>
          </div>
          <div>
            <img src={bodyIcon2} width={425} />
          </div>
        </div>
        <div className="flex justify-between items-center mx-4 mt-20 mb-8">
          <div className="px-16">
            <img src={bodyIcon3} width={425} />
          </div>
          <div className="my-20 mr-20">
            <h2 className="text-2xl font-meta-bold py-5">
              Explore blockchain apps
            </h2>
            <h3>
              MetaMask provides the simplest yet most secure way <br />
              to connect to blockchain-based applications. You <br /> are always
              in control when interacting on the new <br /> decentralized web.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
