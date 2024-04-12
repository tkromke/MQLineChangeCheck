import { FunctionComponent } from "react";
import styles from "./Features.module.css";

const Features: FunctionComponent = () => {
  return (
    <section className={styles.features}>
      <div className={styles.card}>
        <div className={styles.div}>
          <img className={styles.icon} loading="lazy" alt="" src="/icon.svg" />
          <h2 className={styles.dataAggregator}>
            <p className={styles.daily}>Daily</p>
            <p className={styles.discounts}>Discounts</p>
          </h2>
        </div>
        <img className={styles.hrIcon} alt="" src="/hr-1.svg" />
        <div className={styles.div1}>
          <img className={styles.icon1} alt="" src="/icon-1.svg" />
          <h2 className={styles.text}>
            <p className={styles.live}>Live</p>
            <p className={styles.tracing}>Tracing</p>
          </h2>
        </div>
        <img className={styles.hrIcon1} alt="" src="/hr-1.svg" />
        <div className={styles.div2}>
          <img className={styles.icon2} alt="" src="/icon-2.svg" />
          <h2 className={styles.text1}>
            <p className={styles.quick}>Quick</p>
            <p className={styles.delivery}>Delivery</p>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Features;
