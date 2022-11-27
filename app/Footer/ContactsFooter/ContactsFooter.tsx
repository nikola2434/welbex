import Image from "next/image";
import { FC } from "react";
import style from "./ContactsFooter.module.scss";
import tg from "../../../public/tg.png";
import phone from "../../../public/phone.png";
import whatsapp from "../../../public/whatsapp.png";

const ContactsFooter: FC = () => {
  return (
    <div className={style.contacts_footer}>
      <div className={style.title}>контакты</div>
      <div className={style.phone}>+7 555 555-55-55</div>
      <div className={style.social_network}>
        <Image
          src={tg}
          alt="telegram"
          draggable={false}
          className={style.image}
        />
        <Image
          src={phone}
          alt="phone"
          draggable={false}
          className={style.image}
        />
        <Image
          src={whatsapp}
          alt="whatsapp"
          draggable={false}
          className={style.image}
        />
      </div>
      <div className={style.address}>Москва, Путевой проезд 3с1, к 902</div>
    </div>
  );
};

export default ContactsFooter;
