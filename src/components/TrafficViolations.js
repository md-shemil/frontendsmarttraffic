import React, { useEffect, useState } from 'react';

function TrafficViolations() {
  const [violations, setViolations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch traffic violations data from the API
    fetch('/api/traffic-violations') // Update this URL with your actual API endpoint when available
      .then(response => response.json())
      .then(data => {
        setViolations(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching traffic violations:', err);
        setError('Failed to load traffic violations');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>TRAFFIC VIOLATIONS</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <table className="table table-dark mt-3">
        <thead>
          <tr>
            <th>Vehicle Number</th>
            <th>Violation Type</th>
            <th>Penalty Amount</th>
          </tr>
        </thead>
        <tbody>
          {violations.length === 0 ? (
            <tr>
              <td colSpan="3">No traffic violations available</td>
            </tr>
          ) : (
            violations.map((violation, index) => (
              <tr key={index}>
                <td>{violation.vehicleNumber}</td>
                <td>{violation.violationType}</td>
                <td>{violation.penaltyAmount}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TrafficViolations;
