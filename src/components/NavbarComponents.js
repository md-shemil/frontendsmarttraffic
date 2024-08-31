import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


function NavbarComponent({ activeSection, setActiveSection }) {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" style={{ width: '100%', height: '15vh' }}>
      <Navbar.Brand style={{ fontSize: '24px' }}></Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link
          onClick={() => setActiveSection('live-feeds')}
          className={`text-white ${activeSection === 'live-feeds' ? 'active' : ''}`}
        >
          LIVE FEEDS
        </Nav.Link>
        <Nav.Link
          onClick={() => setActiveSection('map')}
          className={`text-white ${activeSection === 'map' ? 'active' : ''}`}
        >
          MAP
        </Nav.Link>
        <Nav.Link
          onClick={() => setActiveSection('alerts')}
          className={`text-white ${activeSection === 'alerts' ? 'active' : ''}`}
        >
          ALERTS
        </Nav.Link>
        <Nav.Link
          onClick={() => setActiveSection('crime-records')}
          className={`text-white ${activeSection === 'crime-records' ? 'active' : ''}`}
        >
          CRIME RECORDS
        </Nav.Link>
        <Nav.Link
          onClick={() => setActiveSection('traffic-violations')}
          className={`text-white ${activeSection === 'traffic-violations' ? 'active' : ''}`}
        >
          TRAFFIC VIOLATIONS
        </Nav.Link>
        <Nav.Link
          onClick={() => setActiveSection('control-panel')}
          className={`text-white ${activeSection === 'control-panel' ? 'active' : ''}`}
        >
          CONTROL PANEL
        </Nav.Link>
      </Nav>
      <Navbar.Text className="text-light ml-3 ">
        Date: {new Date().toLocaleDateString()}<br />
        Time: {new Date().toLocaleTimeString()}
      </Navbar.Text>
    </Navbar>
  );
}

export default NavbarComponent;
