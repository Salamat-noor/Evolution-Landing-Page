import React from "react";
import "./Background.css";

import Video1 from "../../Assets/video1.mp4";
import Img1 from "../../Assets/image1.png";
import Img2 from "../../Assets/image2.png";
import Img3 from "../../Assets/image3.png";

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="background fade-In" autoPlay loop muted>
        <source src={Video1} type="video/mp4"></source>
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={Img1} className="background fade-In" alt="" />;
  } else if (heroCount === 1) {
    return <img src={Img2} className="background fade-In" alt="" />;
  } else if (heroCount === 2) {
    return <img src={Img3} className="background fade-In" alt="" />;
  }
};

export default Background;
