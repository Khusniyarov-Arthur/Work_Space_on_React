import style from "./Footer.module.css";
import footerLogo from "./img/logo.svg";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.wrapper}>
        <img src={footerLogo} alt="Логотип Work Space" className={style.logo} />
        <p className={style.copyright}>© Work Space, 2023</p>
        <ul className={style.contacts}>
          <li className={style.contact}>
            Designer:
            <a href="#" className={style.link}>
              Anastasia Ilina
            </a>
          </li>

          <li className={style.contact}>
            Developer:
            <a href="#" className={style.link}>
              Khusniyarov Arthur
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
