import { useState, React } from "react";
import "./taskbar.css";

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
    "Sep",
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

      <span>
        <img
          class="taskbar-icons"
          src={process.env.PUBLIC_URL + "/images/wifi.png"}
          alt="wifi"
        />
        <img
          class="taskbar-icons"
          src={process.env.PUBLIC_URL + "/images/battery-status.png"}
          alt="wifi"
        />
        <img
          class="taskbar-icons"
          src={process.env.PUBLIC_URL + "/images/settings.png"}
          alt="wifi"
        />
        <img
          class="taskbar-icons"
          src={process.env.PUBLIC_URL + "/images/power.png"}
          alt="wifi"
        />
        <span id="time">{time.toLocaleTimeString()}</span>
      </span>
    </div>
  );
}
export default TaskBar;
