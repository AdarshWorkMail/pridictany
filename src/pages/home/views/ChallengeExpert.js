import React from "react";
import expert1 from "../../../assets/Home/expert/expert 1.png";
import expert2 from "../../../assets/Home/expert/expert 2.png";
import expert3 from "../../../assets/Home/expert/expert 3.png";
import Button from "../../../components/buttons/Button";
import styles from "../Home.module.scss";

const ChallengeExpert = () => {
  return (
    <div className={styles.challengeExpertContainer}>
      <div className={styles.challengeExpertBlackBG}></div>
      <div className={styles.imageContainer}>
        <div className={styles.imageItem}>
          <img src={expert1} alt="expert1" />
        </div>
        <div className={styles.imageItem}>
          <img src={expert2} alt="expert2" />
        </div>
        <div className={styles.imageItem}>
          <img src={expert3} alt="expert3" />
        </div>
      </div>
      <div className={styles.contentText}>
        <p className={styles.title}>Challenge Expert</p>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
          dolor ac odio maximus sodales.
        </p>
        <Button
          style={{
            color: "white",
            backgroundColor: "#ED1D25",
            height: "47px",
            width: "216px",
            marginTop: "25px",
          }}
        >
          TAKE ME THERE
        </Button>
      </div>
    </div>
  );
};

export default ChallengeExpert;
