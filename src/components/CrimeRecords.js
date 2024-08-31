import React, { useEffect, useState } from 'react';

function CrimeRecords() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch crime records data from the dummy API
    fetch('/api/dummy-crime-records') // Update this URL with your actual API endpoint when available
      .then(response => response.json())
      .then(data => {
        setRecords(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching crime records:', err);
        setError('Failed to load crime records');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h4 className="text-primary">Crime Records</h4>
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      <table className="table table-dark mt-3">
        <thead>
          <tr>
            <th>Location</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {records.length === 0 ? (
            <tr>
              <td colSpan="3">No crime records available</td>
            </tr>
          ) : (
            records.map((record, index) => (
              <tr key={index}>
                <td>{record.location}</td>
                <td>{record.description}</td>
                <td>{new Date(record.date).toLocaleString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CrimeRecords;
