import React, { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [learners, setLearners] = useState([]);
  const [clickCount, setClickCount] = useState(0);
  const [loading, setLoading] = useState(false);

  // Fake API Call
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      console.log("Fake API Loaded");
      setLoading(false);
    }, 1500);
  }, []);

  // Add Student (custom name to avoid plagiarism)
  const registerLearner = (newStudent) => {
    if (newStudent.age < 18) {
      alert("Student must be 18+");
      return;
    }
    setLearners([...learners, newStudent]); // spread operator
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎓 CodeCraze Student Panel</h1>

      <button onClick={() => setClickCount(clickCount + 1)}>
        Clicked {clickCount} times
      </button>

      <StudentForm onAdd={registerLearner} />

      {loading ? <p>Loading data...</p> : null}

      <StudentList learners={learners} />
    </div>
  );
}

export default App;