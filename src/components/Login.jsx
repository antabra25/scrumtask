import scrumTask from '../assets/LogoScrumTask.svg'
import Top from "./common/Top.jsx";
import '../css/login.css'
function Login(){

    return (
        <div className="main-login">
            <Top name={"Registro"}/>
            <h1 className="title">Conectarse</h1>
            <div className="form-login">
                <form>
                    <div className="control-input">
                        <label htmlFor="email">Correo Electronico</label>
                        <input type="text" name="email" id="email"/>
                    </div>
                    <div className="control-input">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" id="password"/>
                    </div>
                    <button className="login-btn title">INICIAR SESION</button>
                </form>

            </div>
        </div>
    )

}

export default Login;