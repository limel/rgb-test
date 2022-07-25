import s from "./Header.module.scss";
import Avatar from "./avatar.png";

export default function Header() {
  const user = {
    avatar: null, //replace null =>  Avatar
    name: "Boris Zhushman",
    position: "Retail",
  };

  const firstLetter = user.name.charAt(0).toUpperCase();

  return (
    <header className={s.container}>
      <menu className={s.actions}>
        <li>
          <button
            type="button"
            className={`${s.actions__button} ${s.actions__button_accent}`}
          >
            Go Live
          </button>
        </li>
        <li>
          <button type="button" className={s.actions__button}>
            <svg>
              <use href={`/sprite.svg#cloud`}></use>
            </svg>
            Download Terminal
          </button>
        </li>
        <li>
          <button type="button" className={s.actions__button}>
            <svg>
              <use href={`/sprite.svg#headset`}></use>
            </svg>
            Support
          </button>
        </li>
      </menu>
      <menu className={s.accountActions}>
        <li>
          <button
            type="button"
            aria-label="change theme"
            className={s.accountActions__button}
          >
            <svg>
              <use href={"/sprite.svg#theme-toggle"}></use>
            </svg>
          </button>
        </li>
        <li>
          <button
            type="button"
            aria-label="change language"
            className={s.accountActions__button}
          >
            <svg>
              <use href={"/sprite.svg#usa-flag"}></use>
            </svg>
          </button>
        </li>
        <li>
          <button
            type="button"
            aria-label="app notifications"
            className={s.accountActions__button}
          >
            <svg>
              <use href={"/sprite.svg#bell"}></use>
            </svg>
            <span className={s.accountActions__caption}>2</span>
          </button>
        </li>

        <li className={s.accountActions__profile}>
          <div className={s.accountActions__avatar}>
            {user.avatar ? (
              <img src={user.avatar} alt="avatar" />
            ) : (
              <span>{firstLetter}</span>
            )}
          </div>

          <div className={s.accountActions__info}>
            <span className={s.accountActions__name}>{user.name}</span>
            <span className={s.accountActions__position}>{user.position}</span>
          </div>
        </li>
      </menu>
    </header>
  );
}
