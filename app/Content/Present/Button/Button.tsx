import { FC, ReactNode } from "react";
import style from "./button.module.scss";

const Button: FC<{ children: ReactNode }> = ({ children }) => {
  return <button className={style.button}>{children}</button>;
};

export default Button;
