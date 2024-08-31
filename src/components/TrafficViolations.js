import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function TrafficViolations() {
  const [violations, setViolations] = useState([]);

  useEffect(() => {
    // Fetch the traffic violations from the backend API
    fetch('http://localhost:5000/api/traffic-violations')
      .then(response => response.json())
      .then(data => setViolations(data))
      .catch(error => console.error('Error fetching traffic violations:', error));
  }, []);

  return (
    <div>
      <h4 className="text-primary">Traffic Violations</h4>
      <Table striped bordered hover variant="dark" className="mt-3">
        <thead>
          <tr>
            <th>Vehicle Number</th>
            <th>Violation Type</th>
            <th>Penalty Amount</th>
          </tr>
        </thead>
        <tbody>
          {violations.length > 0 ? (
            violations.map((violation, index) => (
              <tr key={index}>
                <td>{violation.vehicle_number}</td>
                <td>{violation.violation_type}</td>
                <td>{violation.penalty_amount}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">No traffic violations recorded.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default TrafficViolations;
