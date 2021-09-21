import React from 'react';
import BreadApi from '../BreadApi';
import pic1  from '../Images/demo img.png'
import pic2  from '../Images/Pic1.png'
function Main() {
  
  

  
  return (
    <>
     <div className="middle">
      <div className="form mx-auto">
        <div className="intro">
          <div className="left">
            
              <img src={pic1}alt=" "/> 
            <div className="introBtn">
              <button className="imgBtn"> yoga</button>
              <button className="imgBtn"> wellness</button>
              <button className="imgBtn">fitness</button>
            </div>
          </div>
          <div className="right">
            <button type="button" className="btn btn-primary" id="rytBtn">Book Trial</button>
            <button type="button" className="btn btn-light" id="rytBtn">Contact Me</button>
          </div>
        </div>
        <h3> Jane Doe </h3>
        <p className="bio"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vero sapiente, harum
          veniam
          deleniti omnis provident, illum consectetur quisquam inventore voluptate, fugiat facilis qui sequi.
          Id nisi recusandae sint enim. Numquam mollitia totam molestias. </p>
          
        <div className="icons">
          <i className="fab fa-instagram fa-lg"></i>
          <i className="fab fa-facebook fa-lg "></i>
          <i className="fab fa-youtube fa-lg "></i>
          <i className="fab fa-twitter fa-lg "></i>
          <i className="fab fa-linkedin fa-lg "></i>
          <i className="fab fa-spotify  fa-lg"></i>
        </div>
        <div className="live">
          <div className="places">
          <i className="fas fa-map-marker-alt fa-lg "></i>
           <div className="liveHead">
            <p>Lives in <span className="place "> New delhi</span></p>
           </div>
         
        </div>
        <div className="places">
          <i className="fas fa-language fa-lg "></i> 
          <div className="liveHead">
            <p> Speaks <span className="place"> English </span> <span className="place">Hindi</span> <span className="place">Punjabi</span> </p>
          </div>
         
        </div>
        </div>
        <div className="demo">
          <div className="left">
            <h3>Check out my video</h3>
            <h3> about 30 min yoga</h3>
            <h3>for beginners</h3>
            <a  className="contactMe" href=" "> Contact Me </a>
          </div>
          <div className="right">
            <img src={pic2}alt=" "/>
          </div>
        </div>
        <div className="subscribe">
          <h6>Subscribe to my profile and never miss and update from me</h6>
         
          <form className="row gy-2 gx-3 align-items-center">

            <div className="col-auto">
              <label className="visually-hidden" for="autoSizingInputGroup">Username</label>
              <div className="input-group">
                <div className="input-group-text">@</div>
                <input type="text" className="form-control" id="autoSizingInputGroup"
                  placeholder="Enter your email here...."/>
              </div>
            </div>

            <div className="col-auto">
              <button type="submit" className="btn btn-primary ">Subscribe</button>
            </div>
          </form>
        </div>

      </div>
    </div>
    </>
  );
  }

export default Main;