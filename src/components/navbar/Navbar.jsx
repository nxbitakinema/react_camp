import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-col justify-between py-4 px-8 sm:flex-row gap-4">
        <Logo />
        <h1>search</h1>
        <h1>profile</h1>
      </div>
    </nav>
  );
};
export default Navbar;
