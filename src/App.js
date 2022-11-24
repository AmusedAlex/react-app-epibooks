import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavBar";
import CustomFooter from "./components/CustomFooter";
import Welcome from "./components/Welcome";
import LatestReleases from "./components/LatestReleases";
import horror from "./data/horror.json";
import SingleBook from "./components/SingleBook";

function App() {
  return (
    <div>
      <CustomNavbar subtitle="Read the newest Books!" />

      <Welcome />
      <SingleBook book={horror[0]} />
      <LatestReleases />

      <CustomFooter />
    </div>
  );
}

export default App;
