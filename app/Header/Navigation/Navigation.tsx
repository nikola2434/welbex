import { FC } from "react";
import { navData } from "./Navigation.data";
import style from "./Navigation.module.scss";
import NavigationItem from "./NavigationItem/NavigationItem";

const Navigation: FC = () => {
  return (
    <div className={style.navigation}>
      {navData.map((item) => (
        <NavigationItem link={item.link} title={item.title} key={item.link} />
      ))}
    </div>
  );
};

export default Navigation;
