import { useMemo, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Exam_unit.css";
import { initialExams } from "./data";

function ExamUnit() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const initialTab = searchParams.get('tab') || 'all';
  const [activeTab, setActiveTab] = useState(initialTab); // all | create | edit
  const [query, setQuery] = useState("");
  const [exams, setExams] = useState(initialExams);

  const [newExam, setNewExam] = useState({
    examName: "", course: "", date: "", time: "", duration: "", venue: "", invigilator: ""
  });
  const [editExam, setEditExam] = useState(null);

  // If arriving with tab=edit and no item selected, open a blank edit form
  useEffect(() => {
    if (initialTab === 'edit' && !editExam) {
      setEditExam({ examName: '', course: '', date: '', time: '', duration: '', venue: '', invigilator: '', index: 0 });
      setActiveTab('edit');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredExams = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return exams;
    return exams.filter(e =>
      e.examName.toLowerCase().includes(q) ||
      e.course.toLowerCase().includes(q) ||
      e.invigilator.toLowerCase().includes(q)
    );
  }, [query, exams]);

  const addExam = () => {
    if (!newExam.examName || !newExam.course || !newExam.date) return;
    setExams(prev => [...prev, newExam]);
    setNewExam({ examName: "", course: "", date: "", time: "", duration: "", venue: "", invigilator: "" });
    setActiveTab("all");
  };

  const handleEditClick = (exam, index) => {
    setEditExam({ ...exam, index });
    setActiveTab("edit");
    navigate('/exam-unit?tab=edit');
  };

  const updateExam = () => {
    if (!editExam?.examName || !editExam?.course || !editExam?.date) return;
    const next = [...exams];
    next[editExam.index] = {
      examName: editExam.examName,
      course: editExam.course,
      date: editExam.date,
      time: editExam.time,
      duration: editExam.duration,
      venue: editExam.venue,
      invigilator: editExam.invigilator
    };
    setExams(next);
    setEditExam(null);
    setActiveTab("all");
    navigate('/exam-unit');
  };

  return (
    <div className="eu-page">
      {/* top app bar */}
      <header className="eu-topbar">
        <div className="eu-topbar-left">
          <div className="eu-logo">EffiESGen</div>
        </div>
        <nav className="eu-topnav">
          <button className="eu-navlink" onClick={() => navigate('/dashboard')}>Dashboard</button>
          <button className="eu-navlink eu-active" onClick={() => navigate('/exam-unit')}>Exams</button>
          <button className="eu-navlink" >Courses</button>
          <button className="eu-navlink" onClick={() => navigate('/invigilators')}>Invigilators</button>
          <button className="eu-navlink" onClick={() => navigate('/settings')}>Settings</button>
        </nav>
        <div className="eu-topbar-right">
          <button className="eu-primary" onClick={() => setActiveTab('create')}>New Exam</button>
          <div className="eu-avatar">👤</div>
        </div>
      </header>

      <main className="eu-container">
        <div className="eu-header-row">
          <h1 className="eu-title">Exam Unit</h1>
          <button className="eu-primary eu-ghost" onClick={() => setActiveTab("create")}>New Exam</button>
        </div>

        {/* search */}
        <div className="eu-search">
          <span className="eu-search-icon">🔎</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search exams..."
          />
        </div>

        {/* tabs */}
        <div className="eu-tabs">
          <button
            className={`eu-tab ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            All Exams
          </button>
          <button
            className={`eu-tab ${activeTab === "create" ? "active" : ""}`}
            onClick={() => setActiveTab("create")}
          >
            Create Exam
          </button>
          {(
            <button
              className={`eu-tab ${activeTab === "edit" ? "active" : ""}`}
              onClick={() => setActiveTab("edit")}
            >
              Edit Exam
            </button>
          )}
        </div>

        {/* create */}
        {activeTab === "create" && (
          <section className="eu-card">
            <h2 className="eu-card-title">Create New Exam</h2>
            <div className="eu-grid">
              {["examName","course","date","time","duration","venue","invigilator"].map((field) => (
                <label key={field} className="eu-field">
                  <span>{field.charAt(0).toUpperCase() + field.slice(1)}</span>
                  <input
                    type="text"
                    placeholder={field === "date" ? "YYYY-MM-DD" : field === "time" ? "HH:MM" : `Enter ${field}`}
                    value={newExam[field]}
                    onChange={(e) => setNewExam({ ...newExam, [field]: e.target.value })}
                  />
                </label>
              ))}
            </div>
            <div className="eu-actions">
              <button className="eu-primary" onClick={addExam}>Create Exam</button>
              <button className="eu-secondary" onClick={() => setActiveTab("all")}>Cancel</button>
            </div>
          </section>
        )}

        {/* edit */}
        {activeTab === "edit" && (
          <section className="eu-card">
            <h2 className="eu-card-title">Edit Exam</h2>
            <div className="eu-grid">
              {["examName","course","date","time","duration","venue","invigilator"].map((field) => (
                <label key={field} className="eu-field">
                  <span>{field.charAt(0).toUpperCase() + field.slice(1)}</span>
                  <input
                    type="text"
                    placeholder={`Enter ${field}`}
                    value={(editExam && editExam[field]) || ''}
                    onChange={(e) => setEditExam({ ...(editExam || {}), [field]: e.target.value, index: editExam?.index ?? 0 })}
                  />
                </label>
              ))}
            </div>
            <div className="eu-actions">
              <button className="eu-primary" onClick={updateExam}>Update Exam</button>
              <button className="eu-secondary" onClick={() => setActiveTab("all")}>Cancel</button>
            </div>
          </section>
        )}

        {/* list */}
        {activeTab === "all" && (
          <section className="eu-table-card">
            <table className="eu-table">
              <thead>
                <tr>
                  <th>Exam Name</th>
                  <th>Course</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Duration</th>
                  <th>Venue</th>
                  <th>Invigilator</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredExams.map((exam, i) => (
                  <tr key={i}>
                    <td className="eu-strong">{exam.examName}</td>
                    <td className="eu-muted">{exam.course}</td>
                    <td className="eu-code">{exam.date}</td>
                    <td className="eu-code">{exam.time}</td>
                    <td className="eu-muted">{exam.duration}</td>
                    <td className="eu-muted">{exam.venue}</td>
                    <td className="eu-muted">{exam.invigilator}</td>
                    <td className="eu-actions-end">
                      <button className="eu-edit" onClick={() => handleEditClick(exam, i)}>Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
      </main>
    </div>
  );
}

export default ExamUnit;