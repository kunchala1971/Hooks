import React from 'react';
import ReactPlayer from 'react-player';

const ClassVideoPlayer = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <div className="relative" style={{ paddingTop: '56.25%' }}>
        <ReactPlayer
          url="Prog2.mp4"
          controls
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </div>
    </div>
  );
};

export default ClassVideoPlayer;
