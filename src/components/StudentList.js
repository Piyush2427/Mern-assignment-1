import React from "react";

function StudentList({ learners }) {
  const filtered = learners.filter((s) => s.age > 18);

  return (
    <div>
      <div className="student-list-header">
        <h2>📋 Student Records</h2>
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <h3>No eligible students found</h3>
          <p>Please register a student who is 18 or older.</p>
        </div>
      ) : (
        <div className="card-grid">
          {filtered.map((student, index) => (
            <div className="card student-card" key={index}>
              <h3 className="student-name">{student.name}</h3>
              <p className="student-detail"><strong>Age:</strong> {student.age}</p>
              <p className="student-detail"><strong>Course:</strong> {student.course}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StudentList;