import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PromoItem.module.css";

export type PromoItemType = {
  image?: string;
  text?: string;
  restaruantLogo?: string;
  name1?: string;
  text1?: string;
  text2?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propFlex?: CSSProperties["flex"];
  propHeight1?: CSSProperties["height"];
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay?: CSSProperties["display"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propDisplay1?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const PromoItem: FunctionComponent<PromoItemType> = ({
  image,
  text,
  restaruantLogo,
  name1,
  text1,
  text2,
  propHeight,
  propFlex,
  propHeight1,
  propMinWidth,
  propDisplay,
  propBackgroundColor,
  propColor,
  propDisplay1,
  propMinWidth1,
}) => {
  const promoItemStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const foodPhotoStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      height: propHeight1,
    };
  }, [propFlex, propHeight1]);

  const name1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      display: propDisplay,
    };
  }, [propMinWidth, propDisplay]);

  const badgeStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const text1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propColor, propDisplay1, propMinWidth1]);

  return (
    <div className={styles.promoItem} style={promoItemStyle}>
      <div className={styles.foodPhoto} style={foodPhotoStyle}>
        <img className={styles.imageIcon} alt="" src={image} />
        <div className={styles.badge}>
          <button className={styles.discount}>
            <div className={styles.iconWrapper}>
              <div className={styles.icon}>tag</div>
            </div>
            <b className={styles.text}>{text}</b>
          </button>
          <button className={styles.fast}>
            <div className={styles.iconContainer}>
              <div className={styles.icon1}>clock</div>
            </div>
            <b className={styles.text1}>Fast</b>
          </button>
        </div>
      </div>
      <div className={styles.imageNameReviewBadge}>
        <div className={styles.imageNameReview}>
          <img
            className={styles.restaruantLogoIcon}
            alt=""
            src={restaruantLogo}
          />
          <div className={styles.nameReview}>
            <b className={styles.name} style={name1Style}>
              {name1}
            </b>
            <div className={styles.review}>
              <div className={styles.icon2}>Star</div>
              <div className={styles.text2}>{text1}</div>
            </div>
          </div>
        </div>
        <button className={styles.badge1} style={badgeStyle}>
          <b className={styles.text3} style={text1Style}>
            {text2}
          </b>
        </button>
      </div>
    </div>
  );
};

export default PromoItem;
