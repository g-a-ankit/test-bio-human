import logo from "./logo.svg";
import "./App.css";
import Helmet from "react-helmet";

function App() {
  return (
    <>
      <Helmet></Helmet>
      <iframe
        id="myWidget"
        src="https://human.biodigital.com/widget/?m=cochlear_implant&dk=388e873b30a77e3f6d78ea71ed0e89a6a02a7a43"
        width="1500vh"
        height="1000vh"
      ></iframe>
      <script src="https://developer.biodigital.com/builds/api/2/human-api.min.js"></script>
    </>
  );
}

export default App;
