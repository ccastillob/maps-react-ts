import { ChangeEvent, useContext, useRef } from "react";
import { PlacesContext } from "../context";

export const SearchBar = () => {
  const debounceRef = useRef<number | null>(null);
  const { searchPlacesByTerm } = useContext(PlacesContext);

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      // console.log("Debounced value: ", event.target.value);
      searchPlacesByTerm(event.target.value);
    }, 300);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar lugar..."
        onChange={onQueryChanged}
      />
    </div>
  );
};
