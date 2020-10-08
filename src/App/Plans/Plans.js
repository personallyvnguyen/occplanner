import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Plans.css';

class Plans extends Component {
  render() {
    return (
      <main>

        <div className="container">
          <div className="row">
            <div className="column col-4">
              <div className="header-text">Plans<br /></div>
            </div>
            <div className="column col-4" ><Link className="btn btn-lg plan-buttonstyle rounded-pill " data-toggle="modal" data-target="#exampleModal">Create a plan</Link>
            </div>


            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form action="/action_page.php">

                      <label for="fname">First Name</label>
                      <input type="text" id="fname" name="firstname" placeholder="Your name..">

                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name..">

                          <label for="country">Country</label>
                          <select id="country" name="country">
                            <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                          </select>

                          <input type="submit" value="Submit">
  </form>

                   </div>
                        <div className="modal-footer column col-4">
                          <button className="btn btn-block btn-lg modal-buttonstyle">Create</button>
                        </div>
                </div>
              </div>
                  </div>


                </div>
                <div className="row">
                  <div className="main-font-smaller col-sm-8 ">No existing plan.<br />
                    <div>
                      <Link className="btn myplan-buttonstyle btn-block " to="/exampleplan">
                        <div><h2 className="font-weight-bold">My Plan  </h2></div>
                        <div><h5 className="font-weight-normal">Spring 2021</h5></div>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
              <script>
              </script>

      </main>
    );
  }
}

export default Plans;
