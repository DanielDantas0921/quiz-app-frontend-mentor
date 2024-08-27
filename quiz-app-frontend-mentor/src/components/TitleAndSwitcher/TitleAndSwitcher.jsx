import moon from "../../assets/icon-moon-dark.svg";
import sun from "../../assets/icon-sun-dark.svg";

export default function TitleAndSwitcher({iconTitle, title}){

    return (
        <div className= "titleAndSwitcher ">
        <div>
            <img src={iconTitle}  />
          <p>{title}</p>
        </div>
        <div className= "divIconsAndSwitcher ">
          <img className="icon" src={sun} alt="" />
          <label className= "themeSwitcher">
            <input type="checkbox" />
            <span className= "slider"></span>
          </label>
          <img className= "icon" src={moon} />
        </div>
      </div>
    )
}