import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import logo from "../../../public/Vector.png";
import title from "../../../public/Vector (1).png";
import style from "./Logo.module.scss";

const Logo: FC = () => {
  return (
    <div className={style.logo}>
      <Link href="/" className={style.image_logo}>
        <Image src={logo} alt="welbex" draggable={false} />
        <Image src={title} alt="welbex" draggable={false} />
      </Link>
      <div className={style.description}>
        крупный интегратор CRM в Росcии и ещё 8 странах
      </div>
    </div>
  );
};

export default Logo;
