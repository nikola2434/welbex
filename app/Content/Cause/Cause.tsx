import { FC } from "react";

import style from "./Cause.module.scss";

const Cause: FC = () => {
  return (
    <>
      <div className={style.cause}>
        <div className={style.header}>Зарабатывайте больше</div>
        <div className={style.name}>c WELBEX</div>
        <div className={style.description}>
          Развиваем и контролируем продажи за вас
        </div>
      </div>
    </>
  );
};

export default Cause;
