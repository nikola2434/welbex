import { FC } from "react";
import style from "./Note.module.scss";

const Note: FC = () => {
  return (
    <div className={style.note}>
      <div className={style.copyright}>©WELBEX 2022. Все права защищены.</div>
      <a href="#">Политика конфиденциальности</a>
    </div>
  );
};

export default Note;
