import styles from "./Footer.module.css";
import { Icon } from "@iconify/react";

const Footer = () => {
  const phoneIcon = <Icon className={styles.icon} icon={"fluent:call-12-filled"} />;
  const mailIcon = <Icon className={styles.icon} icon={"uiw:mail"} />;

  const informationList = [
    { label: "Про нас", href: "/about", icon: null },
    { label: "Умови використання сайту", href: "/terms", icon: null },
    { label: "+380 939 475 397", href: "tel:+380939475397", icon: phoneIcon },
    { label: "megamarket@market.com", href: "mailto:megamarket@market.com", icon: mailIcon },
  ];

  const deliveryList = [
    { label: "Гарантія", href: "/warranty" },
    { label: "Повернення товару", href: "/return" },
  ];

  return (
    <footer className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoAndTime}>
          <img src="" alt="MEGASTORE" />
          <p>Пн-Нд 09:00-20:00</p>
        </div>
        <div className={styles.info}>
          <ul>
            Інформація про компанію
            {informationList.map(({ label, href, icon }) => (
              <li key={href}>
                {icon} <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.deliveryAndPayment}>
          <ul>
            Доставка та оплата
            {deliveryList.map(({ label, href }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.license}>
        <p>Розробка Team Challenge 2023 Усі права захищені.</p>
      </div>
    </footer>
  );
};

export default Footer;
