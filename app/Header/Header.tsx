import { FC } from "react";
import Logo from "./Logo/Logo";
import style from "./Header.module.scss";
import Navigation from "./Navigation/Navigation";
import Contacts from "./Сontacts/Contacts";

const Header: FC = () => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <Logo />
        <Navigation />
      </div>
      <Contacts />
    </div>
  );
};

export default Header;
