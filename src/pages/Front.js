import React from 'react'
import "./Front.css";
function Front() {
    return (
        <div>
  {/* JQuery */}
  {/* TweenMax - GSAP */}
  <div className="navigation-wrapper">
    <div className="project-preview-wrapper">
      <div className="project-preview" />
    </div>
    <ul className="navigation-list">
      <li className="navigation-item">
        <a className="navigation-link navigation-link-1" href="#">
          <span className="span_data"data-text="Airbnb">Airbnb</span>
        </a>
      </li>
      <div className="project-overlay" />
      <li className="navigation-item">
        <a className="navigation-link navigation-link-2" href="#">
          <span className="span_data" data-text="Netflix">Netflix</span>
        </a>
      </li>
      <li className="navigation-item">
        <a className="navigation-link navigation-link-3" href="#">
          <span className="span_data" data-text="Amazon">Amazon</span>
        </a>
      </li>
      <li className="navigation-item">
        <a className="navigation-link navigation-link-4" href="#">
          <span data-text="Canals">Canals</span>
        </a>
      </li>
      <li className="navigation-item">
        <a className="navigation-link navigation-link-5" href="#">
          <span data-text="Asterisks">Asterisks</span>
        </a>
      </li>
      <li className="navigation-item">
        <a className="navigation-link navigation-link-6" href="#">
          <span data-text="Charger">Charger</span>
        </a>
      </li>
      <li className="navigation-item">
        <a className="navigation-link navigation-link-7" href="#">
          <span data-text="Unclocked">Unclocked</span>
        </a>
      </li>
      <li className="navigation-item">
        <a className="navigation-link navigation-link-8" href="#">
          <span data-text="Craft">Craft</span>
        </a>
      </li>
    </ul>
  </div>
  <div className="progressbar" />
</div>

    )
}

export default Front

