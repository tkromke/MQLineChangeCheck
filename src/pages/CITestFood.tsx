import { FunctionComponent } from "react";
import Header from "../components/Header";
import TopNav from "../components/TopNav";
import FrameComponent2 from "../components/FrameComponent2";
import ErrorHandler from "../components/ErrorHandler";
import MatrixInverse from "../components/MatrixInverse";
import FrameComponent1 from "../components/FrameComponent1";
import SearchByFoodThisIsALong from "../components/SearchByFoodThisIsALong";
import Features from "../components/Features";
import AppDownload from "../components/AppDownload";
import FrameComponent from "../components/FrameComponent";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import styles from "./CITestFood.module.css";

const CITestFood: FunctionComponent = () => {
  return (
    <div className={styles.ciTestFood}>
      <section className={styles.topNavHeaderWrapper}>
        <div className={styles.topNavHeader}>
          <div className={styles.topNavHeaderChild} />
          <div className={styles.topNavHeaderItem} />
          <div className={styles.outputBranch}>
            <div className={styles.functionCall} />
            <img
              className={styles.variableAssignerIcon}
              alt=""
              src="/variable-assigner@2x.png"
            />
          </div>
          <Header />
          <div className={styles.background} />
          <TopNav />
        </div>
      </section>
      <FrameComponent2 />
      <ErrorHandler />
      <section className={styles.matrixDeterminantWrapper}>
        <div className={styles.matrixDeterminant}>
          <MatrixInverse />
          <FrameComponent1 />
        </div>
      </section>
      <SearchByFoodThisIsALong />
      <Features />
      <AppDownload />
      <FrameComponent />
      <CTA />
      <Footer />
    </div>
  );
};

export default CITestFood;
