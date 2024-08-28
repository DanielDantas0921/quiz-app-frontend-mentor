import TitleAndSwitcher from "../../components/TitleAndSwitcher/TitleAndSwitcher";
import htmlIcon from "../../assets/icon-html.svg"
import Question from "../../components/Question/Question";

export default function Html(){
    return (
        <div className="container">

        
        <TitleAndSwitcher iconTitle={htmlIcon} title="Html" />
        <div>
            <Question/>
        </div>
        </div>
    )
}