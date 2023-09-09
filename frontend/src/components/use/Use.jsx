import React from 'react'
import "./Use.css";

function Use() {
  return (
    <section id="uses">
      <span className="useTitle">How to Use Medimate</span>
      <span className="useDecs">
      Using MediMate is quick and easy. Here's a simple guide to get started:
      </span>
      <div className="useBars">
        <div className="useBar">
          {/* <img src={img1} className="useBarImg"/> */}
          <div className="useBarText">
            <h2>Step 1</h2>
            <p>Click the "Chat Now" button above or visit our website.</p>
          </div>
        </div>
        <div className="useBar">
          {/* <img src={img2} className="useBarImg"/> */}
          <div className="useBarText">
            <h2>Step 2</h2>
            <p>
            Introduce yourself and briefly describe your health concern or question.
            </p>
          </div>
        </div>
        <div className="useBar">
          {/* <img src={img3} className="useBarImg"/> */}
          <div className="useBarText">
            <h2>Step 3</h2>
            <p>Medimate will analyze your input and provide relevant medical information and recommendations.</p>
          </div>
        </div>
        <div className="useBar">
          {/* <img src={img3} className="useBarImg"/> */}
          <div className="useBarText">
            <h2>Step 4</h2>
            <p>Feel free to ask follow-up questions or request additional details as needed.</p>
          </div>
        </div>
        <div className="useBar">
          {/* <img src={img3} className="useBarImg"/> */}
          <div className="useBarText">
            <h2>Step 5</h2>
            <p>Medimate is available 24/7, so you can chat anytime you require medical assistance.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Use
