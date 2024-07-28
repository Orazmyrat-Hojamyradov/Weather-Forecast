import "../styles/Navbar.scss";
import Search from "./Search";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="icons/logo.svg" alt="weather logo" />
      </div>
      <Search />
    </div>
  );
}
