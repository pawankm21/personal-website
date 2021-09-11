import React from "react";
import "./css/pagewindow.css";
import Window from "./window";
import Draggable from "react-draggable";
import Circle from "./circles";
const objects = {
  Projects: (
    <table className="table-position">
      <thead>
        <th colSpan="4">
          <a href="https://github.com/pawankm21/customer-management-system">
            Discord Bot
          </a>
        </th>
        <th colSpan="4">
          <a href="https://github.com/pawankm21/customer-management-system">
            {" "}
            Django CRM
          </a>
        </th>
        <th colSpan="4">
          <a href="https://github.com/pawankm21/customer-management-system">
            Personal Portfolio
          </a>
        </th>
      </thead>
      <tr>
        <td>
          <Circle
            top="-100px"
            right="600px"
            src={
              "https://raw.githubusercontent.com/pawankm21/discord-bot/master/images/skull.png"
            }
            alt="html"
            borderRadius="5%"
            link="https://github.com/pawankm21/customer-management-system"
          />
        </td>
        <td>
          <Circle
            top="-100px"
            right="340px"
            src={
              "https://thumbs.dreamstime.com/b/crm-icon-vector-sign-symbol-isolated-white-background-logo-concept-your-web-mobile-app-design-133757267.jpg"
            }
            alt="html"
            borderRadius="5%"
            link="https://github.com/pawankm21/customer-management-system"
          />
        </td>
        <td>
          <Circle
            top="-100px"
            right="60px"
            src={
              "https://www.vippng.com/png/detail/202-2026524_person-icon-default-user-icon-png.png"
            }
            alt="html"
            borderRadius="5%"
            link="https://github.com/pawankm21/customer-management-system"
          />
        </td>
      </tr>
      <tr>
        <td colSpan="3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta saepe
          deserunt consectetur sint! Assumenda consectetur asperiores doloremque
          provident, cum nisi repudiandae ex minima autem cupiditate ut
          obcaecati explicabo deleniti delectus?
        </td>
        <td colSpan="3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          omnis asperiores ducimus voluptatibus laboriosam! Doloremque ex at
          fuga sint, consectetur eaque cupiditate quis incidunt suscipit
          accusamus blanditiis sed, harum facilis.
        </td>
        <td colSpan="3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quod sunt
          consequatur enim ad laborum a vitae harum obcaecati, inventore saepe
          eligendi modi corrupti maiores, libero laboriosam nisi amet pariatur?
        </td>
      </tr>
    </table>
  ),
  hobbies: <div></div>,
  about: <div></div>,
};

export default function PageWindow(props) {
  return (
    <Draggable handle=".handle">
      <div className="window-position">
        <div className="page-window ">
          <section className="handle">
            <Window setAppear={props.setAppear} />
          </section>

          <h1> {props.text} </h1>
          {objects[props.windowName]}
        </div>
      </div>
    </Draggable>
  );
}
