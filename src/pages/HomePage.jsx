import "./HomePage.css";
import Interactive from "../../public/images/desktop/image-interactive.jpg";
import OurCreations from "../components/ourCreations/OurCreations";

const HomePage = () => {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <h2>IMMENSIVE EXPERIENCES THAT DELIVER</h2>
        </div>
      </header>

      <main>
        <div className="main-home-1">
          <div className="foto-main">
            <img src={Interactive} alt="interactive image" />
          </div>
          <div className="text-main">
            <h2>
              THE LEADER IN <br />
              INTERRACTIVE VR
            </h2>

            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-wining creations have transformed bussiness
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </main>
      <OurCreations />
    </>
  );
};

export default HomePage;
