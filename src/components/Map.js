import React, { useEffect } from 'react';

function Map() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC_XvarMHkUNZ3ppM_DKsMFJxj0F71Q92M`;
    script.async = true;
    document.head.appendChild(script);

    window.initMap = function () {
      const location = { lat: 12.8236, lng: 80.0453 }; // Chennai ECR coordinates
      const map = new window.google.maps.Map(document.getElementById('googleMap'), {
        zoom: 12,
        center: location,
      });
      new window.google.maps.Marker({
        position: location,
        map: map,
      });
    };

    return () => {
      delete window.initMap;
    };
  }, []);

  return (
    <div>
      <h2>INTERACTIVE MAP</h2>
      <div id="googleMap" style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
}

export default Map;
