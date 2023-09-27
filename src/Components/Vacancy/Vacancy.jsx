import React from "react";
import style from "./Vacancy.module.css";
import { API_URL } from "../../api/api";

export const Vacancy = ({ card }) => {
  return (
    <>
      <li className={style.item}>
        <article className={style.vacancy} tabIndex="0" data-id={card.id}>
          <img
            src={`${API_URL}${card.logo}`}
            alt={`Логотип компании ${card.company}`}
            className={style.img}
          />
          <p className={style.company}>{card.company}</p>
          <h3 className={style.title}>{card.title}</h3>
          <ul className={style.fields}>
            <li className={style.field}>
              от {parseInt(card.salary).toLocaleString()}₽
            </li>
            <li className={style.field}>{card.format}</li>
            <li className={style.field}>{card.type}</li>
            <li className={style.field}>{card.experience}</li>
          </ul>
        </article>
      </li>
    </>
  );
};
