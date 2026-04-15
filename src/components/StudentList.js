import React from "react";

function StudentList({ learners }) {
  const filtered = learners.filter((s) => s.age > 18);

  return (
    <div>
      <h2>📋 Student Records</h2>

      {filtered.length === 0 ? (
        <p>No eligible students</p>
      ) : (
        filtered.map((student, index) => (
          <div key={index}>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Course: {student.course}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default StudentList;