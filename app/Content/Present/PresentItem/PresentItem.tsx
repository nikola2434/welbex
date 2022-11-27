import { FC } from "react";
import { IPresentData } from "../present.interface";
import style from "./PresentItem.module.scss";

const PresentItem: FC<IPresentData> = ({ description, title }) => {
  return (
    <div className={style.item}>
      <div className={style.title}>{title}</div>
      <div className={style.description}>{description}</div>
    </div>
  );
};

export default PresentItem;
