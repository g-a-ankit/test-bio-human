import logo from "./logo.svg";
import "./App.css";
import Helmet from "react-helmet";

function App() {
  return (
    <>
      <Helmet></Helmet>
      <div style={{ width: "100%", height: "100vh" }}>
        <iframe
          id="myWidget"
          src="https://human.biodigital.com/widget/?m=cochlear_implant&dk=388e873b30a77e3f6d78ea71ed0e89a6a02a7a43"
          width="100%"
          height="100%"
        ></iframe>
        <script src="https://developer.biodigital.com/builds/api/2/human-api.min.js"></script>
      </div>
    </>
  );
}

export default App;
