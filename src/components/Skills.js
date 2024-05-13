import meter1 from "../assets/img/karta.png";
import meter2 from "../assets/img/karta.png";
import meter3 from "../assets/img/karta.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import skill1 from "../assets/img/free-web-development-1815631-1740054.png";
import skill2 from "../assets/img/free-web-programming-2190088-1840536.png";
import skill3 from "../assets/img/bild.png";
import java from "../assets/img/Java_programming_language_logo.svg.png";
import swift from "../assets/img/swift-og.png";
import c from "../assets/img/ISO_C++_Logo.svg.png";
import phaser from "../assets/img/bild.png";
import react from "../assets/img/react.png";



export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Färdigheter</h2>
                        <p>Här är några av kunskaperna som jag har lärt mig under min tid på utbildningen civilingenjör inom interaktion och design samt på fritiden.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={skill1} alt="Image" />
                                <h5>Webbutveckling</h5>
                            </div>
                            <div className="item">
                                <img src={skill2} alt="Image" />
                                <h5>Digital Design</h5>
                            </div>
                            <div className="item">
                                <img src={skill3} alt="Image" />
                                <h5>HTML, css och Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={phaser} alt="Image" />
                                <h5>Phaser</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={swift} alt="Image" />
                                <h5>IOS-utveckling/Swift</h5>
                            </div>
                            <div className="item">
                                <img src={c} alt="Image" />
                                <h5>C/C++</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>Java</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
