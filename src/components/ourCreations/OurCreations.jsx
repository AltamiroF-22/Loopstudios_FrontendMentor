import "./OurCreations.css";
import DeepEarth from "../../../public/images/desktop/image-deep-earth.jpg";
import DeepEarthMobile from "../../../public/images/mobile/image-deep-earth.jpg";
import NightArcde from '../../../public/images/desktop/image-night-arcade.jpg';
import NightArcdeMobile from '../../../public/images/mobile/image-night-arcade.jpg';
import SoccerTeamVr from '../../../public/images/desktop/image-soccer-team.jpg';
import SoccerTeamVrMobile from '../../../public/images/mobile/image-soccer-team.jpg';
import TheGrid from '../../../public/images/desktop/image-grid.jpg';
import TheGridMobile from '../../../public/images/mobile/image-grid.jpg';
import FromUp from '../../../public/images/desktop/image-from-above.jpg';
import FromUpMobile from '../../../public/images/mobile/image-from-above.jpg';
import PocketBorealis from '../../../public/images/desktop/image-pocket-borealis.jpg';
import PocketBorealisMobile from '../../../public/images/mobile/image-pocket-borealis.jpg';
import TheCuriosity from '../../../public/images/desktop/image-curiosity.jpg';
import TheCuriosityMobile from '../../../public/images/mobile/image-curiosity.jpg';
import MakeItFisheye from '../../../public/images/desktop/image-fisheye.jpg';
import MakeItFisheyeMobile from '../../../public/images/mobile/image-fisheye.jpg';
import { useEffect, useState } from "react";

const OurCreations = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  const handleWindowResize = () => {
    setIsMobile(window.innerWidth < 700);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <section>
      <div className="sec-header">
        <h2>OUR CREATIONS</h2>
        <button>SEE ALL</button>
      </div>

      <article className="article-container">
        <div className="article-content">
          {isMobile ? (
            <img src={DeepEarthMobile} alt="Mobile Earth" />
          ) : (
            <img src={DeepEarth} alt="Desktop Earth" />
          )}
          <p>DEEP <br/> EARTH</p>
        </div>
        <div className="article-content">
          {isMobile ? (
            <img src={NightArcdeMobile} alt="Mobile Earth" />
          ) : (
            <img src={NightArcde} alt="Desktop Earth" />
          )}
          <p>NIGHT <br/> ARCARDE</p>
        </div>
        <div className="article-content">
          {isMobile ? (
            <img src={SoccerTeamVrMobile} alt="Mobile Earth" />
          ) : (
            <img src={SoccerTeamVr} alt="Desktop Earth" />
          )}
          <p> SOCCER <br/> TEAM VR</p>
        </div>
        <div className="article-content">
          {isMobile ? (
            <img src={TheGridMobile} alt="Mobile Earth" />
          ) : (
            <img src={TheGrid} alt="Desktop Earth" />
          )}
          <p>THE <br/> GRID</p>
        </div>
        <div className="article-content">
          {isMobile ? (
            <img src={FromUpMobile} alt="Mobile Earth" />
          ) : (
            <img src={FromUp} alt="Desktop Earth" />
          )}
          <p>FROM UP<br/> ABOVE VR</p>
        </div>
        
        <div className="article-content">
          {isMobile ? (
            <img src={PocketBorealisMobile} alt="Mobile Earth" />
          ) : (
            <img src={PocketBorealis} alt="Desktop Earth" />
          )}
          <p>POCKET <br/> BOREALIS</p>
        </div>
        <div className="article-content">
          {isMobile ? (
            <img src={TheCuriosityMobile} alt="Mobile Earth" />
          ) : (
            <img src={TheCuriosity} alt="Desktop Earth" />
          )}
          <p>THE <br/> CURIOSITY</p>
        </div>
        <div className="article-content">
          {isMobile ? (
            <img src={MakeItFisheyeMobile} alt="Mobile Earth" />
          ) : (
            <img src={MakeItFisheye} alt="Desktop Earth" />
          )}
          <p>MAKE IT <br/> FISHEYE</p>
        </div>
      </article>
    </section>
  );
};

export default OurCreations;
