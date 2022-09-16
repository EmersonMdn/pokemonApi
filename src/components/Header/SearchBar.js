import { useState } from "react";
import { searchPokemon } from "../Pokemons/Pokemons";

function SearchBar() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    const data = await searchPokemon(search);
    console.log(data);
  };

  return (
    <div className="searchbar">
      <div>
        <input placeholder="Buscar pokemon" onChange={handleSearch} />
      </div>

      <div>
        <button onClick={handleSearchSubmit}>Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
