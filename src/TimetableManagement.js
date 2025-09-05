import React, { useState } from "react";
import "./TimetableManagement.css";
import { initialExams } from "./data";

function TimetableManagement() {
  const [currentMonth, setCurrentMonth] = useState("July");
  const [currentYear, setCurrentYear] = useState(2024);
  const [view, setView] = useState("Month");
  const [exams, setExams] = useState(initialExams);
  const [selectedDate, setSelectedDate] = useState(null);
  
  // Calendar data for July and August 2024
  const calendarData = {
    "July 2024": {
      days: 31,
      startDay: 1, // Monday (0 = Sunday, 1 = Monday, etc.)
    },
    "August 2024": {
      days: 31,
      startDay: 4, // Thursday
    }
  };

  // Generate calendar days
  const generateCalendarDays = (month, year) => {
    const monthKey = `${month} ${year}`;
    const { days, startDay } = calendarData[monthKey] || { days: 31, startDay: 0 };
    
    let calendarDays = [];
    
    // Add empty cells for days before the 1st of the month
    for (let i = 0; i < startDay; i++) {
      calendarDays.push(null);
    }
    
    // Add days of the month
    for (let i = 1; i <= days; i++) {
      calendarDays.push(i);
    }
    
    return calendarDays;
  };

  // Check if a date has exams
  const hasExams = (day) => {
    if (!day) return false;
    
    const dateStr = `${day}/${currentMonth === "July" ? "07" : "08"}/2024`;
    return exams.some(exam => exam.date === dateStr);
  };

  // Handle month navigation
  const handlePrevMonth = () => {
    if (currentMonth === "August") {
      setCurrentMonth("July");
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === "July") {
      setCurrentMonth("August");
    }
  };

  // Handle adding a new exam
  const handleAddExam = () => {
    alert("Add Exam functionality would be implemented here");
  };

  // Handle editing an exam
  const handleEditExam = () => {
    alert("Edit Exam functionality would be implemented here");
  };

  // Handle deleting an exam
  const handleDeleteExam = () => {
    alert("Delete Exam functionality would be implemented here");
  };

  // Handle viewing conflicts
  const handleViewConflicts = () => {
    alert("View Conflicts functionality would be implemented here");
  };

  return (
    <div className="timetable-container">
      <h1>Timetable Management</h1>
      <p className="subtitle">Manage and schedule exams efficiently.</p>
      
      <div className="view-toggle">
        <button 
          className={view === "Month" ? "active" : ""} 
          onClick={() => setView("Month")}
        >
          Month
        </button>
        <button 
          className={view === "Week" ? "active" : ""} 
          onClick={() => setView("Week")}
        >
          Week
        </button>
      </div>
      
      <div className="calendar-header">
        <button className="nav-button" onClick={handlePrevMonth}>
          &lt;
        </button>
        <h2>{currentMonth} {currentYear}</h2>
        <button className="nav-button" onClick={handleNextMonth}>
          &gt;
        </button>
      </div>
      
      <div className="calendar">
        <div className="weekdays">
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
        </div>
        
        <div className="days">
          {generateCalendarDays(currentMonth, currentYear).map((day, index) => (
            <div 
              key={index} 
              className={`day ${day ? "" : "empty"} ${hasExams(day) ? "has-exam" : ""} ${day === 5 ? "selected" : ""}`}
              onClick={() => day && setSelectedDate(day)}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
      
      <div className="action-buttons">
        <button className="add-button" onClick={handleAddExam}>Add Exam</button>
        <button className="edit-button" onClick={handleEditExam}>Edit Exam</button>
        <button className="delete-button" onClick={handleDeleteExam}>Delete Exam</button>
      </div>
      
      <div className="conflict-popup">
        <div className="conflict-content">
          <h3>Conflict Popup</h3>
          <p>Overlapping exams detected. Please resolve the conflict.</p>
          <button className="view-conflicts-button" onClick={handleViewConflicts}>
            View Conflicts
          </button>
        </div>
      </div>
    </div>
  );
}

export default TimetableManagement;