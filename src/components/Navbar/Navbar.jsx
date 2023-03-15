import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import "./Navbar.css";
import NavbarLinkPartial from "../../partials/NavbarLinkPartial";
import LinkClass from "../../classes/LinkClass";
import NavBarLinkComponent from "./NavBarLinkComponent";

const linksArr = [
  new LinkClass("/", "Home"),
  new LinkClass("/aboutuspage", "About us"),
  new LinkClass("/contactuspage", "Contact us"),
  new LinkClass("/statichomepage", "Static Home"),
];

const authLinks = [
  new LinkClass("/registerpage", "Register"),
  new LinkClass("/loginpage", "Login"),
];

const Navbar = ({ isDark }) => {
  const isLoggedIn = useSelector((state) => state.authStore.isLoggedIn);
  const userInfo = useSelector((state) => state.authStore.userInfo);
  const dispatch = useDispatch();
  const handleLogoutClick = () => {
    // console.log("handleLogoutClick");
    dispatch(authActions.logout());
  };
  return (
    <nav
      className={`navbar ${
        isDark ? "bg-primary" : ""
      } navbar-expand-lg bg-body-tertiary`}
    >
      <div className="container-fluid">
        <NavbarLinkPartial
          className={`navbar-brand ${isDark ? "nav-item-light" : ""}`}
          to="/"
          activeClassName="redText"
        >
          Navbar
        </NavbarLinkPartial>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {linksArr.map((item) => {
              return (
                <NavBarLinkComponent
                  key={item.children + Date.now()}
                  isDark={isDark}
                  to={item.to}
                >
                  {item.children}
                </NavBarLinkComponent>
                // <li className="nav-item" key={item.children + Date.now()}>
                //   <NavbarLinkPartial
                //     className={`nav-link ${isDark ? "nav-item-light" : ""}`}
                //     activeClassName="active"
                //     to={item.to}
                //   >
                //     {item.children}
                //   </NavbarLinkPartial>
                // </li>
              );
            })}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className={`btn ${
                isDark ? "btn-outline-light" : "btn-outline-primary"
              }`}
              type="submit"
            >
              Search
            </button>
          </form>
          <ul className="navbar-nav mb-2 mb-lg-0">
            {isLoggedIn
              ? [
                  <NavBarLinkComponent
                    key={"/profile" + Date.now()}
                    isDark={isDark}
                    to="/profile"
                  >
                    {userInfo.name}
                  </NavBarLinkComponent>,
                  <NavBarLinkComponent
                    key={"/logout" + Date.now()}
                    isDark={isDark}
                    to="/loginpage"
                    onClick={handleLogoutClick}
                  >
                    Logout
                  </NavBarLinkComponent>,
                ]
              : authLinks.map((item) => {
                  return (
                    <NavBarLinkComponent
                      key={item.children + Date.now()}
                      isDark={isDark}
                      to={item.to}
                    >
                      {item.children}
                    </NavBarLinkComponent>
                  );
                })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
