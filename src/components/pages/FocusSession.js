import fclasses from "../layout/Footer.module.css";
import Header from "../layout/Header";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import classes from "./FocusSession.module.css";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import StopCircleIcon from "@mui/icons-material/StopCircle";

export default function FocusSession() {
  return (
    <div>
      <Header>Focus Session</Header>
      <div className={classes.topSetUp}>
        <h1>FOCUS</h1>
        <h1>BREAK</h1>
      </div>
      <div className={classes.timerCountdown}>
        <p>23:57</p>
        <p>5:00</p>
      </div>
      <div className={classes.bottomcircleIcon}>
        <PauseCircleIcon className={classes.pausecircleIcon}></PauseCircleIcon>

        <StopCircleIcon className={classes.stopcircleIcon}></StopCircleIcon>
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
