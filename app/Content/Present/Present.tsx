import { FC } from "react";
import Button from "./Button/Button";
import { presentData } from "./dataPresent.data";
import style from "./Present.module.scss";
import PresentItem from "./PresentItem/PresentItem";
import title from "../../../public/text.png";
import title_mobile from "../../../public/text2.png";
import Image from "next/image";
import { useMatchMedia } from "../../hooks/useMatchMedia";
import { dataPresentMobile } from "./dataPresentMobile";
import { PresentItemMobile } from "./PresentItemMobile/PresentItemMobile";

const Present: FC = () => {
  const { isTablet, isMobile, isDesktop } = useMatchMedia();
  return (
    <div className={style.present}>
      <div className={style.title}>
        {!isMobile ? (
          <Image src={title_mobile} draggable={false} alt="" />
        ) : (
          <Image src={title} alt="" draggable={false} />
        )}
      </div>
      <div className={style.container}>
        {isMobile ? (
          <>
            {presentData.map((item) => (
              <PresentItem
                title={item.title}
                description={item.description}
                key={item.description}
              />
            ))}
          </>
        ) : (
          <>
            {dataPresentMobile.map((item, i) => (
              <PresentItemMobile title={item.title} key={item.title + i} />
            ))}
          </>
        )}
      </div>
      <div className={style.container_button}>
        <Button>Получить консультацию</Button>
      </div>
    </div>
  );
};

export default Present;
