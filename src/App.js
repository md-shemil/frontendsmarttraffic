import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import NavbarComponent from './components/NavbarComponents'; // Ensure this path is correct
import LiveFeeds from './components/LiveFeeds';
import Map from './components/Map';
import Alerts from './components/Alerts';
import CrimeRecords from './components/CrimeRecords';
import TrafficViolations from './components/TrafficViolations';
import ControlPanel from './components/ControlPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('live-feeds');

  const renderSection = () => {
    switch (activeSection) {
      case 'traffic-violations':
        return <TrafficViolations />;
      case 'live-feeds':
        return <LiveFeeds />;
      case 'map':
        return <Map />;
      case 'alerts':
        return <Alerts />;
      case 'crime-records':
        return <CrimeRecords />;
      case 'control-panel':
        return <ControlPanel />;
      default:
        return <LiveFeeds />;
    }
  };

  return (
    <div>
      {/* Top Navbar */}
      <NavbarComponent activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Area */}
      <div style={{ paddingTop: '15vh' }}>
        <Container fluid>
          {renderSection()}
        </Container>
      </div>
    </div>
  );
}

export default App;
