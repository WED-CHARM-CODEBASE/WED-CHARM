import React from "react";
import "./Home.css";
import { Button } from "@chakra-ui/react";

const Home = () => {
  const handleVideoLoad = (event)=>{
    event.target.playbackRate = 0.8;
  }
  return (
    <div className="home-page">
      <video
        src={require("../assets/home_video.mp4")}
        autoPlay
        loop
        muted
        className="video-background"
        onLoadedMetadata={handleVideoLoad}
      >
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay">
        <div className="video-overlay-content">
          <img
            width="700"
            src={require("../assets/couple_image.webp")}
            alt="Wedding Scene"
          />
        </div>
        <div className="home-buttons">
          <Button colorScheme="orange">Explore Plans</Button>
          <Button ml={10} colorScheme="gray">Profile</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
