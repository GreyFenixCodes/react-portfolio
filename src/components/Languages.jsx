import React from "react";

const Languages = () => {
  return (
    <div>
      <section className="p-5 bg-secondary">
        <div id="languages" className="h1 text-center text-warning">
          Languages and Technologies Used:
        </div>
        <div className="container d-none d-md-block">
          <div className="row text-center">
            <div className="col col-md my-2">
              <div className="card bg-primary text-light">
                <div className="card-body text-center shadow-lg">
                  <div className="h1">
                    <i className="fa-brands fa-html5"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-md my-2">
              <div className="card bg-primary text-light shadow-lg">
                <div className="card-body text-center">
                  <div className="h1">
                    <i className="fa-brands fa-css3"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-md my-2">
              <div className="card bg-primary text-light shadow-lg">
                <div className="card-body text-center">
                  <div className="h1">
                    <i className="fa-brands fa-js"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-md my-2">
              <div className="card bg-primary text-light shadow-lg">
                <div className="card-body text-center">
                  <div className="h1">
                    <i className="fa-brands fa-bootstrap"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row row-cols-8 justify-content-center">
            <ul className="list-group list-group-horizontal text-center align-items-center text-nowrap row">
              <li className="list-group-item list-group-item-action list-group-item-primary m-1 rounded-pill col col-sm h3">
                HTML-5
              </li>
              <li className="list-group-item list-group-item-action list-group-item-primary m-1 rounded-pill col col-sm h3">
                CSS-3
              </li>
              <li className="list-group-item list-group-item-action list-group-item-primary m-1 rounded-pill col col-sm h3">
                SASS
              </li>
              <li className="list-group-item list-group-item-action list-group-item-primary m-1 rounded-pill col col-sm h3">
                Bootstrap
              </li>
              <li className="list-group-item list-group-item-action list-group-item-primary m-1 rounded-pill col col-sm h3">
                Python
              </li>
              <li className="list-group-item list-group-item-action list-group-item-primary m-1 rounded-pill col col-sm h3">
                C++
              </li>
              <li className="list-group-item list-group-item-action list-group-item-primary m-1 rounded-pill col col-sm h3">
                JavaScript-ES6
              </li>
              <li className="list-group-item list-group-item-action list-group-item-primary m-1 rounded-pill col col-sm h3">
                React.JS
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Languages;
