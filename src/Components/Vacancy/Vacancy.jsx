import React from "react";
import style from "./Vacancy.module.css";
// import { API_URL } from "";

export const Vacancy = () => {
  let vacancy = {
    id: "lkxsnh8av9pk5a",
    title: "Графический дизайнер",
    company: "Creative People",
    description:
      "Привет. Мы в CreativePeople ищем middle графического дизайнера в свою дизайн команду. Удаленно, из любой точки нашей страны, где у вас будет хороший интернет. Опыт работы в разработке логотипов, фирменных стилей обязателен.\nУ нас в портфолио много крупных российских компаний, с некоторыми мы работаем уже много лет и делаем самые разные проекты, от сайтов до мобильных приложений.",
    email: "CreativePeople@gmail.com",
    salary: "110000",
    type: "проектная работа",
    format: "гибкий",
    experience: "от 1 года до 3-х лет",
    location: "Москва",
    logo: "img/lkxsnh8av9pk5a.png",
  };

  return (
    <>
      <li className={style.item}>
        <article className={style.vacancy} tabIndex="0" data-id={vacancy.id}>
          <img
            src={`https://workspace-methed.vercel.app/${vacancy.logo}`}
            alt={`Логотип компании ${vacancy.company}`}
            className={style.img}
          />
          <p className={style.company}>{vacancy.company}</p>
          <h3 className={style.title}>{vacancy.title}</h3>
          <ul className={style.fields}>
            <li className={style.field}>
              от {parseInt(vacancy.salary).toLocaleString()}₽
            </li>
            <li className={style.field}>{vacancy.format}</li>
            <li className={style.field}>{vacancy.type}</li>
            <li className={style.field}>{vacancy.experience}</li>
          </ul>
        </article>
      </li>

      <li className={style.item}>
        <article className={style.vacancy} tabIndex="0" data-id={vacancy.id}>
          <img
            src={`https://workspace-methed.vercel.app/${vacancy.logo}`}
            alt={`Логотип компании ${vacancy.company}`}
            className={style.img}
          />
          <p className={style.company}>{vacancy.company}</p>
          <h3 className={style.title}>{vacancy.title}</h3>
          <ul className={style.fields}>
            <li className={style.field}>
              от {parseInt(vacancy.salary).toLocaleString()}₽
            </li>
            <li className={style.field}>{vacancy.format}</li>
            <li className={style.field}>{vacancy.type}</li>
            <li className={style.field}>{vacancy.experience}</li>
          </ul>
        </article>
      </li>

      <li className={style.item}>
        <article className={style.vacancy} tabIndex="0" data-id={vacancy.id}>
          <img
            src={`https://workspace-methed.vercel.app/${vacancy.logo}`}
            alt={`Логотип компании ${vacancy.company}`}
            className={style.img}
          />
          <p className={style.company}>{vacancy.company}</p>
          <h3 className={style.title}>{vacancy.title}</h3>
          <ul className={style.fields}>
            <li className={style.field}>
              от {parseInt(vacancy.salary).toLocaleString()}₽
            </li>
            <li className={style.field}>{vacancy.format}</li>
            <li className={style.field}>{vacancy.type}</li>
            <li className={style.field}>{vacancy.experience}</li>
          </ul>
        </article>
      </li>

      <li className={style.item}>
        <article className={style.vacancy} tabIndex="0" data-id={vacancy.id}>
          <img
            src={`https://workspace-methed.vercel.app/${vacancy.logo}`}
            alt={`Логотип компании ${vacancy.company}`}
            className={style.img}
          />
          <p className={style.company}>{vacancy.company}</p>
          <h3 className={style.title}>{vacancy.title}</h3>
          <ul className={style.fields}>
            <li className={style.field}>
              от {parseInt(vacancy.salary).toLocaleString()}₽
            </li>
            <li className={style.field}>{vacancy.format}</li>
            <li className={style.field}>{vacancy.type}</li>
            <li className={style.field}>{vacancy.experience}</li>
          </ul>
        </article>
      </li>

      <li className={style.item}>
        <article className={style.vacancy} tabIndex="0" data-id={vacancy.id}>
          <img
            src={`https://workspace-methed.vercel.app/${vacancy.logo}`}
            alt={`Логотип компании ${vacancy.company}`}
            className={style.img}
          />
          <p className={style.company}>{vacancy.company}</p>
          <h3 className={style.title}>{vacancy.title}</h3>
          <ul className={style.fields}>
            <li className={style.field}>
              от {parseInt(vacancy.salary).toLocaleString()}₽
            </li>
            <li className={style.field}>{vacancy.format}</li>
            <li className={style.field}>{vacancy.type}</li>
            <li className={style.field}>{vacancy.experience}</li>
          </ul>
        </article>
      </li>

      <li className={style.item}>
        <article className={style.vacancy} tabIndex="0" data-id={vacancy.id}>
          <img
            src={`https://workspace-methed.vercel.app/${vacancy.logo}`}
            alt={`Логотип компании ${vacancy.company}`}
            className={style.img}
          />
          <p className={style.company}>{vacancy.company}</p>
          <h3 className={style.title}>{vacancy.title}</h3>
          <ul className={style.fields}>
            <li className={style.field}>
              от {parseInt(vacancy.salary).toLocaleString()}₽
            </li>
            <li className={style.field}>{vacancy.format}</li>
            <li className={style.field}>{vacancy.type}</li>
            <li className={style.field}>{vacancy.experience}</li>
          </ul>
        </article>
      </li>
    </>
  );
};
