import styles from "./CardFinished.module.css";

export default function CardFinished({ srcImg, title, correctAnwers }) {
  return (
    <div className={styles.cardContainer}>
        <div className={`${styles.titleAndIconDiv} `} style={{marginBottom: "2rem"}}>
          <img src={srcImg} />
          <h3 className="darkNavy fHeadingS">{title}</h3>
        </div>
        <span className="fDisplay darkNavy" style={{marginBottom: "1.5rem"}}>{correctAnwers}</span>
        <p className={`greyNavy ${styles.fBodyM}`}>out of 10</p>
    </div>
  );
}
