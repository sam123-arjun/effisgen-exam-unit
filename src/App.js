import { useState } from 'react'
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

   const exams = [
    { examName: 'Midterm Exam', course: 'Introduction to Psychology', date: '2024-05-15', time: '10:00 AM', duration: '2 hours', venue: 'Room 201', invigilator: 'Dr. Emily Carter' },
    { examName: 'Final Exam', course: 'Calculus I', date: '2024-05-20', time: '2:00 PM', duration: '3 hours', venue: 'Auditorium A', invigilator: 'Prof. David Lee' },
    { examName: 'Quiz 1', course: 'Organic Chemistry', date: '2024-05-22', time: '11:00 AM', duration: '1 hour', venue: 'Lab 302', invigilator: 'Dr. Sarah Chen' },
  ];

  const filteredExams = exams.filter(exam =>
    exam.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exam.examName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div classNmae="app-container">
      {/*  Header */}
      <header className="header">
        <h1 className="logo">EffisGen</h1>
        <nav className="nav-links">
          <a href="#">Dashboard</a>
          <a href="#">Exam</a>
          <a href="#">Courses</a>
          <a href="#">Invigilators</a>
          <a href="#">Settings</a>

        </nav>
        <buton className="new-exam-btn">New Exam</buton>

      </header>

      {/* Main Content */}

      <main className="main-content">
        <h2 className="page-title">Exam Unit</h2>

        {/* Search Bar*/}
        <div className="search-bar">
          <input type="text" placeholder="Search exams"></input>
        </div>

        {/* Tabs */}
        <div className="tabs">
          <button className="active-tab">All Exams</button>
          <button>Create Exam</button>
          <button>Edit Exam</button>
        </div>

        {/* Table */}
        <table className="exam-table">
          <thead>
            <tr>
              <th>Exam Name</th>
              <th>Courses</th>
              <th>Date</th>
              <th>Time</th>
              <th>Duration</th>
              <th>Venue</th>
              <th>Invigilator</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Midterm Exam</td>
              <td>Introduction to Psychology</td>
              <td>2024-05-15</td>
              <td>10:00 AM</td>
              <td>2 hours</td>
              <td>Room 201</td>
              <td>Dr. Emily Carter</td>
            </tr>

            <tr>
              <td>Final Exam</td>
              <td>Calculus I</td>
              <td>2024-05-20</td>
              <td>2:00 PM</td>
              <td>3 hours</td>
              <td>Auditorium A</td>
              <td>Prof. David Lee</td>
            </tr>


          </tbody>
        </table>




      </main>






    </div>
  );
}



export default App;
