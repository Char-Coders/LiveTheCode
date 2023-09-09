import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
      <div className="features" id="features">
        <span className="featuresTitle">Features</span>
        <div className="row">
          <div className="text-col">
            <h2>24/7 Availability</h2>
            <p>
            Our AI chatbot is available around the clock to answer your health-related queries.
            </p>
          </div>
          <div className="img-col">
            <img src={"/img1.png"} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="img-col">
            <img src={"/img2.png"} alt="" />
          </div>
          <div className="text-col">
            <h2>Personalized Recommendations</h2>
            <p>
            Receive personalized health recommendations based on your symptoms and medical history.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="text-col">
            <h2>Secure and Confidential</h2>
            <p>
            Your health data is kept secure and confidential, ensuring your privacy.
            </p>
          </div>
          <div className="img-col">
            <img src={"/img3.png"} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="img-col">
            <img src={"/img4.png"} alt="" />
          </div>
          <div className="text-col">
            <h2>Medicine And Home Remedies</h2>
            <p>
            Chat with Medimate to explore a world of medicine and home remedies for a healthier life.
            </p>
          </div>
        </div>
      </div>
  );
}

export default Home;
