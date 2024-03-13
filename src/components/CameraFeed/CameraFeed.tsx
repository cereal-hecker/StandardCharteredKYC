import React, { useEffect, useRef, RefObject } from 'react';

interface CameraFeedProps {
  videoRef?: RefObject<HTMLVideoElement>;
}

const CameraFeed: React.FC<CameraFeedProps> = ({ videoRef }) => {
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const usedVideoRef = videoRef || localVideoRef; // Use passed ref if available

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          const video = usedVideoRef.current;
          if (video) {
            video.srcObject = stream;
            video.play();
          }
        })
        .catch((error) => {
          console.error("Error accessing the camera", error);
        });
    }
  }, [usedVideoRef]);

  return (
    <div className='relative'>
      <video ref={usedVideoRef}></video>
      <div style={{
        position: 'absolute',
        top: '10%', // Adjust these values as needed
        left: '10%',
        width: '80%', // Adjust width and height as needed
        height: '80%',
        border: '2px solid red', // Adjust border color and thickness as needed
        pointerEvents: 'none', // Ensures clicks go through to the video
      }}></div>
    </div>
  );
};

export default CameraFeed;