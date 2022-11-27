import { FC, ReactNode, useEffect, useState } from "react";
import style from "./MainProvider.module.scss";

const MainProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else
    return (
      <div className={style.app}>
        <div className={style.purple_light}></div>
        <div className={style.red_light}></div>
        <div className={style.red_ball_big}></div>
        <div className={style.red_ball_small}></div>
        <div className={style.purple_ball}></div>
        <div className={style.container}>{children}</div>
      </div>
    );
};

export default MainProvider;
