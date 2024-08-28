import moon from "../../assets/icon-moon-dark.svg";
import sun from "../../assets/icon-sun-dark.svg";

export default function TitleAndSwitcher({ iconTitle, title }) {
  return (
    <div className="titleAndSwitcher ">
      <div className="titleandIconDiv">
        <img src={iconTitle} />
        <h2 className="fHeadingS darkNavy">{title}</h2>
      </div>
      <div className="divIconsAndSwitcher ">
        <img className="icon" src={sun} alt="" />
        <label className="themeSwitcher">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
        <img className="icon" src={moon} />
      </div>
    </div>
  );
}
