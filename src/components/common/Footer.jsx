import facebookLogo from '../../assets/facebook.svg'
import instagramLogo from '../../assets/instagram-.svg'
import twitterLogo from '../../assets/twitter.svg'
import youtubeLogo from '../../assets/youtube..svg'
import scrumTask from '../../assets/LogoScrumTask.svg'
import '../../css/footer.css'


function TheFooter(){

    return  (

            <footer>
                <div className="social">
                <a href="src/components/common/Footer.jsx"><img src={facebookLogo} alt=""/></a>
                <a href="src/components/common/Footer.jsx"><img src={instagramLogo} alt=""/></a>
                <a href="src/components/common/Footer.jsx"><img src={twitterLogo} alt=""/></a>
                <a href="src/components/common/Footer.jsx"><img src={youtubeLogo} alt=""/></a>
                </div>
                <div>
                    <div className="main-footer">
                    <img className="footer-brand" src={scrumTask} alt=""/>
                        <small>Design by Anthony Mujica</small>
                    </div>
                </div>
                <div>
                    <p><small>© 2022 ScrumTask</small></p>
                </div>
        </footer>
    )
}

export default TheFooter;
