import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import "../styles/Search.scss";
import useLocations from "../api/LocationsAPI";
import useStore from "../store/store";

export default function Search() {
  const [q, setQ] = useState<string>("");
  const [dropdown, setDropdown] = useState<boolean>(false);

  const cityKey = useStore((state) => state.cityKey);
  const setKey = useStore((state) => state.setKey);

  const debouncedQ = useDebounce<string>(q);
  const { locationsQuery } = useLocations(cityKey, debouncedQ);

  const { data: locations, error, isLoading } = locationsQuery;

  function handleClick(locationKey: number) {
    setDropdown(false);
    setKey(locationKey);
  }

  return (
    <div className="dropdown" onClick={() => setDropdown(false)}>
      <div className="input-box">
        <input
          value={q}
          type="search"
          className="input"
          placeholder="Search..."
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
            {isLoading && <li className="location">Loading...</li>}
            {error && <li className="location">Error fetching locations</li>}
            {locations?.slice(0, 10).map((location) => (
              <li
                key={location.Key}
                className="location"
                onClick={() => handleClick(Number(location.Key))}
              >
                {location.LocalizedName}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
