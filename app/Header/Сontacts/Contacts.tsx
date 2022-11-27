import { FC } from "react";
import { contactsData } from "./contacts.data";
import style from "./Contacts.module.scss";
import ContactsItem from "./ContactsItem/ContactsItem";

const Contacts: FC = () => {
  return (
    <div className={style.contacts}>
      <div className={style.phone}>+7 555-55-55</div>
      {contactsData.map((item) => (
        <ContactsItem item={item} key={item.alt} />
      ))}
    </div>
  );
};

export default Contacts;
