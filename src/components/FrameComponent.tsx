import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.detailsWrapper}>
      <div className={styles.details}>
        <div className={styles.detailsCard}>
          <div className={styles.left}>
            <div className={styles.text}>
              <h1 className={styles.title}>
                <span>{`Best deals `}</span>
                <span className={styles.crispySandwiches}>
                  Crispy Sandwiches
                </span>
              </h1>
              <div className={styles.body}>
                <p
                  className={styles.enjoyTheLarge}
                >{`Enjoy the large size of sandwiches. Complete `}</p>
                <p className={styles.perfectSliceOf}>
                  perfect slice of sandwiches.
                </p>
              </div>
            </div>
            <button className={styles.button}>
              <div className={styles.proceedToOrder}>Proceed to order</div>
              <div className={styles.chevronRight}>CHEVRON-RIGHT</div>
            </button>
          </div>
          <img
            className={styles.rightIcon}
            loading="lazy"
            alt=""
            src="/right@2x.png"
          />
        </div>
        <div className={styles.detailsCard1}>
          <img className={styles.rightIcon1} alt="" src="/right-1@2x.png" />
          <div className={styles.left1}>
            <div className={styles.text1}>
              <h1 className={styles.title1}>
                <p className={styles.celebrateParties}>Celebrate parties</p>
                <p className={styles.withFriedChicken}>
                  <span>{`with `}</span>
                  <span className={styles.friedChicken}>Fried Chicken</span>
                </p>
              </h1>
              <div className={styles.body1}>
                <p
                  className={styles.getTheBest}
                >{`Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out `}</p>
                <p className={styles.bestDealsFor}>
                  best deals for fried chicken.
                </p>
              </div>
            </div>
            <button className={styles.button1}>
              <b className={styles.text2}>Proceed to order</b>
              <div className={styles.icon}>CHEVRON-RIGHT</div>
            </button>
          </div>
        </div>
        <div className={styles.detailsCard2}>
          <div className={styles.left2}>
            <div className={styles.text3}>
              <h1 className={styles.title2}>
                <p className={styles.wannaEatHot}>{`Wanna eat hot `}</p>
                <p className={styles.spicyPizza}>
                  <span>{`& spicy `}</span>
                  <span className={styles.pizza}>Pizza?</span>
                </p>
              </h1>
              <div className={styles.body2}>
                <p
                  className={styles.pairUpWith}
                >{`Pair up with a friend and enjoy the `}</p>
                <p
                  className={styles.hotAndCrispy}
                >{`hot and crispy pizza pops. Try it `}</p>
                <p className={styles.withTheBest}>with the best deals.</p>
              </div>
            </div>
            <button className={styles.button2}>
              <div className={styles.proceedToOrder1}>Proceed to order</div>
              <div className={styles.chevronRight1}>CHEVRON-RIGHT</div>
            </button>
          </div>
          <img className={styles.rightIcon2} alt="" src="/right-2@2x.png" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
