import scrumTask from "../assets/LogoScrumTask.svg";
import '../css/signup.css'
import Top from "./common/Top.jsx";
import Entry from "./common/Entry.jsx";

function SignUp() {

    const mycontrol = "Valor de prueba"

    return(
        <div className="main-signup">
            <Top name={"Ingresar"}/>

        <div className="form-box">
            <form>
                <Entry type={"text"} name={""} error={""} value={mycontrol} />
            </form>
        </div>




        </div>
    )
}



export default SignUp