import React, { useEffect, useState } from "react";
import style from "./AddVacancy.module.css";
import classNames from "classnames";
import { sendVacancy } from "../../utils/sendVacancy";
import { Controller, useForm } from "react-hook-form";

export const AddVacancy = () => {
  const [preview, setPreview] = useState("");

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    getValues,
    control,
    reset,
    watch,
  } = useForm({ mode: "all" });

  const watchLogo = watch("logo");

  useEffect(() => {
    if (watchLogo === undefined) return;
    if (watchLogo[0]) {
      const previewUrl = URL.createObjectURL(watchLogo[0]);
      setPreview(previewUrl);
    }
  }, [watchLogo]);

  const handlePreviewImg = (e) => {
    e.preventDefault();
    if (e.target.files.length > 0) {
      const previewUrl = URL.createObjectURL(e.target.files[0]);
      setPreview(previewUrl);
    }
  };

  const addNewVacancy = () => {
    const formData = new FormData();
    const data = getValues();
    data.logo = data.logo[0];
    for (const key in data) {
      formData.append(key, data[key]);
    }

    sendVacancy(formData);
    reset();
  };

  return (
    <section className={style.vacancy}>
      <h1 className={style.vacancy__title}>Создай свою вакансию</h1>
      <form onSubmit={handleSubmit(addNewVacancy)}>
        <div className={classNames(style.vacancy__file, style.file)}>
          <div
            className={
              !preview
                ? style.file__wrap_preview
                : style.file__wrap_preview_current_img
            }
          >
            <img className={style.file__preview} src={preview} alt=""></img>
            {errors.logo && (
              <p className={style.vacancy__logo_error}>{errors.logo.message}</p>
            )}
          </div>

          <div className={style.file__wrap_btn}>
            <label className={style.file__btn} htmlFor="logo">
              + загрузить лого
            </label>
            <input
              onChange={handlePreviewImg}
              type="file"
              name="logo"
              id="logo"
              className={style.file__input}
              accept="image/png, image/jpeg,"
              {...register("logo", { required: "Необходимо добавить логотип" })}
            ></input>
          </div>
        </div>

        <fieldset className={style.vacancy__fieldset}>
          <div className={style.vacancy__wpar_input}>
            <label htmlFor="company" className={style.vacancy__label}>
              Название компании
            </label>

            <input
              type="text"
              name="company"
              id="company"
              placeholder="Например: MICROSOFT"
              className={style.vacancy__input}
              {...register("company", {
                required: "Введите название компании",
              })}
            ></input>
            {errors.company && (
              <p className={style.vacancy__input_error}>
                {errors.company.message}
              </p>
            )}
          </div>

          <div className={style.vacancy__wpar_input}>
            <label htmlFor="title" className={style.vacancy__label}>
              Название вакансии
            </label>

            <input
              type="text"
              name="title"
              id="title"
              placeholder="Например: Frontend-разработчик"
              className={style.vacancy__input}
              {...register("title", {
                required: "Введите название вакансии",
              })}
            ></input>
            {errors.title && (
              <p className={style.vacancy__input_error}>
                {errors.title.message}
              </p>
            )}
          </div>

          <div className={style.vacancy__wpar_input}>
            <label htmlFor="salary" className={style.vacancy__label}>
              Заработная плата, руб/мес
            </label>

            <input
              type="text"
              name="salary"
              id="salary"
              placeholder="80 000"
              className={style.vacancy__input}
              {...register("salary", {
                required: "Введите заработную плату ",
                pattern: {
                  value: /^\d+$/,
                  message: "Введите число",
                },
              })}
            ></input>
            {errors.salary && (
              <p className={style.vacancy__input_error}>
                {errors.salary.message}
              </p>
            )}
          </div>

          <div className={style.vacancy__wpar_input}>
            <label htmlFor="location" className={style.vacancy__label}>
              Город
            </label>

            <input
              type="text"
              name="location"
              id="location"
              placeholder="Например: Москва"
              className={style.vacancy__input}
              {...register("location", {
                required: "Введите название города",
              })}
            ></input>
            {errors.location && (
              <p className={style.vacancy__input_error}>
                {errors.location.message}
              </p>
            )}
          </div>

          <div className={style.vacancy__wpar_input}>
            <label htmlFor="email" className={style.vacancy__label}>
              E-mail
            </label>

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Добавьте e-mail для связи"
              className={style.vacancy__input}
              {...register("email", {
                required: "Введите email адрес",
                pattern: {
                  value: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/,
                  message: "Введен не корректный email адрес",
                },
              })}
            ></input>
            {errors.email && (
              <p className={style.vacancy__input_error}>
                {errors.email.message}
              </p>
            )}
          </div>
        </fieldset>

        <fieldset className={style.vacancy__fieldset_textarea}>
          <label htmlFor="description" className={style.vacancy__label}>
            Описание вакансии
          </label>

          <textarea
            type="text"
            name="description"
            id="description"
            placeholder="Добавьте всю необходимую для соискателя информацию"
            className={style.vacancy__textarea}
            {...register("description", {
              required: "Введите описание вакансии",
            })}
          ></textarea>
          {errors.description && (
            <p className={style.vacancy__textarea_error}>
              {errors.description.message}
            </p>
          )}
        </fieldset>

        <div className={style.filter__radio_btn}>
          <fieldset className={style.filter__fieldset}>
            <legend className={style.filter__legend}>Формат</legend>
            {errors.format && (
              <p className={style.vacancy__radio_error}>
                {errors.format.message}
              </p>
            )}

            <label className={classNames(style.filter__label, style.radio)}>
              <Controller
                name="format"
                control={control}
                rules={{
                  required: { value: true, message: "Выберите формат" },
                }}
                render={({ field }) => (
                  <input
                    className={style.radio__input}
                    type="radio"
                    {...field}
                    value="Офис"
                  />
                )}
              />
              Офис
            </label>

            <label className={classNames(style.filter__label, style.radio)}>
              <Controller
                name="format"
                control={control}
                render={({ field }) => (
                  <input
                    className={style.radio__input}
                    type="radio"
                    {...field}
                    value="Удаленный"
                  />
                )}
              />
              Удаленный
            </label>

            <label className={classNames(style.filter__label, style.radio)}>
              <Controller
                name="format"
                control={control}
                render={({ field }) => (
                  <input
                    className={style.radio__input}
                    type="radio"
                    {...field}
                    value="Гибкий"
                  />
                )}
              />
              Гибкий
            </label>
          </fieldset>

          <fieldset className={style.filter__fieldset}>
            <legend className={style.filter__legend}>Опыт работы</legend>
            {errors.experience && (
              <p className={style.vacancy__radio_error}>
                {errors.experience.message}
              </p>
            )}
            <label className={classNames(style.filter__label, style.radio)}>
              <Controller
                name="experience"
                control={control}
                rules={{
                  required: { value: true, message: "Выберите опыт" },
                }}
                render={({ field }) => (
                  <input
                    className={style.radio__input}
                    type="radio"
                    {...field}
                    value="Не важно"
                  />
                )}
              />
              Не важно
            </label>

            <label className={classNames(style.filter__label, style.radio)}>
              <Controller
                name="experience"
                control={control}
                render={({ field }) => (
                  <input
                    className={style.radio__input}
                    type="radio"
                    {...field}
                    value="Без опыта"
                  />
                )}
              />
              Без опыта
            </label>

            <label className={classNames(style.filter__label, style.radio)}>
              <Controller
                name="experience"
                control={control}
                render={({ field }) => (
                  <input
                    className={style.radio__input}
                    type="radio"
                    {...field}
                    value="От 1 года до 3-х лет"
                  />
                )}
              />
              От 1 года до 3-х лет
            </label>

            <label className={classNames(style.filter__label, style.radio)}>
              <Controller
                name="experience"
                control={control}
                render={({ field }) => (
                  <input
                    className={style.radio__input}
                    type="radio"
                    {...field}
                    value="От 3-х лет"
                  />
                )}
              />
              От 3-х лет
            </label>
          </fieldset>

          <fieldset className={style.filter__fieldset}>
            <legend className={style.filter__legend}>Занятость</legend>
            {errors.type && (
              <p className={style.vacancy__radio_error}>
                {errors.type.message}
              </p>
            )}
            <label className={classNames(style.filter__label, style.radio)}>
              <Controller
                name="type"
                control={control}
                rules={{
                  required: { value: true, message: "Выберите занятость" },
                }}
                render={({ field }) => (
                  <input
                    className={style.radio__input}
                    type="radio"
                    {...field}
                    value="Полная"
                  />
                )}
              />
              Полная
            </label>

            <label className={classNames(style.filter__label, style.radio)}>
              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <input
                    className={style.radio__input}
                    type="radio"
                    {...field}
                    value="Частичная"
                  />
                )}
              />
              Частичная
            </label>

            <label className={classNames(style.filter__label, style.radio)}>
              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <input
                    className={style.radio__input}
                    type="radio"
                    {...field}
                    value="Стажировка"
                  />
                )}
              />
              Стажировка
            </label>

            <label className={classNames(style.filter__label, style.radio)}>
              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <input
                    className={style.radio__input}
                    type="radio"
                    {...field}
                    value="Проектная работа"
                  />
                )}
              />
              Проектная работа
            </label>
          </fieldset>
        </div>

        <div className={style.filter__btn_wrap}>
          <button
            className={style.filter__btn_success}
            type="submit"
            disabled={!isValid}
          >
            Добавить вакансию
          </button>
        </div>
      </form>
    </section>
  );
};
