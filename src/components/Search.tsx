import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import "../styles/Search.scss";
import useLocations from "../api/LocationsAPI";

export default function Search() {
  const [q, setQ] = useState<string>("");
  const [dropdown, setDropdown] = useState<boolean>(false);

  const debouncedQ = useDebounce<string>(q);
  const { locationsQuery } = useLocations(debouncedQ);

  const { data: locations, error, isLoading } = locationsQuery;

  function handleClick() {
    setDropdown(false);
  }

  return (
    <div className="dropdown" onClick={() => setDropdown(false)}>
      <div className="input-box">
        <input
          value={q}
          type="search"
          className="input"
          placeholder="Search Location..."
          onChange={(e) => {
            setQ(e.target.value);
            if (locations) setDropdown(true);
          }}
        />
        <img
          className="search-icon"
          src="icons/fa_search.svg"
          alt="search-icon"
        />
      </div>

      {dropdown && (
        <div className="dropdown-menu">
          <ul className="locations">
            {isLoading && <li>Loading...</li>}
            {error && <li>Error fetching locations</li>}
            {locations?.slice(0, 10).map((location: any) => (
              <li key={location.Key} className="location" onClick={handleClick}>
                {location.LocalizedName}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
