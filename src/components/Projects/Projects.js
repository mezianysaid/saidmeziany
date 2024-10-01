import React from "react";
import "./Projects.scss";
import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Images/logo.PNG";
import {
  deepLearningProjects,
  WebDevProjects,
  mobileDevProjects,
} from "../index";
const Projects = ({ height }) => {
  const Navigate = useNavigate();
  const navigation = (path, item) => {
    Navigate(`${path}`, { replace: true, state: { item } });
  };
  return (
    <Box className="projects-container">
      <Box sx={{ height: 110 }}>
        <svg viewBox="0 0 500 200">
          <path
            d="M 0 30 C 150 100 280 0 500 20 L 500 0 L 0 0"
            fill="#012a4a"
          ></path>
        </svg>
      </Box>
      <Card className="sectionName" style={{ marginTop: 40 }}>
        Web Applications :
      </Card>
      <Box className="projects">
        <Grid container xs={12}>
          {WebDevProjects.map((item) => (
            <Grid item lg={4} md={4} sm={6} xs={12} key={item.title}>
              <Card
                className="cardP"
                sx={{ borderTopRightRadius: 40, borderBottomLeftRadius: 40 }}
                onClick={() => navigation("/projectDetails", item)}
              >
                <img src={item.image} alt={logo} width="100%" height="100%" />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ************************************** */}
      <Card className="sectionName">Mobile Applications: </Card>

      <Box className="projects">
        <Grid container xs={12}>
          {mobileDevProjects.map((item) => (
            <Grid item lg={4} md={4} sm={6} xs={12} key={item.title}>
              <Card
                className="cardP"
                sx={{ borderTopRightRadius: 40, borderBottomLeftRadius: 40 }}
                onClick={() => navigation("/projectDetails", item)}
              >
                <img src={item.image} alt={logo} width="100%" height="100%" />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* ********************************************************* */}
      <Card className="sectionName">Deep Learning Applications: </Card>

      <Box className="projects">
        <Grid container xs={12}>
          {deepLearningProjects.map((item) => (
            <Grid item lg={4} md={4} sm={6} xs={12} key={item.title}>
              <Card
                className="cardP"
                sx={{ borderTopRightRadius: 40, borderBottomLeftRadius: 40 }}
                onClick={() => navigation("/projectDetails", item)}
              >
                <img src={item.image} alt={logo} width="100%" height="100%" />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
