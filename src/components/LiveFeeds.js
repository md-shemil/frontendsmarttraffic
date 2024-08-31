import React, { useEffect, useRef } from 'react';

function LiveFeeds() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          videoRef.current.srcObject = stream;
        })
        .catch(err => console.error('Error accessing camera:', err));
    }
  }, []);

  return (
    <div>
      <h4 className="text-primary">Live Camera Feeds</h4>
      <div className="video-feed mt-3">
        <video ref={videoRef} autoPlay style={{ width: '100%', height: 'auto' }}></video>
      </div>
    </div>
  );
}

export default LiveFeeds;
