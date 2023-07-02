import styles from './Footer.module.css'
import { Icon } from '@iconify/react'
const Footer = () => {
  return (
    <footer className={styles.wrapper}>
        <div className={styles.content}>
        <div className={styles.logoAndTime}>
            <img src="" alt="MEGASTORE" />
            <p>Пн-Нд 09:00-20:00</p>
        </div>
        <div className={styles.info}>
            <ul>Інформація про компанію
                <li><a href="#">Про нас</a></li>
                <li><a href="#">Умови використання сайту</a> </li>
                <li><Icon className={styles.icon} icon={"fluent:call-12-filled"}/> <a href="tel:+380939475397">+380 939 475 397</a></li>
                <li><Icon className={styles.icon} icon={"uiw:mail"}/> <a href="mailto:megamarket@market.com">megamarket@market.com</a></li>
            </ul>
        </div>
        <div className={styles.deliveryAndPayment}>
            <ul> Доставка та оплата
                <li><a href="#">Гарантія</a></li>
                <li><a href="#">Повернення товару</a></li>
            </ul>
        </div>
        </div>
        <div className={styles.license}>
           <p>Розробка Team Challenge 2023 Усі права захищені.</p> 
        </div>
    </footer>
  )
}

export default Footer