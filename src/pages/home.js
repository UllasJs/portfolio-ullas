import "./styles/home.css";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homePage">
      <section className="home-section">
        <div className="home-row">
          <div className="home-col">
            <h1>
              It's Me <span>Ullas</span>
            </h1>
            <h4>
              Im Into <span>Front End Developer</span>
            </h4>
            <Link to="/about">
              About Me
              <span>
                <BsArrowRightCircleFill />
              </span>
            </Link>
          </div>
          <div className="home-col"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
