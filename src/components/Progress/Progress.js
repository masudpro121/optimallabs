import React, { useState } from "react";
import { ProgressBar, OverlayTrigger, Tooltip } from "react-bootstrap";

function Progress() {
  const [progress, setProgress] = useState(10);
    console.log(progress);
  function handleControllerMove(event) {
    console.log(event);
    const bar = document.getElementById("myBar");
    const pos = event.clientX - bar.offsetLeft;
    let newProgress = (pos / bar.offsetWidth) * 100;
    if (newProgress > 100) {
      newProgress = 100;
    } else if (newProgress < 0) {
      newProgress = 0;
    }
    setProgress(newProgress);
  }

  const tooltip = (
    <Tooltip id="tooltip">
      Drag the controller to set the progress.
    </Tooltip>
  );

  return (
    <div>
      <OverlayTrigger placement="bottom" overlay={tooltip}>
        <div
          className="progress-controller"
          id="myController"
          onClick={(e) => {
            e.preventDefault();
            handleControllerMove(e)
          }}
          onMouseUp={() =>
            document.removeEventListener("mousemove", handleControllerMove)
          }
        />
      </OverlayTrigger>
      <ProgressBar now={progress} />
    </div>
  );
}

export default Progress;
