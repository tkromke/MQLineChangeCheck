import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.ourTopCities}>
        <b className={styles.title}>Our top cities</b>
        <div className={styles.items}>
          <div className={styles.ourTopCitiesMenuItems1}>
            <div className={styles.div}>San Francisco</div>
            <div className={styles.div1}>Miami</div>
            <div className={styles.div2}>San Diego</div>
            <div className={styles.div3}>East Bay</div>
            <div className={styles.div4}>Long Beach</div>
          </div>
          <div className={styles.ourTopCitiesMenuItems2}>
            <div className={styles.div5}>Los Angeles</div>
            <div className={styles.div6}>Washington DC</div>
            <div className={styles.div7}>Seattle</div>
            <div className={styles.div8}>Portland</div>
            <div className={styles.div9}>Nashville</div>
          </div>
          <div className={styles.ourTopCitiesMenuItems3}>
            <div className={styles.div10}>New York City</div>
            <div className={styles.div11}>Orange County</div>
            <div className={styles.div12}>Atlanta</div>
            <div className={styles.div13}>Charlotte</div>
            <div className={styles.div14}>Denver</div>
          </div>
          <div className={styles.ourTopCitiesMenuItems4}>
            <div className={styles.div15}>Chicago</div>
            <div className={styles.div16}>Phoenix</div>
            <div className={styles.div17}>Las Vegas</div>
            <div className={styles.div18}>Sacramento</div>
            <div className={styles.div19}>Oklahoma City</div>
          </div>
          <div className={styles.ourTopCitiesMenuItems5}>
            <div className={styles.div20}>Columbus</div>
            <div className={styles.div21}>New Mexico</div>
            <div className={styles.div22}>Albuquerque</div>
            <div className={styles.div23}>Sacramento</div>
            <div className={styles.div24}>New Orleans</div>
          </div>
        </div>
      </div>
      <div className={styles.menuSubscriptionRights}>
        <img className={styles.hrIcon} alt="" src="/hr-3.svg" />
        <div className={styles.menuSubscription}>
          <div className={styles.menu}>
            <div className={styles.footerMenuItems}>
              <b className={styles.title1}>Company</b>
              <div className={styles.items1}>
                <div className={styles.div25}>About us</div>
                <div className={styles.functionHub}>Team</div>
                <div className={styles.connectionNetwork}>Careers</div>
                <div className={styles.valuePairList}>Blog</div>
              </div>
            </div>
            <div className={styles.footerMenuItems1}>
              <b className={styles.title2}>Contact</b>
              <div className={styles.items2}>
                <div className={styles.colorPalette}>{`Help & Support`}</div>
                <div className={styles.colorPalette1}>{`Partner with us `}</div>
                <div className={styles.colorPalette2}>Ride with us</div>
                <div className={styles.div26}>Blog</div>
              </div>
            </div>
            <div className={styles.footerMenuItems2}>
              <b className={styles.title3}>Legal</b>
              <div className={styles.items3}>
                <div className={styles.div27}>{`Terms & Conditions`}</div>
                <div className={styles.div28}>{`Refund & Cancellation`}</div>
                <div className={styles.div29}>Privacy Policy</div>
                <div className={styles.div30}>Cookie Policy</div>
              </div>
            </div>
          </div>
          <div className={styles.followSubscription}>
            <div className={styles.followUs}>
              <b className={styles.title4}>Follow Us</b>
              <div className={styles.icons}>
                <div className={styles.alignAligner}></div>
                <div className={styles.alignAligner1}></div>
                <div className={styles.alignAligner2}></div>
              </div>
            </div>
            <div className={styles.subscription}>
              <b className={styles.strokeStyleSet}>
                Receive exclusive offers in your mailbox
              </b>
              <div className={styles.textFieldButton}>
                <div className={styles.textField}>
                  <div className={styles.envelope}>envelope</div>
                  <div className={styles.maskBuilder}>Enter Your email</div>
                </div>
                <button className={styles.button}>
                  <b className={styles.subscribe}>Subscribe</b>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.hrRights}>
          <img className={styles.hrIcon1} alt="" src="/hr-3.svg" />
          <div className={styles.rights}>
            <div className={styles.rights1}>
              <div className={styles.copyright}>
                <div className={styles.allRightsReserved}>
                  All rights Reserved
                </div>
                <div className={styles.symbol}>copyright</div>
              </div>
              <div className={styles.company}>
                <b className={styles.yourCompany2021}>Your Company, 2021</b>
              </div>
            </div>
            <div className={styles.madeBy}>
              <div className={styles.madeWithContainer}>
                <span>
                  <span>Made with</span>
                  <span className={styles.span}>{` `}</span>
                </span>
                <span className={styles.span1}>
                  <span></span>
                  <span className={styles.span2}>{` `}</span>
                </span>
                <span>by</span>
              </div>
              <div className={styles.themewagon}>
                <b className={styles.themewagon1}>Themewagon</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
