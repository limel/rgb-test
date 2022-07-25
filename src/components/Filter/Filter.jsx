import s from "./Filter.module.scss";
import { useState } from "react";

export default function Filter() {
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState("All Accounts");

  const handlerClick = (e) => {
    const string = e.target.textContent;
    setLabel(string);
  };

  return (
    <button
      aria-label="sorted grpah"
      type="button"
      className={active ? `${s.container} ${s.active}` : `${s.container}`}
      onClick={() => setActive(!active)}
    >
      <svg className={s.icon}>
        <use href="/sprite.svg#graph"></use>
      </svg>
      <span className={s.label}>{label}</span>
      <svg className={s.arrow}>
        <use href="/sprite.svg#arrow"></use>
      </svg>

      <ul className={s.optionsList}>
        <li className={s.optionsList__item} onClick={(e) => handlerClick(e)}>
          All Accounts
        </li>
        <li className={s.optionsList__item} onClick={(e) => handlerClick(e)}>
          One Account
        </li>
        <li className={s.optionsList__item} onClick={(e) => handlerClick(e)}>
          Two Account
        </li>
      </ul>
    </button>
  );
}
