import { FunctionComponent } from "react";
import styles from "./FlashDealCard.module.css";

export type FlashDealCardType = {
  image?: string;
  number?: string;
  daysRemaining?: string;
};

const FlashDealCard: FunctionComponent<FlashDealCardType> = ({
  image,
  number,
  daysRemaining,
}) => {
  return (
    <div className={styles.flashDealCard}>
      <div className={styles.foodPhoto}>
        <img className={styles.imageIcon} alt="" src={image} />
        <div className={styles.discount}>
          <b className={styles.number}>{number}</b>
          <div className={styles.outputCombiner}>
            <div className={styles.percentageSymbol}>
              <h2 className={styles.h2}>%</h2>
              <div className={styles.off}>Off</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.textsBadge}>
        <b className={styles.greysVage}>Greys Vage</b>
        <button className={styles.daysRemainingWrapper}>
          <b className={styles.daysRemaining}>{daysRemaining}</b>
        </button>
      </div>
    </div>
  );
};

export default FlashDealCard;
