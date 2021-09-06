import { useState, React } from "react";
import "./css/taskbar.css";

function TaskBar() {
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  var now = new Date();
  const [time, setTime] = useState(now);
  setInterval(() => {
    setTime(new Date());
  }, 1000);

  return (
    <div className="taskbar">
      <span id="date">{`${day[time.getDay()]} ${time.getDate()} ${
        month[time.getMonth()]
      } ${time.getFullYear()}`}</span>

      <span id="icons-container">
        <span>
          <img
            data-tip="wifi"
            data-for="wifi"
            className="taskbar-icons"
            src={process.env.PUBLIC_URL + "/images/wifi.png"}
            alt="wifi"
          />
         
        </span>
        <span>
          <img
            data-tip="battery"
            data-for="battery"
            className="taskbar-icons"
            src={process.env.PUBLIC_URL + "/images/battery-status.png"}
            alt="battery"
          />
         
        </span>

        <span>
          <img
            data-tip="settings"
            data-for="settings"
            className="taskbar-icons"
            src={process.env.PUBLIC_URL + "/images/settings.png"}
            alt="settings"
          />
        
        </span>
        <span>
          <img
            data-tip="power"
            data-for="power"
            className="taskbar-icons"
            src={process.env.PUBLIC_URL + "/images/power.png"}
            alt="power"
          />
        
        </span>
      </span>
      <span id="time">{time.toLocaleTimeString()}</span>
    </div>
  );
}
export default TaskBar;
