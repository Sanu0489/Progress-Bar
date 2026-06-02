import { useEffect, useState } from "react";
import "./ProgressBar.css";

function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [start, setStart] = useState(false);

  const handleStart = () => {
    setStart(true);
  };

  const handlePause = () => {
    setStart(false);
  };

  const handleReset = () => {
    setStart(false);
    setProgress(0);
  };

  useEffect(() => {
    if (!start || progress >= 100) return;

    const timer = setTimeout(() => {
      setProgress((prev) => prev + 1);
    }, 100);

    return () => clearTimeout(timer);
  }, [progress, start]);

  return (
    <div className="progress-container">
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        >
          {progress > 10 && `${progress}%`}
        </div>
      </div>

      <div className="progress-text">
        {progress === 100
          ? "Completed ✅"
          : `${progress}%`}
      </div>

      <div className="button-group">
        <button
          className="btn start-btn"
          disabled={start || progress === 100}
          onClick={handleStart}
        >
          Start
        </button>

        <button
          className="btn pause-btn"
          disabled={progress === 0 || !start || progress === 100}
          onClick={handlePause}
        >
          Pause
        </button>

        <button
          disabled={progress === 0}
          className="btn reset-btn"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default ProgressBar;