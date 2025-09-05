import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import ExamUnit from "./Exam_unit";
import Login from "./Login";
import TimetableManagement from "./TimetableManagement";
import StudentManagement from "./StudentManagement";
import InvigilatorManagement from "./InvigilatorManagement";
import SettingsPage from "./SettingsPage";
import CollaborationPage from "./CollaborationPage";
import { initialExams } from "./data";
import logo from "./logo.png";

// Timetable page: read-only view of all exams
function Timetable() {
  const downloadPdf = () => {
    const headCells = [
      "Exam Name",
      "Course",
      "Date",
      "Time",
      "Duration",
      "Venue",
      "Invigilator",
    ];

    const rowsHtml = initialExams
      .map(
        (e) => `
          <tr>
            <td>${e.examName}</td>
            <td>${e.course}</td>
            <td>${e.date}</td>
            <td>${e.time}</td>
            <td>${e.duration}</td>
            <td>${e.venue}</td>
            <td>${e.invigilator}</td>
          </tr>`
      )
      .join("");

    const html = `
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Timetable</title>
  <style>
    body{font-family:Arial,Helvetica,sans-serif;margin:24px;color:#111827}
    h1{margin:0 0 12px;font-size:22px}
    table{width:100%;border-collapse:collapse}
    thead th{font-size:12px;text-transform:uppercase;color:#555;border-bottom:1px solid #ccc;padding:8px;text-align:left}
    tbody td{font-size:13px;border-bottom:1px solid #eee;padding:8px}
    .meta{margin-bottom:10px;color:#444;font-size:12px}
    @media print{@page{size:landscape;margin:12mm}}
  </style>
</head>
<body>
  <h1>Timetable</h1>
  <div class="meta">Generated ${new Date().toLocaleString()}</div>
  <table>
    <thead>
      <tr>${headCells.map((c) => `<th>${c}</th>`).join("")}</tr>
    </thead>
    <tbody>${rowsHtml}</tbody>
  </table>
  <script>window.onload = () => { window.print(); };</script>
</body>
</html>`;

    const win = window.open("", "_blank");
    if (win) {
      win.document.open();
      win.document.write(html);
      win.document.close();
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Timetable</h1>
        <button className="btn btn-primary" onClick={downloadPdf}>
          Download PDF
        </button>
      </div>
      <div className="content-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Exam Name</th>
              <th>Course</th>
              <th>Date</th>
              <th>Time</th>
              <th>Duration</th>
              <th>Venue</th>
              <th>Invigilator</th>
            </tr>
          </thead>
          <tbody>
            {initialExams.map((exam, i) => (
              <tr key={i}>
                <td className="font-semibold">{exam.examName}</td>
                <td className="text-gray-600">{exam.course}</td>
                <td className="font-mono">{exam.date}</td>
                <td className="font-mono">{exam.time}</td>
                <td className="text-gray-600">{exam.duration}</td>
                <td className="text-gray-600">{exam.venue}</td>
                <td className="text-gray-600">{exam.invigilator}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Dashboard Component
function Dashboard() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleUploadExcelClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      alert(`Selected file: ${file.name}`);
    }
    if (e.target) e.target.value = "";
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
      </div>

      {/* Statistics Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <h3 className="stat-title">Upcoming Exams</h3>
          </div>
          <div className="stat-value">3</div>
          <div className="stat-change positive">+10%</div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <h3 className="stat-title">Total Students</h3>
          </div>
          <div className="stat-value">1200</div>
          <div className="stat-change positive">+5%</div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <h3 className="stat-title">Total Invigilators</h3>
          </div>
          <div className="stat-value">150</div>
          <div className="stat-change positive">+2%</div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <h3 className="stat-title">Conflict Alerts</h3>
          </div>
          <div className="stat-value">5</div>
          <div className="stat-change negative">-1%</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="section">
        <h2 className="section-title">Quick Actions</h2>
        <div className="action-buttons">
          <button 
            className="btn btn-primary" 
            onClick={() => navigate('/exam-unit')}
          >
            Create Exam
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={handleUploadExcelClick}
          >
            Upload Excel
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={() => navigate('/timetable')}
          >
            Edit Timetable
          </button>
          <input 
            ref={fileInputRef} 
            type="file" 
            accept=".xlsx,.xls,.csv" 
            style={{ display: 'none' }} 
            onChange={handleFileChange} 
          />
        </div>
      </div>
    </div>
  );
}

// Sidebar Component
function Sidebar({ onLogout }) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Dashboard", path: "/dashboard", icon: "🏠" },
    { label: "Exam Unit", path: "/exam-unit", icon: "📄" },
    { label: "Timetable", path: "/timetable", icon: "🗓️" },
    { label: "Students", path: "/students", icon: "👥" },
    { label: "Invigilators", path: "/invigilators", icon: "🧑‍🏫" },
    { label: "Collaboration", path: "/collaboration", icon: "🤝" },
    { label: "Settings", path: "/settings", icon: "⚙️" }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="brand">
          <img src={logo} alt="EffiESGen Logo" className="brand-logo" />
          <span className="brand-name">EffiESGen</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li key={item.path}>
              <button
                className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => navigate(item.path)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button className="help-button">
          <span className="nav-icon">❓</span>
          <span className="nav-label">Help and Docs</span>
        </button>
        <button className="logout-button" onClick={onLogout}>
          <span className="nav-icon">🚪</span>
          <span className="nav-label">Logout</span>
        </button>
      </div>
    </aside>
  );
}

// Top Navigation Component
function TopNavigation() {
  return (
    <header className="top-nav">
      <div className="top-nav-left">
        <div className="brand-mobile">
          <span className="brand-icon">♦</span>
          <span className="brand-text">EffiESGen</span>
        </div>
      </div>
      <div className="top-nav-right">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search" 
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
        <button className="notification-btn">🔔</button>
        <div className="user-avatar">👩</div>
      </div>
    </header>
  );
}

// Layout Component with Sidebar
function DashboardLayout({ children }) {
  return (
    <div className="app-layout">
      <TopNavigation />
      <div className="main-layout">
        <Sidebar />
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}

// Protected Route Component
function ProtectedRoute({ children, userType }) {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

// Main Layout Component
function MainLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );
  const [userType, setUserType] = useState(
    localStorage.getItem('userType') || 'Exam Unit'
  );

  const navigate = useNavigate();

  const handleLogin = (loginData) => {
    if (loginData.email && loginData.password) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userType', loginData.userType);
      localStorage.setItem('userEmail', loginData.email);
      setIsAuthenticated(true);
      setUserType(loginData.userType);
      navigate("/dashboard");
    }
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      
      {/* Dashboard routes with sidebar layout */}
      <Route path="/dashboard" element={
        <ProtectedRoute userType={userType}>
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/exam-unit" element={
        <ProtectedRoute userType={userType}>
          
            <ExamUnit />
          
        </ProtectedRoute>
      } />
      
      <Route path="/timetable" element={
        <ProtectedRoute userType={userType}>
          
            <TimetableManagement />
          
        </ProtectedRoute>
      } />
      
      <Route path="/students" element={
        <ProtectedRoute userType={userType}>
          
            <StudentManagement />
          
        </ProtectedRoute>
      } />
      
      <Route path="/invigilators" element={
        <ProtectedRoute userType={userType}>
          
            <InvigilatorManagement />
          
        </ProtectedRoute>
      } />
      
      <Route path="/collaboration" element={
        <ProtectedRoute userType={userType}>
          
            <CollaborationPage />
          
        </ProtectedRoute>
      } />
      
      <Route path="/settings" element={
        <ProtectedRoute userType={userType}>
          
            <SettingsPage />
          
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}