
import RetangleStart from "../../components/RetangleStart/RetangleStart";
import styles from "./Start.module.css";
import iconHtml from "../../assets/icon-html.svg"
import iconCss from "../../assets/icon-css.svg"
import iconJs from "../../assets/icon-js.svg"
import iconAccessibility from "../../assets/icon-accessibility.svg"
import { Link } from "react-router-dom";
import TitleAndSwitcher from "../../components/TitleAndSwitcher/TitleAndSwitcher";

export default function Start() {
  return (
    <div className= "containerStart">
     <TitleAndSwitcher/>
      <div className={styles.main}>
        <div className={styles.divH1Andp}>
          <h1 className="fHeadingLRegular">Welcome to the<br/> <span className="fHeadingLBold">Frontend Quiz!</span></h1>
          <p className="fBodyS">Pick a subject to get started.</p>
        </div>
        <div className={styles.RetangleStartContainer}>
          <Link to="/HTML" className={styles.link}><RetangleStart  srcImg={iconHtml} text="HTML"/></Link>
         <Link to="/CSS" className={styles.link}> <RetangleStart  srcImg={iconCss} text="CSS"/></Link>
         <Link to="/JavaScript" className={styles.link}> <RetangleStart  srcImg={iconJs} text="Javascript"/></Link>
         <Link to="/Accessibility" className={styles.link}> <RetangleStart  srcImg={iconAccessibility} text="Acessibility"/></Link>
        </div>
      </div>
    </div>
    
  );
}
