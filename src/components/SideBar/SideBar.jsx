import navigation from "./navigation";
import { NavLink } from "react-router-dom";
import s from "./SideBar.module.scss";

export default function SideBar() {
  return (
    <aside className={s.container}>
      <h1>
        <NavLink to="/" className={s.logo}>
          Logo<span>FX</span>
        </NavLink>
      </h1>
      <nav className={s.navigation}>
        <ul className={s.navigation__list}>
          {navigation.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.rout}
                className={({ isActive }) =>
                  isActive
                    ? `${s.navigation__link_active} ${s.navigation__link}`
                    : s.navigation__link
                }
              >
                <svg>
                  <use href={`/sprite.svg#${item.icon}`}></use>
                </svg>
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
