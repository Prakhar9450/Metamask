import cookieLogo from "../assets/cookieLogo.png";

export function CookiePreferences() {
  return (
    <div>
      <button className="fixed bottom-0 right-0 m-3">
        <img src={cookieLogo} width={40} />
      </button>
    </div>
  );
}
