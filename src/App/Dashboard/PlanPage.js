import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './PlanPage.css';

class PlanPage extends Component {
  render() {
    return (
      <main>
        <div className="plan-page">
          <div className="row">
            <div className="column col-sm-3 plan-header-text">
              My Plan
            </div>
            <div className="column col-sm-3 main-font-smaller-plan-page padding-70px 0">
              Spring 2021
            </div>
            <div className="column col-2 main-font-smaller-plan-page padding-70px 0" >
              <div >Classes: 0</div>
            </div>
            <div className="column col-2 main-font-smaller-plan-page padding-70px 0">
              <div>Units: 0</div>
            </div>
            <div className="column col-2" >
              <div><Link className="btn btn-lg planpage-buttonstyle " to="/exampleplan">+ New Class</Link></div>
            </div> 
          </div>
          <div>
            <hr class="horizontal-line"/>
          </div>
          <div className="row">
            <div className="main-font-smaller-plan-page col-sm-6">No classes added yet.<br /></div>
          </div>
        </div>
      </main>
    );
  }
}

export default PlanPage;
