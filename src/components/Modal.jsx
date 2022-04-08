import React from "react";

const Modal = () => {
  return (
    <div>
      <div
        class="modal fade"
        id="about"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="aboutLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="aboutLabel">
                Welcome to my site!
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body bg-light">
              <p class="lead py-2">This site is not meant to be fancy.</p>
              <p class="lead">
                It is to display certain concepts, like a modal button or
                utilizing flex and grid with bootstrap, and also to display some
                sample projects.
              </p>
              <h5>Take a look around!</h5>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
