
import TitleAndSwitcher from "../../components/titleAndSwitcher/TitleAndSwitcher";
import styles from "./Start.module.css";

export default function Start() {
  return (
    <div className= "container ">
      <TitleAndSwitcher/>
      <div>
        <div>
          <h1>Welcome to the<br/> <span>Frontend Quiz!</span></h1>
          <p>Pick a subject to get started.</p>
        </div>

      </div>
    </div>
  );
}
