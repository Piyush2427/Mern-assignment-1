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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={studentData.name}
        onChange={handleChange}
      />

      <input
        type="number"
        name="age"
        placeholder="Enter Age"
        value={studentData.age}
        onChange={handleChange}
      />

      <input
        type="text"
        name="course"
        placeholder="Enter Course"
        value={studentData.course}
        onChange={handleChange}
      />

      <button type="submit">Register Student</button>
    </form>
  );
}

export default StudentForm;