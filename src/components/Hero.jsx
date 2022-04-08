import React from 'react'

const Hero = () => {
  return (
    <div>
         <section className="bg-dark text-light p-5 text-center text-sm-start">
        <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between">
                <div className="px-3">
                    <h1>Josh Kladis <span className="text-warning">aka</span> Grey Fenix</h1>
                    <p className="lead my-2">Full stack programmer focusing on front-end development</p>
                    <button className="btn btn-secondary btn-lg my-4" data-bs-toggle="modal" data-bs-target="#about">About This Site</button>
                </div>
                <img id='grey' className="image-fluid img-thumbnail d-none d-md-block rounded-circle" src="img/Grey.jpg" alt="" srcset=""/>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Hero