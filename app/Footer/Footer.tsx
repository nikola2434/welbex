import { FC } from "react";
import { useMatchMedia } from "../hooks/useMatchMedia";

import ContactsFooter from "./ContactsFooter/ContactsFooter";
import style from "./footer.module.scss";
import Note from "./Note/Note";
import Section from "./Section/Section";
import { sectionData, sectionDataMobile } from "./Section/section.data";

const Footer: FC = () => {
  const { isMobile } = useMatchMedia();
  return (
    <>
      <div className={style.footer}>
        <div className={style.container_menu}>
          {isMobile
            ? sectionData.map((item, i) => (
                <div key={item.title + i}>
                  <Section item={item.item} title={item.title} />
                </div>
              ))
            : sectionDataMobile.map((item, i) => (
                <div key={item.title + i}>
                  <Section item={item.item} title={item.title} />
                </div>
              ))}
        </div>
        <ContactsFooter />
      </div>
      <Note />
    </>
  );
};

export default Footer;
