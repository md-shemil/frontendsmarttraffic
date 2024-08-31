import React, { useEffect, useState } from 'react';

function SafetyAlerts() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch safety alerts data from the dummy API
    fetch('/api/dummy-safety-alerts') // Update this URL with your actual API endpoint when available
      .then(response => response.json())
      .then(data => {
        setAlerts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching safety alerts:', err);
        setError('Failed to load safety alerts');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h4 className="text-primary">Safety Alerts</h4>
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      <ul className="list-group mt-3">
        {alerts.length === 0 ? (
          <li className="list-group-item">No safety alerts available</li>
        ) : (
          alerts.map((alert, index) => (
            <li key={index} className="list-group-item bg-dark text-white">
              {`${alert.message} (${new Date(alert.date).toLocaleString()})`}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default SafetyAlerts;
