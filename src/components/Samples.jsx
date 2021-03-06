import React from "react";
import spaceInvaders from "../img/space-invaders.png";
import comingSoon from "../img/coming-soon.jpg";
import portfolio from "../img/portfolio.png";
import countdown from "../img/countdown.png";

const Samples = () => {
  return (
    <div>
      <section id="projects" className="p-5 bg-light text-dark">
        <h1 className="text-center text-secondary pb-3">Project Examples</h1>
        <div className="container row row-cols-md-2 row-cols-lg-4 text-center mx-auto">
          <div className="col-sm p-2">
            <div className="h-100 card">
              <img
                src={countdown}
                className="h-50 card-img-top project-img"
                alt="Countdown App Image"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Javascript Countdown</h5>
                <p className="h-50 card-text">
                  A quick 'countdown' I built while learning JavaScript function
                  syntax and working with the DOM
                </p>
                <a
                  href="https://github.com/GreyFenixCodes/js-countdown-app/blob/main/script.js"
                  target="_blank"
                  className="btn btn-primary"
                >
                  SEE THE CODE
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm p-2">
            <div className="h-100 card">
              <img
                src={spaceInvaders}
                className="h-50 card-img-top project-img"
                alt="Space Invaders Clone Image"
              />
              <div className="card-body">
                <h5 className="card-title">Python Space Invaders Clone</h5>
                <p className="h-50 card-text">
                  While learning Python, I began to build a Space Invaders clone
                  using PyGame.
                </p>
                <a
                  href="https://github.com/GreyFenixCodes/spac-invader-clone-python/blob/master/main.py"
                  target="_blank"
                  className="btn btn-primary"
                >
                  SEE THE CODE
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm p-2">
            <div className="h-100 card">
              <img
                src={portfolio}
                className="h-50 card-img-top project-img"
                alt="Portfolio Image"
              ></img>
              <div className="card-body">
                <h5 className="card-title">This Website!</h5>
                <p className="h-50 card-text">
                  This site was built while learning the Bootstrap library (I'm
                  sure that's obvious just from the color scheme!).
                </p>
                <a
                  href="https://github.com/GreyFenixCodes/portfolio/blob/main/index.html"
                  target="_blank"
                  className="btn btn-primary"
                >
                  SEE THE CODE
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm p-2">
            <div className="h-100 card">
              <img
                src={comingSoon}
                className="h-50 card-img-top project-img"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Coming Soon...</h5>
                <p className="h-50 card-text">
                  I am currently working on cloning this website using React.JS.
                  No code repository yet!
                </p>
                <a 
                  href="https://github.com/GreyFenixCodes/react-portfolio/blob/master/src/components/App.js"
                  target='_blank'
                  className="btn btn-primary">SEE THE CODE</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Samples;
