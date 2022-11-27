import { FC } from "react";
import style from "./PresentItemMobile.module.scss";

export const PresentItemMobile: FC<{ title: string }> = ({ title }) => {
  return (
    <div className={style.item}>
      <div className={style.line}></div>
      <div className={style.title}>{title}</div>
    </div>
  );
};
