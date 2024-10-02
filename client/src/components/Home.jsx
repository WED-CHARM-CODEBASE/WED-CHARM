import React from "react";
import "./Home.css";
import { Button } from "@chakra-ui/react";
import mandapVideo from "../assets/home_video.mp4";
import couple_image1 from '../assets/couple_image1.webp';
import couple_image2 from '../assets/couple_image2.webp';
import couple_image4 from '../assets/couple_image4.webp';

const Home = () => {
  const handleVideoLoad = (event) => {
    event.target.playbackRate = 0.8;
  }

  const randomPic = () => {
    const pictures = [couple_image1, couple_image2,couple_image4]; // Use an array
    const randomIndex = Math.floor(Math.random() * pictures.length);
    return pictures[randomIndex];
  }

  return (
    <div className="home-page">
      <video
        src={mandapVideo}
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
            src={randomPic()}
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
