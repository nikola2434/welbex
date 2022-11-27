import Image from "next/image";
import { FC } from "react";
import { IContactsData } from "../contacts.interface";
import style from "./Contacts.module.scss";

const ContactsItem: FC<{ item: IContactsData }> = ({ item }) => {
  return (
    <div className={style.contact}>
      <Image src={item.title} alt={item.alt} draggable={false} />
    </div>
  );
};

export default ContactsItem;
