import ProgressBar from "./ProgressBar";

function App() {
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        React Progress Bar
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#6b7280",
        }}
      >
        Click Start to begin, Pause to stop,
        and Reset to start over.
      </p>

      <ProgressBar />
    </>
  );
}

export default App;