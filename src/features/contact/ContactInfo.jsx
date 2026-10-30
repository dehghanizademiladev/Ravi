import ContactInfoCard from "./ContactInfoCard";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
} from "react-icons/fi";

function ContactInfo() {
  const contactItems = [
    {
      id: 1,
      icon: FiPhone,
      title: "شماره تماس",
      value: "۰۳۵-XXXXXXX",
      description: "شنبه تا پنجشنبه",
    },
    {
      id: 2,
      icon: FiMail,
      title: "ایمیل",
      value: "info@ravi-book.ir",
      description: "پاسخگویی در کوتاه‌ترین زمان",
    },
    {
      id: 3,
      icon: FiMapPin,
      title: "آدرس فروشگاه",
      value: "مهریز، یزد",
      description: "فروشگاه کتاب راوی",
    },
    {
      id: 4,
      icon: FiClock,
      title: "ساعات پاسخگویی",
      value: "۹ تا ۲۱",
      description: "شنبه تا پنجشنبه",
    },
  ];

  return (
    <section className="-mt-8 relative z-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {contactItems.map((item) => (
          <ContactInfoCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default ContactInfo;