import Link from "next/link";
import { FC } from "react";
import { ISection } from "./section.interface";
import style from "./section.module.scss";

const Section: FC<ISection> = ({ item, title }) => {
  return (
    <div className={style.section}>
      <div className={style.title}>{title}</div>
      <div className={style.container}>
        {item.map((link, index) => (
          <Link href={link.link} key={link.link + index}>
            <div className={style.name_link}>{link.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Section;
