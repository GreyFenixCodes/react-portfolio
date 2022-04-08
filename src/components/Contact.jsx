import React from "react";

const Contact = () => {
  return (
    <div>
      <section id="contact" className="bg-secondary text-warning text-center">
        <h1 className="pt-3">Contact Me!</h1>
        <p className="text-info">(oh wait, there's no backend built...)</p>
        <div className="container bg-secondary py-4 text-start">
          <form id="contactForm">
            <div className="mb-3">
              <label className="form-label" for="name">
                Name
              </label>
              <input
                className="form-control"
                id="name"
                type="text"
                placeholder="Name"
                data-sb-validations="required"
              />
              <div
                className="invalid-feedback"
                data-sb-feedback="name:required"
              >
                Name is required.
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label" for="emailAddress">
                Email Address
              </label>
              <input
                className="form-control"
                id="emailAddress"
                type="email"
                placeholder="Email Address"
                data-sb-validations="required, email"
              />
              <div
                className="invalid-feedback"
                data-sb-feedback="emailAddress:required"
              >
                Email Address is required.
              </div>
              <div
                className="invalid-feedback"
                data-sb-feedback="emailAddress:email"
              >
                Email Address Email is not valid.
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label" for="message">
                Message
              </label>
              <textarea
                name="message"
                className="form-control"
                id="message"
                type="text"
                placeholder="Message"
                data-sb-validations="required"
              />
              <div
                className="invalid-feedback"
                data-sb-feedback="message:required"
              >
                Message is required.
              </div>
            </div>

            <div className="d-none" id="submitSuccessMessage">
              <div className="text-center mb-3">
                Form submission successful!
              </div>
            </div>

            <div className="d-none" id="submitErrorMessage">
              <div className="text-center text-danger mb-3">
                Error sending message!
              </div>
            </div>

            <div className="d-grid">
              <button className="btn btn-outline-light btn-lg" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
