import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./InvigilatorManagement.css";

function InvigilatorManagement() {
  const navigate = useNavigate();
  
  // Sample invigilator data
  const [invigilators, setInvigilators] = useState([
    {
      id: 1,
      name: "Dr. James Wilson",
      department: "Computer Science",
      contact: "jwilson@university.edu",
      assignedExams: ["Data Structures Midterm", "AI Final"]
    },
    {
      id: 2,
      name: "Prof. Sarah Johnson",
      department: "Mathematics",
      contact: "sjohnson@university.edu",
      assignedExams: ["Calculus Final"]
    },
    {
      id: 3,
      name: "Dr. Emily Chen",
      department: "Electrical Engineering",
      contact: "echen@university.edu",
      assignedExams: ["Circuit Design Midterm", "Digital Systems Final"]
    },
    {
      id: 4,
      name: "Prof. Michael Brown",
      department: "Physics",
      contact: "mbrown@university.edu",
      assignedExams: ["Mechanics Midterm"]
    },
    {
      id: 5,
      name: "Dr. Lisa Taylor",
      department: "Computer Science",
      contact: "ltaylor@university.edu",
      assignedExams: ["Database Systems Final", "Software Engineering Midterm"]
    }
  ]);

  // Handle edit invigilator
  const handleEdit = (id) => {
    alert(`Edit invigilator with ID: ${id}`);
  };

  // Handle delete invigilator
  const handleDelete = (id) => {
    alert(`Delete invigilator with ID: ${id}`);
  };

  // Handle import from Excel
  const handleImport = () => {
    alert("Import from Excel functionality would be implemented here");
  };

  // Handle assign invigilator
  const handleAssign = (id) => {
    alert(`Assign invigilator with ID: ${id} to exams`);
  };

  // Handle check conflicts
  const handleCheckConflicts = () => {
    alert("Checking for scheduling conflicts...");
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
          <Link to="/students" className="navbar-item" onClick={() => navigate('/students')}>Student Management</Link>
          <Link to="/invigilators" className="navbar-item active">Invigilator</Link>
          <Link to="/settings" className="navbar-item" onClick={() => navigate('/settings')}>Settings</Link>
        </div>
        <div className="navbar-end">
          <div className="notification-icon">🔔</div>
          <div className="user-avatar"></div>
        </div>
      </nav>

      <div className="invigilator-management-container">
        <div className="invigilator-management-header">
          <h1>Invigilator Management</h1>
          <div className="header-actions">
            <button className="import-button" onClick={handleImport}>
              Import from Excel
            </button>
            <button className="conflict-button" onClick={handleCheckConflicts}>
              Check Conflicts
            </button>
          </div>
        </div>

        <div className="invigilator-stats">
          <div className="stat-card">
            <div className="stat-value">5</div>
            <div className="stat-label">Total Invigilators</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">7</div>
            <div className="stat-label">Assigned Exams</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">0</div>
            <div className="stat-label">Scheduling Conflicts</div>
          </div>
        </div>

        <div className="invigilator-table">
          <div className="table-header">
            <div className="header-cell">Invigilator Name</div>
            <div className="header-cell">Department</div>
            <div className="header-cell">Contact</div>
            <div className="header-cell">Assigned Exams</div>
            <div className="header-cell">Actions</div>
          </div>

          {invigilators.map((invigilator) => (
            <div className="table-row" key={invigilator.id}>
              <div className="table-cell">{invigilator.name}</div>
              <div className="table-cell">{invigilator.department}</div>
              <div className="table-cell">{invigilator.contact}</div>
              <div className="table-cell">
                {invigilator.assignedExams.join(", ")}
              </div>
              <div className="table-cell actions">
                <button 
                  className="assign-button" 
                  onClick={() => handleAssign(invigilator.id)}
                >
                  Assign
                </button>
                <button 
                  className="edit-button" 
                  onClick={() => handleEdit(invigilator.id)}
                >
                  Edit
                </button>
                <button 
                  className="delete-button" 
                  onClick={() => handleDelete(invigilator.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="assignment-summary">
          <h2>Upcoming Exam Assignments</h2>
          <div className="assignment-list">
            <div className="assignment-item">
              <div className="exam-info">
                <div className="exam-name">Data Structures Midterm</div>
                <div className="exam-details">July 15, 2024 • 10:00 AM • Room CS-101</div>
              </div>
              <div className="invigilator-info">
                <div className="invigilator-name">Dr. James Wilson</div>
                <div className="invigilator-dept">Computer Science</div>
              </div>
            </div>
            <div className="assignment-item">
              <div className="exam-info">
                <div className="exam-name">Calculus Final</div>
                <div className="exam-details">July 20, 2024 • 2:00 PM • Room M-201</div>
              </div>
              <div className="invigilator-info">
                <div className="invigilator-name">Prof. Sarah Johnson</div>
                <div className="invigilator-dept">Mathematics</div>
              </div>
            </div>
            <div className="assignment-item">
              <div className="exam-info">
                <div className="exam-name">Circuit Design Midterm</div>
                <div className="exam-details">July 18, 2024 • 9:00 AM • Room E-105</div>
              </div>
              <div className="invigilator-info">
                <div className="invigilator-name">Dr. Emily Chen</div>
                <div className="invigilator-dept">Electrical Engineering</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvigilatorManagement;