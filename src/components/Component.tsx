import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Component.module.css";

export type ComponentType = {
  frame40?: string;
  name1?: string;
  text?: string;
  prop?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const Component: FunctionComponent<ComponentType> = ({
  frame40,
  name1,
  text,
  prop,
  propDisplay,
  propMinWidth,
  propMinWidth1,
}) => {
  const nameStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={styles.div}>
      <div className={styles.imageTitle}>
        <img
          className={styles.imageTitleChild}
          loading="lazy"
          alt=""
          src={frame40}
        />
        <div className={styles.nameLocationPrice}>
          <div className={styles.nameLocation}>
            <b className={styles.name} style={nameStyle}>
              {name1}
            </b>
            <div className={styles.location}>
              <div className={styles.icon}>map-marker-alt</div>
              <div className={styles.text} style={textStyle}>
                {text}
              </div>
            </div>
          </div>
          <div className={styles.price}>
            <b className={styles.b}>{prop}</b>
          </div>
        </div>
      </div>
      <button className={styles.button}>
        <b className={styles.text1}>Order Now</b>
      </button>
    </div>
  );
};

export default Component;
