import React, { useState } from "react";

function StudentForm({ onAdd }) {
  const [studentData, setStudentData] = useState({
    name: "",
    age: "",
    course: "",
  });

  const handleChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!studentData.name || !studentData.age || !studentData.course) {
      alert("All fields required!");
      return;
    }

    onAdd({
      ...studentData,
      age: Number(studentData.age),
    });

    setStudentData({ name: "", age: "", course: "" });
  };

  return (
    <div className="card form-card">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            className="input-field"
            type="text"
            name="name"
            placeholder="Enter Student Name"
            value={studentData.name}
            onChange={handleChange}
          />

          <input
            className="input-field"
            type="number"
            name="age"
            placeholder="Enter Student Age"
            value={studentData.age}
            onChange={handleChange}
          />

          <input
            className="input-field"
            type="text"
            name="course"
            placeholder="Enter Course"
            value={studentData.course}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-primary" type="submit" style={{ width: '100%' }}>
          Register Student
        </button>
      </form>
    </div>
  );
}

export default StudentForm;