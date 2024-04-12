import { FunctionComponent } from "react";
import styles from "./CTA.module.css";

const CTA: FunctionComponent = () => {
  return (
    <section className={styles.cta}>
      <img className={styles.imageIcon} alt="" src="/image-14@2x.png" />
      <h1 className={styles.text}>
        Are you ready to order with the best deals?
      </h1>
      <div className={styles.buttonWrapper}>
        <button className={styles.button}>
          <div className={styles.text1}>Proceed to order</div>
          <div className={styles.iconWrapper}>
            <div className={styles.icon}>CHEVRON-RIGHT</div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default CTA;
