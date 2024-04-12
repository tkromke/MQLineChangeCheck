import { FunctionComponent } from "react";
import styles from "./ErrorHandler.module.css";

const ErrorHandler: FunctionComponent = () => {
  return (
    <section className={styles.errorHandler}>
      <div className={styles.howDoesItWork}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>How does it work</h1>
        </div>
        <div className={styles.features}>
          <div className={styles.frameParent}>
            <div className={styles.iconsWrapper}>
              <div className={styles.icons}>
                <div className={styles.menu}>
                  <div className={styles.menu2}>
                    <div className={styles.menu2Child} />
                    <img className={styles.groupIcon} alt="" src="/group.svg" />
                  </div>
                </div>
                <div className={styles.wrapperMapMarker}>
                  <img
                    className={styles.mapMarkerIcon}
                    alt=""
                    src="/map-marker.svg"
                  />
                </div>
                <img className={styles.invoiceIcon} alt="" src="/invoice.svg" />
                <img className={styles.donutIcon} alt="" />
              </div>
            </div>
            <div className={styles.texts}>
              <b className={styles.title1}>Select location</b>
              <div className={styles.body}>
                Choose the location where your food will be delivered.
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.iconsContainer}>
              <div className={styles.icons1}>
                <div className={styles.menu1}>
                  <div className={styles.menu21}>
                    <div className={styles.menu2Item} />
                    <img
                      className={styles.groupIcon1}
                      alt=""
                      src="/group.svg"
                    />
                  </div>
                </div>
                <img className={styles.mapMarkerIcon1} alt="" />
                <img
                  className={styles.invoiceIcon1}
                  alt=""
                  src="/invoice.svg"
                />
                <img className={styles.donutIcon1} alt="" />
              </div>
            </div>
            <div className={styles.texts1}>
              <b className={styles.title2}>Choose order</b>
              <div className={styles.body1}>
                Check over hundreds of menus to pick your favorite food
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.iconsFrame}>
              <div className={styles.icons2}>
                <div className={styles.menu3}>
                  <div className={styles.menu22}>
                    <div className={styles.menu2Inner} />
                    <img
                      className={styles.groupIcon2}
                      alt=""
                      src="/group.svg"
                    />
                  </div>
                </div>
                <img className={styles.mapMarkerIcon2} alt="" />
                <div className={styles.wrapperInvoice}>
                  <img
                    className={styles.invoiceIcon2}
                    alt=""
                    src="/invoice.svg"
                  />
                </div>
                <img className={styles.donutIcon2} alt="" />
              </div>
            </div>
            <div className={styles.texts2}>
              <b className={styles.title3}>Pay advanced</b>
              <div className={styles.body2}>
                It's quick, safe, and simple. Select several methods of payment
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.iconsWrapper1}>
              <div className={styles.icons3}>
                <div className={styles.menu4}>
                  <div className={styles.menu23}>
                    <div className={styles.rectangleDiv} />
                    <img
                      className={styles.groupIcon3}
                      alt=""
                      src="/group.svg"
                    />
                  </div>
                </div>
                <img className={styles.mapMarkerIcon3} alt="" />
                <img
                  className={styles.invoiceIcon3}
                  alt=""
                  src="/invoice.svg"
                />
                <div className={styles.wrapperDonut}>
                  <img
                    className={styles.donutIcon3}
                    alt=""
                    src="/donut-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.texts3}>
              <b className={styles.title4}>Enjoy meals</b>
              <div className={styles.body3}>
                Food is made and delivered directly to your home.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorHandler;
