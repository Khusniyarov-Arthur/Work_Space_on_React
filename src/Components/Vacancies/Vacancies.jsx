import React, { useEffect, useRef, useState } from "react";
import { Vacancy } from "../Vacancy/Vacancy";
import { Filter } from "../Filter/Filter";
import style from "./Vacancies.module.css";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  getVacanciesRequest,
  vacanciesSlice,
} from "../../store/vacanciesSlice";
import { Loader } from "../../UI/Loader";
import { getLocations } from "../../store/locationsSlice";
import { API_URL, VACANCY_URL } from "../../api/api";

export const Vacancies = () => {
  const arrForRepeatLoader = " ".repeat(12).split("");
  const [toogleFilter, setToogleFilter] = useState(false);
  const dispatch = useDispatch();

  const data = useSelector((state) => state.vacanciesReducer.vacancies);
  const { currentPage, totalPages, totalVacancies } = useSelector(
    (state) => state.vacanciesReducer.pagination
  );

  const lastUrl = useSelector((state) => state.vacanciesReducer.lastUrl);

  const endList = useRef(null);

  const url = `${API_URL}${VACANCY_URL}`;

  const addPage = () => {
    if (currentPage < totalPages) {
      let page = currentPage + 1;
      const urlWithParams = new URL(lastUrl);

      urlWithParams.searchParams.set("page", page);
      urlWithParams.searchParams.set("limit", 12);
      dispatch(getVacanciesRequest(urlWithParams));
    }
  };

  useEffect(() => {
    if (!data) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          addPage();
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (endList.current) {
      observer.observe(endList.current);
    }
    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [[endList.current]]);

  useEffect(() => {
    dispatch(vacanciesSlice.actions.lastUrl(url));
    dispatch(vacanciesSlice.actions.clearState());
    dispatch(getVacanciesRequest(url));
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
            {data.length > 0 && totalVacancies !== 0 ? (
              <>
                <ul className={style.list}>
                  {data.map((item) => (
                    <Vacancy key={item.id} card={item} />
                  ))}
                  <li ref={endList} className={style.observer}></li>
                </ul>
              </>
            ) : totalVacancies === 0 ? (
              <li className={style.not_vacancies}>Таких вакансий нет</li>
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
