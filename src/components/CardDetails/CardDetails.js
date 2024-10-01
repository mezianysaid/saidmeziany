import React from "react";
import {
  Box,
  Button,
  CardActions,
  Grid,
  Typography,
  Divider,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./details.scss";
const CardDetails = ({ props }) => (
  <>
    <Box className="projectDetails">
      <Box sx={{ height: 100 }}>
        <svg viewBox="0 0 500 200">
          <path
            d="M 0 30 C 150 100 280 0 500 20 L 500 0 L 0 0"
            fill="#012a4a"
          ></path>
        </svg>
      </Box>
      <Card
        sx={{
          display: "flex",
          margin: 5,
          minHeight: 400,
          borderTopRightRadius: 40,
          borderBottomLeftRadius: 40,
        }}
      >
        <Grid container>
          <Grid item lg={6} md={6} xs={12}>
            {/* <Box sx={{ display: 'flex', flexDirection: 'column' }}> */}
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5" className="techo">
                {props.data.title.toUpperCase()}
              </Typography>
              <Divider />
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {props.data.description}
              </Typography>
            </CardContent>
            <Box>
              <Typography variant="h5" className="techo">
                Technologies:
              </Typography>
              {/* <Divider/> */}
              {props.data.tools.map((item) => (
                <Button
                  variant="outlined"
                  title={item}
                  disabled
                  sx={{
                    color: "#012a4a",
                    borderColor: "#012a4a",
                    marginLeft: 1,
                    fontWeight: 600,
                    mt: 1,
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
            {/* <Box> */}
            <CardActions sx={{ flex: 1, marginTop: 5 }}>
              <Button
                variant="contained"
                className="githubbutton"
                href={props.data.link}
                target="_blank"
                title="See the Code on github"
              >
                See the Code on github
              </Button>
            </CardActions>
            {/* </Box> */}
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <CardMedia
              component="img"
              width="90%"
              height="100%"
              image={props.data.image}
              alt="Live from space album cover"
            />
          </Grid>
        </Grid>
      </Card>
    </Box>
    <Box
      sx={{
        marginTop: 10,
        marginInline: 5,
        marginBottom: 10,
        paddingBottom: 10,
      }}
      className="forMoreDetails"
    >
      <Card sx={{ borderTopRightRadius: 40, borderBottomLeftRadius: 40 }}>
        <CardContent>
          <Typography component="div" variant="h5" className="techo">
            More Details:
          </Typography>
          <Divider />
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {props.data.description}
          </Typography>
          {props.data.video ? (
            <Box className="video">
              <video
                controls
                muted
                autostart
                autoPlay
                src={props.data.video}
                type="video/mp4"
                width="100%"
                height={500}
              />
            </Box>
          ) : (
            <></>
          )}
        </CardContent>
      </Card>
    </Box>
  </>
);

CardDetails.propTypes = {};

CardDetails.defaultProps = {};

export default CardDetails;
