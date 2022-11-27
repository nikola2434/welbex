import { IContactsData } from "./contacts.interface";
import tg from "../../../public/tg.png";
import phone from "../../../public/phone.png";
import whatsapp from "../../../public/whatsapp.png";

export const contactsData: IContactsData[] = [
  { title: tg, alt: "telegram" },
  {
    title: phone,
    alt: "phone",
  },
  {
    title: whatsapp,
    alt: "whatsapp",
  },
];
