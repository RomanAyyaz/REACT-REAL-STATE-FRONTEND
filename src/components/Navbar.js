import React from 'react'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand px-5 fw-bold" href="#">Real-State</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className={`nav-item px-3`} >
              <a className={`nav-link text-${props.mode==='light'?"dark":'light'}`} aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item px-3">
              <a className={`nav-link text-${props.mode==='light'?"dark":'light'}`} href="#">Agent</a>
            </li>
            <li className="nav-item px-3">
              <a className={`nav-link text-${props.mode==='light'?"dark":'light'}`} href="#">Contact Us</a>
            </li>
            <li className="nav-item px-3">
              <a className={`nav-link text-${props.mode==='light'?"dark":'light'}`} href="#" tabIndex="-1" aria-disabled="true"
                >Book Online</a
              >
            </li>
          </ul>
        </div>
        <div className={`form-check mx-2 form-switch text-${props.mode==='light'?"dark":'light'}`}>
      <input className="form-check-input" type="checkbox" onClick={props.toggle} id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
</div>
      </div>
    </nav>
    </>
  )
}
