import { useState } from "react";
import "./App.css";
import { MdAutoGraph, MdStream, MdAssignmentInd } from "react-icons/md";
import { FaStream, FaUncharted, FaRedRiver } from "react-icons/fa";

function App() {
  const [clickedIcon, setClickedIcon] = useState(null);
  const [svgTransform, setSvgTransform] = useState({
    x: 0,
    y: 0,
  });

  // const [isGraphExpanded, setIsGraphExpanded] = useState(false);
  // const [isStreamExpanded, setIsStreamExpanded] = useState(false);
  // const [isAssingmentExpanded, setIsAssingmentExpanded] = useState(false);

  const handleIconClick = (iconName) => {
    if (clickedIcon === iconName) {
      // If the same icon is clicked again, collapse it
      setClickedIcon(null);
    } else {
      // Otherwise, expand the clicked icon and collapse the previously expanded one
      setClickedIcon(iconName);
    }
  };

  // const isGraphExpanded = expandedIcon === "graph";
  // const isStreamExpanded = expandedIcon === "stream";
  // const isAssignmentExpanded = expandedIcon === "assignment";

  const svgStyles = {
    width: "100%",
    height: "100%",
    position: "absolute",
    transition: "transform 0.5s ease-in-out",
    transform: `translate(${svgTransform.x}px, ${svgTransform.y}px)`,
    zIndex: -1,
  };

  return (
    <div
      style={{
        marginTop: "7rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          width: "50vw",
          gap: "1.5rem",
          margin: "auto",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
          position: "relative",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          style={svgStyles}
          fillOpacity={0.6}
          fill="skyblue"
        >
          {/*  SVG content goes here */}
          <circle cx="22.5" cy="50" r="8" />
        </svg>
        <FaUncharted
          className={`icon ${clickedIcon === "graph" ? "bigger" : "normal"}`}
          style={{
            fontSize: "1.5rem",
            // width: isGraphExpanded ? "30%" : "10%",
            width: "10%",
            height: "15%",
            transition: "all 0.8s ease-in-out",
            // backgroundColor: isGraphExpanded ? "gray" : "white",
            backgroundColor: "skyblue",
            color: "white",
            borderRadius: "50%",
            cursor: "pointer",
            // border: expandedIcon === "graph" ? "1px solid blue" : "none",
            // boxShadow: expandedIcon === "graph" ? "0 0 10px 0 blue" : "none",
          }}
          onClick={() => {
            handleIconClick("graph");
            setSvgTransform({ x: 15, y: 0 });
          }}
        />

        <FaRedRiver
          className={`icon ${clickedIcon === "stream" ? "bigger" : "normal"}`}
          style={{
            fontSize: "1.5rem",

            // width: isStreamExpanded ? "30%" : "10%",
            width: "10%",
            height: "12%",
            transition: "all 0.8s ease-in-out",
            // backgroundColor: isStreamExpanded ? "gray" : "white",
            backgroundColor: "skyblue",
            color: "white",
            borderRadius: "40%",
            cursor: "pointer",
            // border: expandedIcon === "stream" ? "1px solid blue" : "none",
            // boxShadow: expandedIcon === "stream" ? "0 0 10px 0 blue" : "none",
          }}
          onClick={() => {
            handleIconClick("stream");
            setSvgTransform({ x: 80, y: 0 });
          }}
        />

        <MdAssignmentInd
          className={`icon ${
            clickedIcon === "assignment" ? "bigger" : "normal"
          }`}
          style={{
            fontSize: "1.5rem",
            // width: isAssignmentExpanded ? "30%" : "10%",
            width: "10%",
            height: "15%",
            transition: "all 0.8s ease-in-out",
            // backgroundColor: isAssignmentExpanded ? "gray" : "white",
            backgroundColor: "skyblue",
            color: "white",
            borderRadius: "10%",
            cursor: "pointer",
            // border: expandedIcon === "assignment" ? "1px solid blue" : "none",
            // boxShadow:
            //   expandedIcon === "assignment" ? "0 0 10px 0 blue" : "none",
          }}
          onClick={() => {
            handleIconClick("assignment");
            setSvgTransform({ x: 140, y: 0 });
          }}
        />
      </div>
    </div>
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  );
}

export default App;
