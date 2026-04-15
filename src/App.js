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

  // Add Student 
  const registerLearner = (newStudent) => {
    if (newStudent.age < 18) {
      alert("Student must be 18+");
      return;
    }
    setLearners([...learners, newStudent]); // spread operator
  };

  return (
    <div className="app-container">
      <h1>🎓 CodeCraze Student Panel</h1>
      <p className="subtitle">Manage your student enrollments with ease.</p>

      <StudentForm onAdd={registerLearner} />

      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
          <p>Loading data...</p>
        </div>
      ) : null}

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <button className="btn btn-secondary" onClick={() => setClickCount(clickCount + 1)}>
          Clicked {clickCount} times
        </button>
      </div>

      <StudentList learners={learners} />
    </div>
  );
}

export default App;