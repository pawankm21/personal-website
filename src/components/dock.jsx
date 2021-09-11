import { useState } from "react";
import "./css/dock.css";
import Terminal from "./terminal";
import DockIcons from "./dockicons";
function Dock(props) {
  const [appear, setAppear] = useState(false);
  const [minimize, setMinimize] = useState(false);
  
  return (
    <div>
      {(appear) ? (
        <Terminal setAppear={setAppear} minimize={minimize} setMinimize={setMinimize} appear={appear}></Terminal>
      ) : (
        ""
      )}

      <div className="dock">
        <span id="dock-container">
          <button
            href="#"
            data-tip="Terminal"
            data-for="Terminal"
            onClick={() => {
             
              if (!appear)
              {
                setAppear(true);
              }
              else {
                 setMinimize(!minimize);
              }
            }}
            style={appear ? { borderBottom: "solid grey" } : { border: "none" }}
          >
            <img
              className="dock-icons"
              alt="Terminal icon"
              src={process.env.PUBLIC_URL + `/images/terminal.png`}
            />
          </button>

          <DockIcons name="github" link="https://github.com/pawankm21" />
          <DockIcons name="leetcode" link="https://leetcode.com/pawan994567/" />
          <DockIcons
            name="linkedin"
            link="https://www.linkedin.com/in/pawan-kumar-mishra/"
          />
          <DockIcons
            name="devpost"
            link="https://devpost.com/pawan994567?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
          />
          <DockIcons
            name="binarysearch"
            link="https://binarysearch.com/@/pawan"
          />
        </span>
      </div>
    </div>
  );
}

export default Dock;
