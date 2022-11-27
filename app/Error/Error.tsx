import Image from "next/image";
import { FC } from "react";
import style from "./error.module.scss";
import logo from "../../public/Vector.png";
import Link from "next/link";

const Error: FC = () => {
  return (
    <div className={style.error}>
      <Link href="/">
        <div className={style.logo}>WELBEX</div>
      </Link>
      <div className={style.title}>404 - Page note found :(</div>
    </div>
  );
};

export default Error;
