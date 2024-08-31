import React, { useEffect, useState } from 'react';

function Alerts() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch alerts data from the dummy API
    fetch('/api/dummy-alerts')  // Update this URL with your actual API endpoint when available
      .then(response => response.json())
      .then(data => {
        setAlerts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching alerts:', err);
        setError('Failed to load alerts');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>ALERTS PANEL</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <ul className="list-group mt-3">
        {alerts.length === 0 ? (
          <li className="list-group-item">No alerts available</li>
        ) : (
          alerts.map((alert, index) => (
            <li key={index} className="list-group-item bg-dark text-white">
              {alert.message} ({new Date(alert.date).toLocaleString()})
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Alerts;
