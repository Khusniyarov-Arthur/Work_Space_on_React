import React, { useState } from "react";
import { Vacancy } from "../Vacancy/Vacancy";
import { Filter } from "../Filter/Filter";
import style from "./Vacancies.module.css";
import classNames from "classnames";

export const Vacancies = () => {
  const [toogleFilter, setToogleFilter] = useState(false);

  return (
    <>
      <div className={style.vacancies} id="vacancies">
        <div className={style.wrapper}>
          <button
            onClick={() => {
              setToogleFilter(!toogleFilter);
            }}
            className={
              toogleFilter
                ? classNames(style.filter_btn, style.filter_btn_active)
                : style.filter_btn
            }
          >
            Фильтр
          </button>

          <Filter toogleFilter={toogleFilter} />

          <section className={style.cards}>
            <h2 className={style.visabiliti_hidden}>Список вакансий</h2>
            <ul className={style.list}>
              <Vacancy />
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};
