import React from 'react'

export default function Footer() {
  return (
    <>
    <div style={{backgroundColor: "#0a4275"}}>
    <div className="fluid-container mt-2" >
        <footer className="text-center text-white" style={{backgroundColor: "#0a4275"}}/>
          <div className="container p-4 pb-0">
            <section className="">
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3 text-white">Register for free</span>
                <button type="button" className="btn btn-outline-light btn-rounded">
                  Sign up!
                </button>
              </p>
            </section>
          </div>
          <div className="text-center text-white p-3">
            © 2022 Copyright:
            <a className="text-white">Roman Ayyaz</a>
          </div>
    </div>
  </div>
    </>
  )
}
