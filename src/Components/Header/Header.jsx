import style from "./Header.module.css";
import logo from "./img/logo.svg";
export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <img className={style.logo} src={logo} alt="Логотип Work Space" />
        <a href="#vacancies" className={style.link}>
          Посмотреть вакансии
        </a>
      </div>
    </header>
  );
};
