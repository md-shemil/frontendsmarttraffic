import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function AdjustTrafficLight() {
  // State to track which mode is currently selected
  const [mode, setMode] = useState('adaptiveTiming');

  // Function to render the form based on the selected mode
  const renderForm = () => {
    switch (mode) {
      case 'adaptiveTiming':
        return (
          <div>
            <p class="message">Now traffic is on adaptive timing control.</p>
          </div>
        );
      case 'prioritySettings':
        return (
          <Form.Group controlId="prioritySettings">
            <Form.Label>Priority Settings</Form.Label>
            <Form.Control as="select">
              <option>Emergency Vehicles</option>
              <option>Public Transport</option>
              <option>VIP Escort</option>
            </Form.Control>
          </Form.Group>
        );
      case 'timingSettings':
        return (
          <Form.Group controlId="timingSettings">
            <Form.Label>Timing Settings</Form.Label>
            <Form.Control type="time" placeholder="Set new timing" />
          </Form.Group>
        );
      case 'manualControl':
        return (
          <Form.Group controlId="manualControl">
            <Form.Label>Manual Control</Form.Label>
            <Button variant="secondary" onClick={() => alert('Red Light activated')}>
              Red Light
            </Button>
            <Button variant="secondary" onClick={() => alert('Yellow Light activated')}>
              Yellow Light
            </Button>
            <Button variant="secondary" onClick={() => alert('Green Light activated')}>
              Green Light
            </Button>
          </Form.Group>
        );
      default:
        return null;
    }
  };

  return (
    <div className="adjust-traffic-light">
      <h2>ADJUST TRAFFIC LIGHTS</h2>
      <Form>
        {/* Mode Selection */}
        <Form.Group class="formdata" controlId="modeSelection">
          <Form.Label>Select Mode</Form.Label>
          <Form.Control as="select" value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="adaptiveTiming">Adaptive Timing</option>
            <option value="prioritySettings">Priority Settings</option>
            <option value="timingSettings">Timing Settings</option>
            <option value="manualControl">Manual Control</option>
          </Form.Control>
        </Form.Group>

        {/* Render the selected form */}
        <div className="mode-form mt-3">
          {renderForm()}
        </div>

        <Button variant="primary" className="mt-3">Save Changes</Button>
      </Form>
    </div>
  );
}

export default AdjustTrafficLight;
