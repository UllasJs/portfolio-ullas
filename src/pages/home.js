import "./styles/home.css";
import Portrait from "../assets/IMG-20230129-WA0004.jpg";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homePage">
      <section className="home-section">
        <div className="home-row">
          <div className="home-col text-col">
            <h1>
              It's Me <br />
              <span className="text-span-primary main-text">Ullas </span> JS
            </h1>
            <h4>
              I'm Into
              <span className="text-span-primary"> Front End Developer</span>
            </h4>
            <Link className="about-link" to="/about">
              About Me
              <span className="about-icon">
                <BsArrowRightCircleFill />
              </span>
            </Link>
          </div>
          <div className="home-col">
            <div className="profile-pic">
              <img src={Portrait} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
