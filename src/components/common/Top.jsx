import scrumTask from "../../assets/LogoScrumTask.svg";
import '../../css/top.css'


const Top = (props) =>{

    return (
        <header>
            <div className="top-box">
                <button className="top-btn">{props.name}</button>
            </div>
            <div className="brand-logo">
                <img src={scrumTask} alt="" className="logo"/>
            </div>
        </header>
    )

}

export default Top;