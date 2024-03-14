import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonalDetails from './pages/PersonalDetails';
import Progress from './components/ProgressBar';
import AadhaarUpload from './pages/AadhaarUpload';
import PanPage from './pages/PanUpload';
import SignaturePage from './pages/SignatureUpload';
import LoginPage from './pages/Login/Login';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LoginPage />
              </>
            }
          />
          <Route
            path="/*"
            element={
              <>
                <Progress />
                <Routes>
                  <Route path="/personaldetails" element={<PersonalDetails />} />
                  <Route path="/aadharcard" element={<AadhaarUpload />} />
                  <Route path="/pancard" element={<PanPage />} />
                  <Route path="/signature" element={<SignaturePage />} />
                </Routes>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
