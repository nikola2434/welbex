import { FC } from "react";

import ContactsFooter from "./ContactsFooter/ContactsFooter";
import style from "./footer.module.scss";
import Note from "./Note/Note";
import Section from "./Section/Section";
import { sectionData } from "./Section/section.data";

const Footer: FC = () => {
  return (
    <>
      <div className={style.footer}>
        <div className={style.container_menu}>
          {sectionData.map((item, i) => (
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
