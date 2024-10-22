import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={s.nav}>
      <NavLink className={s.navLink} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={s.navLink} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
