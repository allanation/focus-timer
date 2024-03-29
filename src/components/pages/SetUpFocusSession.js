import classes from "./SetUpFocusSession.module.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import fclasses from "../layout/Footer.module.css";
import Header from "../layout/Header";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { useNavigate } from "react-router-dom";
const courses = [
  {
    value: "342",
    label: "SOEN 342",
  },
  {
    value: "343",
    label: "SOEN 343",
  },
  {
    value: "345",
    label: "SOEN 345",
  },
  {
    value: "345",
    label: "SOEN 357",
  },
];

export default function SetUpFocusTimer() {
  const [course, setCourse] = React.useState("EUR");

  const handleChange = (event) => {
    setCourse(event.target.value);
    console.log(course);
  };

  let navigate = useNavigate();
  const goToFocusSession = () => {
    navigate("/FocusSession");
  };

  return (
    <div>
      <Header>Set-Up Focus Session</Header>
      <div className={classes.topSetUp}>
        <h1>FOCUS</h1>
        <h1>BREAK</h1>
      </div>
      <div className={classes.buttonsSetUp}>
        <TextField
          sx={{ width: "40%" }}
          id="outlined-basic"
          value="0:25:00"
          variant="outlined"
        />
        <TextField
          sx={{ width: "40%" }}
          id="outlined-basic"
          value="05:00"
          variant="outlined"
        />
      </div>
      <div>
        <p className={classes.pomodoroSetUp}>
          <i>
            Try studying with the{" "}
            <span style={{ color: "#004fc5", fontWeight: "bold" }}>
              Pomodoro Technqiue
            </span>
            .
          </i>
          <br /> Set the Focus Timer to
          <span style={{ color: "#e20000", fontWeight: "bold" }}> 25 </span>
          Minutes. <br /> Set the Break Timer to
          <span style={{ color: "#e20000", fontWeight: "bold" }}> 5 </span>
          Minutes. <br /> Repeat!
        </p>
      </div>
      <div className={classes.tagSetUp}>
        <h3>Select A Tag:</h3>
        <TextField
          id="outlined-select-courses"
          select
          label="Select"
          value={342}
          onChange={handleChange}
          helperText="Please select your course"
        >
          {courses.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <h3 className={classes.petactivitySetUp}>Select A Pet Activity:</h3>
        <div className={classes.petactivityEmojis}>
          <p>🐕</p>
          <p>🚿</p>
          <p>🦴</p>
          <p>🎾</p>
        </div>
      </div>
      <div className={classes.studywithFriends}>
        <h3 style={{ marginBottom: "-10px" }}>Study With Friends</h3>
        <h3
          style={{
            color: "#e20000",
            fontWeight: "bold",
            marginBottom: "22px",
          }}
        >
          Room Code: 2562
        </h3>
      </div>
      <div className={classes.bottomButtons}>
        <p className={classes.bottomButton}>Invite Friend</p>
        <p onClick={goToFocusSession} className={classes.bottomButton}>
          Start
        </p>
      </div>
      <div className={fclasses.footer}>
        <ul>
          <Link to="/">
            <li className={fclasses.footerbtn}>
              <HomeOutlinedIcon fontSize="large" />
            </li>
          </Link>

          <Link to="/ToDoList">
            <li className={fclasses.footerbtn}>
              <ViewListOutlinedIcon fontSize="large" />
            </li>
          </Link>
          <Link to="/Statistics">
            <li className={fclasses.footerbtn}>
              <AssessmentOutlinedIcon fontSize="large" />
            </li>
          </Link>
          <Link to="/Settings">
            <li className={fclasses.footerbtn}>
              <MoreHorizOutlinedIcon fontSize="large" />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
