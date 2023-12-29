import "./styles/home.css";
import Portrait from "../assets/IMG-20230129-WA0004.jpg";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";

function Home() {
  const [currentText, setCurrentText] = useState("");
  const texts = useMemo(() => [
    "Front End Development",
    "Back End Development",
    "Mern Stack Development",
  ], []);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const spanElement = document.querySelector(".changeDev");
    const animationDuration = 5; // Set this to the duration of your CSS animation in seconds

    const onAnimationIteration = () => {
      setCurrentText(texts[currentIndex]);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    };

    spanElement.addEventListener("animationiteration", onAnimationIteration);

    const intervalId = setInterval(() => {
      // Set width to 0% to trigger the animation
      // spanElement.style.width = "0%";
      // Trigger the animation to start
      spanElement.style.animation = "none";
      void spanElement.offsetWidth; // Trigger a reflow
      spanElement.style.animation = `text-type ${animationDuration}s steps(120) infinite`;
    }, animationDuration * 0);

    return () => {
      clearInterval(intervalId);
      spanElement.removeEventListener(
        "animationiteration",
        onAnimationIteration
      );
    };
  }, [currentIndex, texts]);

  return (
    <div className="homePage">
      <section className="home-section">
        <div className="home-row">
          <div className="home-col text-col">
            <h1>
              <span
                style={{
                  color: "var(--text-colors)",
                }}
              >
                It's Me
              </span>
              {/* <br /> */}
              <span className="text-span-primary main-text"> Ullas JS</span>
            </h1>
            <h4>
              I'm Into
              <span className="changeDev animate">{currentText}</span>
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
      <section className="project-section">
        <div className="projectbody">
          <ul className="projectslist">
            <li
              onClick={() =>
                (window.location.href =
                  "https://ninjaullas.github.io/Flappy_bird/")
              }
            >
              <a href="https://ninjaullas.github.io/Flappy_bird/">
                Flappy bird Game
              </a>
            </li>
            <li
              onClick={() =>
                (window.location.href =
                  "https://ninjaullas.github.io/ImageSearch/")
              }
            >
              <a href="https://ninjaullas.github.io/ImageSearch/">
                Image search Engine
              </a>
            </li>
            <li
              onClick={() =>
                (window.location.href =
                  "https://ninjaullas.github.io/weatherApp/")
              }
            >
              <a href="https://ninjaullas.github.io/weatherApp/">Weather App</a>
            </li>
            <li
              onClick={() =>
                (window.location.href =
                  "https://ninjaullas.github.io/ScipyTechnologies/")
              }
            >
              <a href="https://ninjaullas.github.io/ScipyTechnologies/">
                A Company Website
              </a>
            </li>
            <li
              onClick={() =>
                (window.location.href =
                  "https://github.com/NinjaUllas/NotePadz")
              }
            >
              <a href="https://github.com/NinjaUllas/NotePadz">
                React Native Note App
              </a>
            </li>
            <li
              onClick={() =>
                (window.location.href =
                  "https://github.com/NinjaUllas/fluttertestapp")
              }
            >
              <a href="https://github.com/NinjaUllas/fluttertestapp">
                A Simple Flutter App (with Dark mode)
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;
