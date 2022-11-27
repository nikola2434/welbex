import Link from "next/link";
import { FC } from "react";
import { IDataNavigation } from "../Navigation.interface";
import style from "./NavigationItem.module.scss";

const NavigationItem: FC<IDataNavigation> = ({ link, title }) => {
  return (
    <div className={style.nav}>
      <Link href={link}>
        <div>{title}</div>
      </Link>
    </div>
  );
};

export default NavigationItem;
