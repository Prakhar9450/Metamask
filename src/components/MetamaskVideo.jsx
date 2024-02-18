export function MetamaskVideo() {
  return (
    <div>
      <h2 className="text-2xl flex justify-center font-semibold m-10">
        What is MetaMask?
      </h2>
      <div className="flex justify-center m-10">
        <iframe
          width="992"
          height="560"
          src="https://www.youtube.com/embed/YVgfHZMFFFQ"
          title="What is MetaMask?"
          className="rounded-2xl"
        ></iframe>
      </div>
    </div>
  );
}
