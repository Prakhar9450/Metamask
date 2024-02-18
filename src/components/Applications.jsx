import aave from "../assets/apps/dapp-aave.webp";
import axieinfinity from "../assets/apps/dapp-axieinfinity.webp";
import compound from "../assets/apps/dapp-compound.webp";
import gitcoin from "../assets/apps/dapp-gitcoin.webp";
import maker from "../assets/apps/dapp-maker.webp";
import opensea from "../assets/apps/dapp-opensea.webp";
import rarible from "../assets/apps/dapp-rarible.webp";
import uniswap from "../assets/apps/dapp-uniswap.webp";

export function Applications() {
  return (
    <div className="bg-meta-light-gray grid grid-cols-1 place-items-center p-14">
      <h1 className="text-2xl font-semibold m-5">
        Your key to blockchain applications
      </h1>
      <h3>
        MetaMask is the leading self-custodial wallet. The safe and simple way
        to access blockchain applications and web3. Trusted by
      </h3>
      <h3>millions of users worldwide.</h3>
      <div className="w-8/12">
        <div className="grid grid-cols-4">
          <img src={aave} />
          <img src={axieinfinity} />
          <img src={compound} />
          <img src={gitcoin} />
          <img src={maker} />
          <img src={opensea} />
          <img src={rarible} />
          <img src={uniswap} />
        </div>
      </div>
    </div>
  );
}
