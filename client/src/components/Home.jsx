import React from 'react';
import './Home.css';
import { Button } from '@chakra-ui/react';
import mandapVideo from '../assets/home_video.mp4';
import couple_image1 from '../assets/couple_image1.webp';
import couple_image2 from '../assets/couple_image2.webp';
import couple_image4 from '../assets/couple_image4.webp';
import chevron_right_icon from '../assets/chevron_right_icon.png';
import add_icon from '../assets/add_icon.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleVideoLoad = (event) => {
    event.target.playbackRate = 0.8;
  };

  const randomPic = () => {
    const pictures = [couple_image1, couple_image2, couple_image4]; // Use an array
    const randomIndex = Math.floor(Math.random() * pictures.length);
    return pictures[randomIndex];
  };

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
          <img src={randomPic()} alt="Wedding Scene" />
        </div>
        <div className="video-overlay-right">
          <div className="home-right-text">
            <p className="home-right-text-fp">Plan Your Wedding With</p>
            <h1>Wed Charm</h1>
            <p className="home-right-text-sp">
              Turning Your Wedding Dreams Into Reality With AI
            </p>
          </div>
          <div className="home-buttons">
            <Button mt={5} colorScheme="orange" className="home-buttons-fbt">
              Explore <img width="27" src={chevron_right_icon} alt=">" />
            </Button>
            <Button
              mt={5}
              ml={10}
              colorScheme="gray"
              onClick={() => {
                navigate('/plan-wedding');
              }}
            >
              Plan Wedding <img width="27" src={add_icon} alt="+" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
