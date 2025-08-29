import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import ExamUnit from "./Exam_unit";
import { initialExams } from "./data";

// Timetable page: read-only view of all exams (same data as Exam Unit)
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
      <tr>${headCells.map((c)=>`<th>${c}</th>`).join("")}</tr>
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
    <div className="tt-wrap">
      <div className="tt-header">
        <h1 className="tt-title">Timetable</h1>
        <button className="db-btn" onClick={downloadPdf}>Download PDF</button>
      </div>
      <div className="tt-table-card">
        <table className="tt-table">
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
                <td className="tt-strong">{exam.examName}</td>
                <td className="tt-muted">{exam.course}</td>
                <td className="tt-code">{exam.date}</td>
                <td className="tt-code">{exam.time}</td>
                <td className="tt-muted">{exam.duration}</td>
                <td className="tt-muted">{exam.venue}</td>
                <td className="tt-muted">{exam.invigilator}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Dashboard Component (with sidebar + topbar)
function Dashboard() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const menuItems = [
    { label: "Dashboard", path: "/dashboard", icon: "🏠" },
    { label: "Exam Unit", path: "/exam-unit", icon: "📄" },
    { label: "Timetable", path: "/timetable", icon: "🗓️" },
    { label: "Students", path: "/students", icon: "👥" },
    { label: "Invigilators", path: "/invigilators", icon: "🧑‍🏫" },
    { label: "Collaboration", path: "/collaboration", icon: "🤝" },
    { label: "Settings", path: "/settings", icon: "⚙️" }
  ];

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
    <div className="db-layout">
      <aside className="db-sidebar">
        <div className="db-brand-row">
          <div className="db-brand-dot" />
          <div className="db-logo">EffiESGen</div>
        </div>
        <ul className="db-menu">
          {menuItems.map((m) => (
            <li key={m.label} className={m.path === "/dashboard" ? "active" : ""} onClick={() => navigate(m.path)}>
              <span className="db-menu-icon" aria-hidden>{m.icon}</span>
              <span>{m.label}</span>
            </li>
          ))}
        </ul>
        <div className="db-help">Help and Docs</div>
      </aside>

      <main className="db-main">
        {/* top bar */}
        <header className="db-topbar">
          <div className="db-topbar-right">
            <div className="db-search">
              <span className="db-search-icon">🔍</span>
              <input placeholder="Search" />
            </div>
            <button className="db-icon-btn" title="Notifications">🔔</button>
            <div className="db-avatar">👩</div>
          </div>
        </header>

        {/* content */}
        <section className="db-content">
          <h1 className="db-title">Dashboard</h1>

          <div className="db-cards">
            <div className="db-card">
              <div className="db-card-title">Upcoming Exams</div>
              <div className="db-card-value">3</div>
              <div className="db-card-delta db-up">+10%</div>
            </div>
            <div className="db-card">
              <div className="db-card-title">Total Students</div>
              <div className="db-card-value">1200</div>
              <div className="db-card-delta db-up">+5%</div>
            </div>
            <div className="db-card">
              <div className="db-card-title">Total Invigilators</div>
              <div className="db-card-value">150</div>
              <div className="db-card-delta db-up">+2%</div>
            </div>
            <div className="db-card">
              <div className="db-card-title">Conflict Alerts</div>
              <div className="db-card-value">5</div>
              <div className="db-card-delta db-down">-1%</div>
            </div>
          </div>

          <div className="db-section-title">Quick Actions</div>
          <div className="db-actions">
            <button className="db-btn-primary" onClick={() => navigate('/exam-unit')}>Create Exam</button>
            <button className="db-btn" onClick={handleUploadExcelClick}>Upload Excel</button>
            <button className="db-btn" onClick={() => navigate('/timetable')}>Timetable</button>
            <input ref={fileInputRef} type="file" accept=".xlsx,.xls,.csv" style={{ display: 'none' }} onChange={handleFileChange} />
          </div>
        </section>
      </main>
    </div>
  );
}

// Main Layout Component (no sidebar for other pages)
function MainLayout() {
  return (
    <div className="app">
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/exam-unit" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/exam-unit" element={<ExamUnit />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/students" element={<div><h1>Students</h1><p>This page is under construction.</p></div>} />
          <Route path="/invigilators" element={<div><h1>Invigilators</h1><p>This page is under construction.</p></div>} />
          <Route path="/collaboration" element={<div><h1>Collaboration</h1><p>This page is under construction.</p></div>} />
          <Route path="/settings" element={<div><h1>Settings</h1><p>This page is under construction.</p></div>} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

