import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavBar";
import CustomFooter from "./components/CustomFooter";
import Welcome from "./components/Welcome";
import LatestReleases from "./components/LatestReleases";

function App() {
  return (
    <div>
      <CustomNavbar subtitle="Read the newest Books!" />

      <Welcome />
      <LatestReleases />

      <CustomFooter />
    </div>
  );
}

export default App;
