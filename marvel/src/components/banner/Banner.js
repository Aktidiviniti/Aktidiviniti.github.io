import logo from '../../resources/img/Avengers_logo.png';
import avengers from '../../resources/img/Avengers.png'
import './banner.sass'
const Banner = () => {
    return(
        <div className="banner">
            <div className="banner__block">
                <img src= {avengers} alt="LOGO" />
                <p className="banner__text">New comics every week! Stay tuned!</p>
            </div>
            <img src={logo} alt="AVENGERS" className="banner__avangers" />
        </div>
    )
}
export default Banner;