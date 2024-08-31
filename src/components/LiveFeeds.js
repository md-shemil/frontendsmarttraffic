import React from 'react';

function LiveStream() {
  return (
    <div>
      <h2>LIVE STREAM</h2>
      <video src="http://localhost:5000/video_feed" width="100%" height="auto" autoPlay muted></video>
    </div>
  );
}

export default LiveStream;
