import logo from './logo.svg';
import './App.css';
import GoogleDocViewer from './components/GoogleDoc';
import PdfViewer from './components/Pdf';

function App() {
  return (
    <div className="App">
      <h1>My Google Doc</h1>
      {/* <GoogleDocViewer docUrl="https://docs.google.com/document/d/197tLyVS72WZXzb-qLV0qxLNeELuaLKozoTdtmujjj-M/edit?usp=sharing" /> */}
      <PdfViewer />
    </div>
  );
}

export default App;
