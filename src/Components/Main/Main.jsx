import React from "react";
import trophy from "../../assets/1.png";
import prize from "../../assets/2.png";
import tools from "../../assets/3.png";
import "./Main.css";

function Main() {
  return (
    <div id="container">
      <div id="award-section">
        <div id="trophy-container">
          <img src={trophy} alt="trophy" />
        </div>
        <div id="award-details">
          <h2>
            C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
            4th time.
          </h2>
          <p>
            • C.R.I's energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </p>
          <p>
            • C.R.I is the highest contributor in the country for the projects
            of EESL(Energy Efficiency Service Limited) to replace the old
            inefficient pumps with 5 star rated energy efficient smart pumps
            with IoT enabled control panel.
          </p>
          <img id="prize" src={prize} alt="prize" />
          <p>
            Government of India hass awarded the
            <b>"National Energy Conservation Award 2018"</b>.Mr.G. Selvaraj,
            joint Managing Director of C.R.I. Group received the award from Smt.
            Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
            Honorable Minister of State.
          </p>
        </div>
      </div>
      <div id="saving-section">
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF THE MORE THAN 9,000 MILLION UNITS
          OF POWER FOR THE NATION.
        </p>
        <img id="tools" src={tools} alt="tools" />
        <p>
          Valves - Pumps - IoT drives & Controllers - Wires & Cables - Solar
          System - Motors
        </p>
        <hr id="hr" />
        <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS </h3>
        CHEMICALS & PROCESS| POWER| WATER & WASTE WATER| SUGARS & DISTILLERIES|
        PAPER & PULP| MARINES & DEFENCE| METAL & MINING| FOOD & BEVERAGE|
        PETROCHEMICAL & REFINERIES| SOLAR| BUIDING| HVAC| FIRE FIGHTING|
        AGRICULTURE & RESIDENTAL
      </div>
      <div id="box" >
      <div>Toll free 1800 200 1234</div>
      <div>www.facebook.com/cripumps</div>
      <div>www.crigroups.com</div>
    </div>
    </div>
  );
}

export default Main;
