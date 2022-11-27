import { FC } from "react";
import Cause from "./Cause/Cause";
import style from "./Content.module.scss";
import Present from "./Present/Present";

const Content: FC = () => {
  return (
    <div className={style.content}>
      <Cause />
      <Present />
    </div>
  );
};

export default Content;
