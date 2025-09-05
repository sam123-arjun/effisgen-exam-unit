import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./StudentManagement.css";

function StudentManagement() {
  const navigate = useNavigate();
  // Sample student data
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Sophia Clark",
      rollNo: "2021CS001",
      courses: ["Data Structures, Algorithms"],
      exams: ["Midterm, Final"]
    },
    {
      id: 2,
      name: "Ethan Bennett",
      rollNo: "2021CS002",
      courses: ["Operating Systems, Networks"],
      exams: ["Midterm"]
    },
    {
      id: 3,
      name: "Olivia Harper",
      rollNo: "2021CS003",
      courses: ["Database Systems, Software Engineering"],
      exams: ["Final"]
    },
    {
      id: 4,
      name: "Liam Foster",
      rollNo: "2021CS004",
      courses: ["Machine Learning, AI"],
      exams: ["Midterm, Final"]
    },
    {
      id: 5,
      name: "Ava Morgan",
      rollNo: "2021CS005",
      courses: ["Computer Vision, Robotics"],
      exams: ["Midterm"]
    }
  ]);

  // Handle edit student
  const handleEdit = (id) => {
    alert(`Edit student with ID: ${id}`);
  };

  // Handle delete student
  const handleDelete = (id) => {
    alert(`Delete student with ID: ${id}`);
  };

  // Handle import from Excel
  const handleImport = () => {
    alert("Import from Excel functionality would be implemented here");
  };

  // Handle download timetable
  const handleDownloadTimetable = () => {
    alert("Download Timetable functionality would be implemented here");
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <div className="brand-icon">◆</div>
          <div className="brand-name">EffiESGen</div>
        </div>
        <div className="navbar-menu">
          <Link to="/dashboard" className="navbar-item" onClick={() => navigate('/dashboard')}>Dashboard</Link>
          <Link to="/exam-unit" className="navbar-item" onClick={() => navigate('/exam-unit')}>Exam Unit</Link>
          <Link to="/students" className="navbar-item active">Student Management</Link>
          <Link to="/invigilators" className="navbar-item" onClick={() => navigate('/invigilators')}>Invigilator</Link>
          <Link to="/settings" className="navbar-item" onClick={() => navigate('/settings')}>Settings</Link>
        </div>
        <div className="navbar-end">
          <div className="notification-icon">🔔</div>
          <div className="user-avatar"></div>
        </div>
      </nav>

      <div className="student-management-container">
        <div className="student-management-header">
          <h1>Student Management</h1>
          <button className="import-button" onClick={handleImport}>
            Import from Excel
          </button>
        </div>

        <div className="student-table">
          <div className="table-header">
            <div className="header-cell">Student Name</div>
            <div className="header-cell">Roll No</div>
            <div className="header-cell">Courses</div>
            <div className="header-cell">Assigned Exams</div>
            <div className="header-cell">Actions</div>
          </div>

          {students.map((student) => (
            <div className="table-row" key={student.id}>
              <div className="table-cell">{student.name}</div>
              <div className="table-cell">{student.rollNo}</div>
              <div className="table-cell">
                {student.courses.join(", ")}
              </div>
              <div className="table-cell">{student.exams.join(", ")}</div>
              <div className="table-cell actions">
                <button 
                  className="edit-button" 
                  onClick={() => handleEdit(student.id)}
                >
                  Edit
                </button>
                {" | "}
                <button 
                  className="delete-button" 
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="download-section">
          <button 
            className="download-button" 
            onClick={handleDownloadTimetable}
          >
            Download Timetable
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentManagement;