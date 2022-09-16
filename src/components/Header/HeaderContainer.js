import "./Header.css";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
function HeaderContainer() {
  return (
    <div id="header">
      <NavBar />
      <SearchBar />
    </div>
  );
}

export default HeaderContainer;
