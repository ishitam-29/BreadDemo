import React from 'react';
import BreadApi from '../BreadApi';
import Card from './Card';
// import Carousel from 'react-elastic-carousel';
 import Carousel from "react-elastic-carousel";
 //import "react-responsive-carousel/lib/styles/carousel.min.css";
function Footer(props) {
  const breakPoints=[
    {width:1, itemsToShow:1},
    {width:550, itemsToShow:2},
    {width:768, itemsToShow:3},
    {width:1200, itemsToShow:3}
  ]
  
  return (

    <>
    <div className="scroll bg-primary">
      
      <div className="options">
       
        <div className="OpImgs">
        {/* <img src="https://unsplash.com/photos/FP7cfYPPUKM" alt={props.text}/> */}
        <h5 className="browsers mx-auto my-auto">  BROWSE ALL MY OFFERINGS </h5>
          <Carousel breakPoints={breakPoints}>
          {BreadApi.map(item=><img className="pics" key={item.id} src={item.url} alt={item.text}/>) }
         </Carousel> *
    
        </div>
        
      </div>
      <div className="leftFoot">
    <p>Powered by Bread </p>
    </div>
    <div className="rightFoot m-lg-auto">
    <p>All rights reserved</p>
    <p>Terms privacy About</p>
    </div>
    </div>
    
    <div className="footer">

    </div>
    </>
  );
  }

export default Footer;
