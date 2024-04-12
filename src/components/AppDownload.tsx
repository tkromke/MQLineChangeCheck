import { FunctionComponent } from "react";
import styles from "./AppDownload.module.css";

const AppDownload: FunctionComponent = () => {
  return (
    <section className={styles.appDownload}>
      <div className={styles.background} />
      <div className={styles.wrapperImage}>
        <img className={styles.imageIcon} alt="" src="/image-13@2x.png" />
      </div>
      <div className={styles.treeStructure}>
        <div className={styles.frameParent}>
          <div className={styles.titleParent}>
            <h1 className={styles.title}>Install the app</h1>
            <div className={styles.body}>
              It's never been easier to order food. Look for the finest
              discounts and you'll be lost in a world of delectable food.
            </div>
          </div>
          <div className={styles.wrapperGooglePlayDownloadParent}>
            <div className={styles.wrapperGooglePlayDownload}>
              <img
                className={styles.googlePlayDownload}
                loading="lazy"
                alt=""
                src="/google-play-download@2x.png"
              />
            </div>
            <div className={styles.wrapperAppStoreDownloadBut}>
              <img
                className={styles.appStoreDownloadButton}
                loading="lazy"
                alt=""
                src="/app-store-download-button.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
