import NavbarLinkPartial from "../../partials/NavbarLinkPartial";

const NavBarLinkComponent = ({ isDark, to, children }) => {
  return (
    <li className="nav-item">
      <NavbarLinkPartial
        className={`nav-link ${isDark ? "nav-item-light" : ""}`}
        activeClassName="active"
        to={to}
      >
        {children}
      </NavbarLinkPartial>
    </li>
  );
};
export default NavBarLinkComponent;
