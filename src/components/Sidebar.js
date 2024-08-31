import React from 'react';
import { Nav } from 'react-bootstrap';

function Sidebar({ activeSection, setActiveSection }) {
  return (
    <div
      id="sidebar"
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
      style={{ width: '280px' }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4">Smart Dashboard</span>
      </a>
      <hr />
      <Nav variant="pills" className="flex-column mb-auto">
        <Nav.Link
          onClick={() => setActiveSection('live-feeds')}
          className={`text-white ${
            activeSection === 'live-feeds' ? 'active' : ''
          }`}
        >
          Live Feeds
        </Nav.Link>
        <Nav.Link
          onClick={() => setActiveSection('map')}
          className={`text-white ${activeSection === 'map' ? 'active' : ''}`}
        >
          Map
        </Nav.Link>
        <Nav.Link
          onClick={() => setActiveSection('alerts')}
          className={`text-white ${activeSection === 'alerts' ? 'active' : ''}`}
        >
          Alerts
        </Nav.Link>
        <Nav.Link
          onClick={() => setActiveSection('crime-records')}
          className={`text-white ${
            activeSection === 'crime-records' ? 'active' : ''
          }`}
        >
          Crime Records
        </Nav.Link>
        <Nav.Link
          onClick={() => setActiveSection('traffic-violations')}
          className={`text-white ${
            activeSection === 'traffic-violations' ? 'active' : ''
          }`}
        >
          Traffic Violations
        </Nav.Link>
        <Nav.Link
          onClick={() => setActiveSection('control-panel')}
          className={`text-white ${
            activeSection === 'control-panel' ? 'active' : ''
          }`}
        >
          Control Panel
        </Nav.Link>
      </Nav>
      <hr />
    </div>
  );
}

export default Sidebar;
