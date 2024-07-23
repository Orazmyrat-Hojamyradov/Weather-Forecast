import "../styles/Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="icons/logo.svg" alt="weather logo" />
      </div>
      <div className="input-box">
        <input type="text" className="input" placeholder="Search Location..." />
        <img className="search-icon" src="icons/fa_search.svg" alt="search-icon" />
      </div>
    </div>
  );
}
