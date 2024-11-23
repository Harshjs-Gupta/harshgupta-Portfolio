import "@/style/home.css";

function Navbar() {
  return (
    <div className="items-center justify-between w-full px-2 nav_bar sm:flex">
      <span className="portfolio">Portfolio.</span>
      <div className="option-container">
        <a href="#Home-page" className="nav_links">
          Home
        </a>
        <a href="#Service-page" className="nav_links">
          Services
        </a>
        <a href="#Resume-page" className="nav_links">
          Resume
        </a>
        <a href="#Project-page" className="nav_links">
          Projects
        </a>
        <a href="#Contact-page" className="nav_links">
          Contact
        </a>
      </div>
    </div>
  );
}
export default Navbar;
