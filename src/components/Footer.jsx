import logo from "../assets/logo.jpg";

export function Footer() {
  return (
    <div className=" bg-meta-gray-300 grid place-items-center py-14">
      <div className="w-8/12 grid grid-cols-1">
        <div className="pb-14">
          <img src={logo} width={175} />
        </div>
        <div className="grid grid-cols-3">
          <div>
            <h2 className="text-meta-orange text-xl pb-3">LEARN MORE</h2>
            <h5 className="text-xs cursor-pointer py-2">About</h5>
            <h5 className="text-xs cursor-pointer py-2">Developers</h5>
            <h5 className="text-xs cursor-pointer py-2">Download</h5>
            <h5 className="text-xs cursor- py-2">MetaMask Institutional</h5>
            <h5 className="text-xs cursor-pointer py-2">News</h5>
            <h5 className="text-xs cursor-pointer py-2">Security</h5>
          </div>
          <div>
            <h2 className="text-meta-orange text-xl pb-3">GET INVOLVED</h2>
            <h5 className="text-xs cursor-pointer py-2">Github</h5>
            <h5 className="text-xs cursor-pointer py-2">Gitcoin</h5>
            <h5 className="text-xs cursor-pointer py-2">Open Positions</h5>
            <h5 className="text-xs cursor-pointer py-2">Swag Shops</h5>
            <h5 className="text-xs cursor-pointer py-2">
              Press & Partnerships
            </h5>
          </div>
          <div>
            <h2 className="text-meta-orange text-xl pb-3">LEGAL</h2>
            <h5 className="text-xs cursor-pointer py-2">Privacy Policy</h5>
            <h5 className="text-xs cursor-pointer py-2">Terms of Use</h5>
            <h5 className="text-xs cursor-pointer py-2">
              Contributor License Agreement
            </h5>
            <h5 className="text-xs cursor-pointer">Site Map</h5>
          </div>
        </div>
        <div>
          <h5 className="text-xs pt-5">
            @2024 MetaMask • A Consensys Formation
          </h5>
        </div>
      </div>
    </div>
  );
}
