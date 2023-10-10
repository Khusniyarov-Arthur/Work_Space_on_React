import React from "react";
import style from "./AddVacancy.module.css";
import classNames from "classnames";

export const AddVacancy = () => {
  return (
    <section className={style.vacancy}>
      <h1 className={style.vacancy__title}>Создай свою вакансию</h1>

      <form onSubmit={(e) => {}}>
        <div className={classNames(style.vacancy__file, style.file)}>
          <div className={style.file__wrap_preview}>
            <img
              className={style.file__preview}
              src="#"
              alt="img preview"
            ></img>
          </div>

          <div className={style.file__wrap_btn}>
            <label className={style.file__btn} for="logo">
              + загрузить лого
            </label>
            <input
              type="file"
              name="logo"
              id="logo"
              className={style.file__input}
              accept="image/png, image/jpeg,"
              required
            ></input>
          </div>
        </div>

        <fieldset className={style.vacancy__fieldset}>
          <div className={style.vacancy__wpar_input}>
            <label for="company" className={style.vacancy__label}>
              Название компании
            </label>

            <input
              type="text"
              name="company"
              id="company"
              placeholder="Например: MICROSOFT"
              className={style.vacancy__input}
              required
            ></input>
          </div>

          <div className={style.vacancy__wpar_input}>
            <label for="title" className={style.vacancy__label}>
              Название вакансии
            </label>

            <input
              type="text"
              name="title"
              id="title"
              placeholder="Например: Frontend-разработчик"
              className={style.vacancy__input}
            ></input>
          </div>

          <div className={style.vacancy__wpar_input}>
            <label for="salary" className={style.vacancy__label}>
              Заработная плата, руб/мес
            </label>

            <input
              type="number"
              name="salary"
              id="salary"
              placeholder="80 000"
              className={style.vacancy__input}
            ></input>
          </div>

          <div className={style.vacancy__wpar_input}>
            <label for="location" className={style.vacancy__label}>
              Город
            </label>

            <input
              type="text"
              name="location"
              id="location"
              placeholder="Например: Москва"
              className={style.vacancy__input}
            ></input>
          </div>

          <div className={style.vacancy__wpar_input}>
            <label for="email" className={style.vacancy__label}>
              E-mail
            </label>

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Добавьте e-mail для связи"
              className={style.vacancy__input}
            ></input>
          </div>
        </fieldset>

        <fieldset className={style.vacancy__fieldset_textarea}>
          <label for="description" className={style.vacancy__label}>
            Описание вакансии
          </label>

          <textarea
            type="text"
            name="description"
            id="description"
            placeholder="Добавьте всю необходимую для соискателя информацию"
            className={style.vacancy__textarea}
          ></textarea>
        </fieldset>

        <div className={style.filter__radio_btn}>
          <fieldset className={style.filter__fieldset}>
            <legend className={style.filter__legend}>Формат</legend>

            <label className={classNames(style.filter__label, style.radio)}>
              <input
                value="Офис"
                className={style.radio__input}
                type="radio"
                name="format"
              />
              Офис
            </label>

            <label className={classNames(style.filter__label, style.radio)}>
              <input
                value="Удаленный"
                className={style.radio__input}
                type="radio"
                name="format"
              />
              Удаленный
            </label>

            <label className={classNames(style.filter__label, style.radio)}>
              <input
                value="Гибкий"
                className={style.radio__input}
                type="radio"
                name="format"
              />
              Гибкий
            </label>
          </fieldset>

          <fieldset className={style.filter__fieldset}>
            <legend className={style.filter__legend}>Опыт работы</legend>

            <label className={classNames(style.filter__label, style.radio)}>
              <input
                value="Не важно"
                className={style.radio__input}
                type="radio"
                name="experience"
              />
              Не важно
            </label>

            <label className={classNames(style.filter__label, style.radio)}>
              <input
                value="Без опыта"
                className={style.radio__input}
                type="radio"
                name="experience"
              />
              Без опыта
            </label>

            <label className={classNames(style.filter__label, style.radio)}>
              <input
                value="От 1 года до 3-х лет"
                className={style.radio__input}
                type="radio"
                name="experience"
              />
              От 1 года до 3-х лет
            </label>

            <label className={classNames(style.filter__label, style.radio)}>
              <input
                value="От 3-х лет"
                className={style.radio__input}
                type="radio"
                name="experience"
              />
              От 3-х лет
            </label>
          </fieldset>

          <fieldset className={style.filter__fieldset}>
            <legend className={style.filter__legend}>Занятость</legend>

            <label className={classNames(style.filter__label, style.radio)}>
              <input
                value="Полная"
                className={style.radio__input}
                type="radio"
                name="type"
              />
              Полная
            </label>

            <label className={classNames(style.filter__label, style.radio)}>
              <input
                value="Частичная"
                className={style.radio__input}
                type="radio"
                name="type"
              />
              Частичная
            </label>

            <label className={classNames(style.filter__label, style.radio)}>
              <input
                value="Стажировка"
                className={style.radio__input}
                type="radio"
                name="type"
              />
              Стажировка
            </label>

            <label className={classNames(style.filter__label, style.radio)}>
              <input
                value="Проектная работа"
                className={style.radio__input}
                type="radio"
                name="type"
              />
              Проектная работа
            </label>
          </fieldset>
        </div>

        <div className={style.filter__btn_wrap}>
          <button className={style.filter__btn_success} type="submit">
            Добавить вакансию
          </button>
          <div className={style.filter__error}>
            <p className={style.filter__error_message}>
              Ошибка. Заполните все поля
            </p>
          </div>
        </div>
      </form>
    </section>
  );
};
