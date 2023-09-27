import React from "react";
import style from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.wrapper}>
        <h1 className={style.title}>Найди работу</h1>
        <span className={style.blue_text}>своей мечты</span>
      </div>
    </section>
  );
};
