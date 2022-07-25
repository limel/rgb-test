import s from "./Features.module.scss";

export default function Features() {
  return (
    <ul className={s.container}>
      <li className={s.card}>
        <h2 className={s.card__title}>
          Thank you for opening an account with Kenmore Fx
        </h2>
        <p className={s.card__text}>
          Complete account management at your fingertips: from downloads,
          electronic deposits and withdrawals, to advanced partnership
          automation and analytics. Start by downloading our Trading Terminal
          for your computer and making a deposit.
        </p>
      </li>
      <li className={`${s.card} ${s.card_icon}`}>
        <h2 className={s.card__title}>Alerts</h2>
        <p className={s.card__text}>Its a good! You don’t have alerts</p>
        <button className={s.card__button}>Make a Deposit</button>
        <svg className={s.card__icon}>
          <use href="/sprite.svg#alert"></use>
        </svg>
      </li>
    </ul>
  );
}
