import DropdownListMenu from "./DropdownListMenu";
import Logo from "./Logo";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-col justify-between py-4 sm:flex-row gap-4 ">
        <Logo />
        <Searchbar />
        <DropdownListMenu />
      </div>
    </nav>
  );
};

export default Navbar;
