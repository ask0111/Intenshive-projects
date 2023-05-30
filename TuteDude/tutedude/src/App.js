
import './App.css';
import Dashboard from './pages/Dashboard/dashboard';
import DashboardR from './pages/Dashboard/dashboardR';
import Header from './pages/header/header';
import Service from './pages/services/service';


function App() {
  return (
    <div className="container">
      <Header />
      <div className="ct-ui-ux">
        <p>UI/UX &gt; Refer & Earn </p>
      </div>
      <div className="ct-section">
        <div className="ct-refs-sections">
          <Dashboard />
          <DashboardR />
        </div>
        <Service />
      </div>
      <div className="ct-enroll"><a href="#">Friends Who Enrolled</a></div>
      <div className="ct-tc"><a href="#">Terms & Conditions</a></div>
    </div>
  );
}

export default App;
