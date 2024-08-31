import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import LiveFeeds from './components/LiveFeeds';
import Map from './components/Map';
import Alerts from './components/Alerts';
import CrimeRecords from './components/CrimeRecords';
import SafetyAlerts from './components/SafetyAlerts';
import ControlPanel from './components/ControlPanel';
import TrafficViolations from './components/TrafficViolations';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('live-feeds');

  return (
    <div className="d-flex">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="container-fluid p-4" id="main-content">
        {activeSection === 'live-feeds' && <LiveFeeds />}
        {activeSection === 'map' && <Map />}
        {activeSection === 'alerts' && <Alerts />}
        {activeSection === 'crime-records' && <CrimeRecords />}
        {activeSection === 'manage-safety-alerts' && <SafetyAlerts />}
        {activeSection === 'traffic-violations' && <TrafficViolations />}
        {activeSection === 'control-panel' && <ControlPanel />}
      </div>
    </div>
  );
}

export default App;
