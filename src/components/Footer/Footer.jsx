import React from "react";
import styles from './index.module.scss';

function Footer() {
    const moveTo = (id) => {
        const elem = document.getElementById(id);
        elem.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    return (
      <div className={styles.footer}>
        <div className={styles.leftFooter}>
            <div className={styles.title}>Har<span>i</span>bo</div>
            <div className={styles.textLeft}>© 2024 Все права защищены</div>
        </div>

        <div className={styles.buttonFooter}>
            <button onClick={() => moveTo("Header")} className={styles.btn}>Наверх страницы</button>
        </div>

        <div className={styles.rightFooter}>
           <a className={styles.btnRight} target="_blank" href="https://t.me/Har1ibo86">Служба поддержки</a>
        </div>
      </div>
    );
  }
  
  export default Footer;
  