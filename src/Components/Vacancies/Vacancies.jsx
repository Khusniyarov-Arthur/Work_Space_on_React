import React, { useEffect, useState } from "react";
import { Vacancy } from "../Vacancy/Vacancy";
import { Filter } from "../Filter/Filter";
import style from "./Vacancies.module.css";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { getVacancies } from "../../store/vacanciesSlice";
import { Loader } from "../../UI/Loader";
import { getLocations } from "../../store/locationsSlice";

export const Vacancies = () => {
  const arrForRepeatLoader = " ".repeat(12).split("");
  const [toogleFilter, setToogleFilter] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.vacanciesReducer.vacancies.vacancies
  );

  useEffect(() => {
    dispatch(getVacancies());
    dispatch(getLocations());
  }, []);

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
            {data ? (
              <ul className={style.list}>
                {data.map((item) => (
                  <Vacancy key={item.id} card={item} />
                ))}
              </ul>
            ) : (
              <ul className={style.list}>
                {arrForRepeatLoader.map((i, index) => (
                  <li className={style.item} key={index}>
                    <Loader />
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </>
  );
};
