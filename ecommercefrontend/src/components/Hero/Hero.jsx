import './Hero.css'
import hero_image from "../Assets/hero_image.jpg";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";

export const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>SEASONAL ARRIVALS FOR YOUNG INDIA </h2>
                <div>
                    <div className="hero-hand-icon">
                        <img src={hand_icon} alt="" />
                        <p>new collections</p>
                    </div>
                    <p>of arrivals for everyone </p>
                </div>
                <div className="hero-latest-btn">
                    <div className="latestp">Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="hero" />
            </div>
        </div>
    )
}
