import React from "react";
import style from "./Filter.module.css";
import classNames from "classnames";

export const Filter = ({ toogleFilter }) => {
  return (
    <section
      className={
        toogleFilter
          ? style.vacancies__filter
          : classNames(style.vacancies__filter, style.filter__visible)
      }
    >
      <h2 className={style.filter__title}>Фильтр</h2>
      <form className={style.filter__form}>
        <fieldset className={style.filter__fieldset}>
          <legend className={style.filter__legend}>Город</legend>

          <select name="city" id="city" className={style.filter__select}>
            <option value="">Выбрать город</option>
          </select>
        </fieldset>

        <fieldset className={style.filter__fieldset}>
          <legend className={style.filter__legend}>Заработная плата</legend>

          <div className={style.filter__range}>
            <input
              type="number"
              className={style.filter__input}
              placeholder="от"
              name="pay-from"
            />
            <input
              type="number"
              className={style.filter__input}
              placeholder="до"
              name="pay-to"
            />
          </div>
        </fieldset>

        <div className={style.filter__checkboxes}>
          <fieldset className={style.filter__fieldset}>
            <legend className={style.filter__legend}>Формат</legend>

            <label className={classNames(style.filter__label, style.checkbox)}>
              <input
                value="Офис"
                className={style.checkbox__input}
                type="checkbox"
                name="format"
              />
              Офис
            </label>

            <label className={classNames(style.filter__label, style.checkbox)}>
              <input
                value="Удаленный"
                className={style.checkbox__input}
                type="checkbox"
                name="format"
              />
              Удаленный
            </label>

            <label className={classNames(style.filter__label, style.checkbox)}>
              <input
                value="Гибкий"
                className={style.checkbox__input}
                type="checkbox"
                name="format"
              />
              Гибкий
            </label>
          </fieldset>

          <fieldset className={style.filter__fieldset}>
            <legend className={style.filter__legend}>Опыт работы</legend>

            <label className={classNames(style.filter__label, style.checkbox)}>
              <input
                value="Не важно"
                className={style.checkbox__input}
                type="checkbox"
                name="experience"
              />
              Не важно
            </label>

            <label className={classNames(style.filter__label, style.checkbox)}>
              <input
                value="Без опыта"
                className={style.checkbox__input}
                type="checkbox"
                name="experience"
              />
              Без опыта
            </label>

            <label className={classNames(style.filter__label, style.checkbox)}>
              <input
                value="От 1 года до 3-х лет"
                className={style.checkbox__input}
                type="checkbox"
                name="experience"
              />
              От 1 года до 3-х лет
            </label>

            <label className={classNames(style.filter__label, style.checkbox)}>
              <input
                value="От 3-х лет"
                className={style.checkbox__input}
                type="checkbox"
                name="experience"
              />
              От 3-х лет
            </label>
          </fieldset>

          <fieldset className={style.filter__fieldset}>
            <legend className={style.filter__legend}>Занятость</legend>

            <label className={classNames(style.filter__label, style.checkbox)}>
              <input
                value="Полная"
                className={style.checkbox__input}
                type="checkbox"
                name="type"
              />
              Полная
            </label>

            <label className={classNames(style.filter__label, style.checkbox)}>
              <input
                value="Частичная"
                className={style.checkbox__input}
                type="checkbox"
                name="type"
              />
              Частичная
            </label>

            <label className={classNames(style.filter__label, style.checkbox)}>
              <input
                value="Стажировка"
                className={style.checkbox__input}
                type="checkbox"
                name="type"
              />
              Стажировка
            </label>

            <label className={classNames(style.filter__label, style.checkbox)}>
              <input
                value="Проектная работа"
                className={style.checkbox__input}
                type="checkbox"
                name="type"
              />
              Проектная работа
            </label>
          </fieldset>

          <div className={style.filter__buttons}>
            <button className={style.filter__btn_success} type="submit">
              Применить
            </button>
            <button className={style.filter__btn_clear} type="reset">
              Очистить
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
