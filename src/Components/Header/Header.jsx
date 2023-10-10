import { Link, useParams } from "react-router-dom";
import style from "./Header.module.css";
import logo from "./img/logo.svg";
export const Header = () => {
  const { addvacancy } = useParams();
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <Link to="/">
          <img className={style.logo} src={logo} alt="Логотип Work Space" />
        </Link>

        <div className={style.btn_wrap}>
          {addvacancy && (
            <Link to="/" className={style.link}>
              Посмотреть вакансии
            </Link>
          )}

          {!addvacancy && (
            <Link to="addvacancy" className={style.add_vacaicy}>
              <span className={style.plus}>+</span> Добавить новую вакансию
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
