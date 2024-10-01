import "./App.css";
import AppBar from "./AppBar";
import { Box } from "@mui/material";
import LazyHome from "./components/Home/Home.lazy";
import LazyAboutUs from "./components/AboutUs/AboutUs.lazy";
import LazyProjects from "./components/Projects/Projects.lazy";
import LazyCardDetails from "./components/CardDetails/CardDetails.lazy";
import LazyServices from "./components/Services/Services.lazy";
import LazyFooter from "./components/Footer/Footer.lazy";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const height = window.innerHeight;
  return (
    <Router>
      <Box sx={{ height: height }}>
        <AppBar />
        <Box className="App">
          <Routes>
            <Route path="/" element={<LazyHome />} />
            <Route path="/projects" element={<LazyProjects />} />
            <Route path="/projectDetails" element={<LazyCardDetails />} />
            <Route path="/aboutUs" element={<LazyAboutUs />} />
            <Route
              path="/services"
              element={<LazyServices />}
              errorElement={<LazyHome />}
            />
            <Route path="*" element={<LazyHome />} />
          </Routes>
        </Box>
        <LazyFooter />
      </Box>
    </Router>
  );
}

export default App;
