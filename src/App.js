import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavBar";
import CustomFooter from "./components/CustomFooter";
import Welcome from "./components/Welcome";
import LatestReleases from "./components/LatestReleases";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <CustomNavbar subtitle="Read the newest Books!" />

      <Welcome />
      <Container fluid className="mb-5">
        <LatestReleases />
      </Container>
      <CustomFooter />
    </div>
  );
}

export default App;
