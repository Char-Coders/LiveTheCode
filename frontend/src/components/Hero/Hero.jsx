import React from "react";
import "./Hero.css";
// import { Link } from "react-router-dom";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Hero() {
  return (
    <section className="home" id="home">
        <div className="row min-vh-100 align-items-center text-md-left">
            <img className="col-md-6 pr-md-5" src={"/Online Doctor.gif"} alt="" />
          <div className="col-md-6 pl-md-5 content">
            <h2>Get <span>Medical </span>Advice<span> Anytime</span>, Anywhere.</h2>
            <h3>Chat with our AI doctor chatbot to get <br />instant medical information and assistance.</h3>
            <a href="/chat"><button className="button">Chat Now</button></a>
          </div>
        </div>
    </section>
  );
}

export default Hero;
