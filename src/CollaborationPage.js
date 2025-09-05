import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CollaborationPage.css';

function CollaborationPage() {
  const navigate = useNavigate();
  
  // Navigation menu items
  const menuItems = [
    { label: "Dashboard", path: "/dashboard", icon: "🏠" },
    { label: "Exam Unit", path: "/exam-unit", icon: "📄" },
    { label: "Timetable", path: "/timetable", icon: "🗓️" },
    { label: "Students", path: "/students", icon: "👥" },
    { label: "Invigilators", path: "/invigilators", icon: "🧑‍🏫" },
    { label: "Collaboration", path: "/collaboration", icon: "🤝" },
    { label: "Settings", path: "/settings", icon: "⚙️" }
  ];

  // State for active tab
  const [activeTab, setActiveTab] = useState('messages');
  
  // Sample data for demonstration
  const [messages, setMessages] = useState([
    { id: 1, sender: 'John Doe', content: 'When will the exam schedule be finalized?', timestamp: '10:30 AM', isRead: true },
    { id: 2, sender: 'Admin', content: 'The exam schedule will be finalized by tomorrow.', timestamp: '11:15 AM', isRead: false },
    { id: 3, sender: 'Sarah Smith', content: 'Is there a possibility to reschedule the Math exam?', timestamp: 'Yesterday', isRead: true },
  ]);
  
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: 'Exam Hall Change', content: 'Physics exam shifted from Hall A to Hall B due to maintenance.', date: '2023-05-15', author: 'Admin' },
    { id: 2, title: 'New Exam Guidelines', content: 'Please review the updated exam guidelines for the upcoming semester.', date: '2023-05-10', author: 'Exam Unit' },
    { id: 3, title: 'Holiday Notice', content: 'The university will be closed on May 20th for a public holiday.', date: '2023-05-08', author: 'Admin' },
  ]);
  
  const [sharedFiles, setSharedFiles] = useState([
    { id: 1, name: 'Seating Chart - Hall A.pdf', size: '2.5 MB', uploadedBy: 'Admin', date: '2023-05-15' },
    { id: 2, name: 'Exam Guidelines.docx', size: '1.2 MB', uploadedBy: 'Exam Unit', date: '2023-05-10' },
    { id: 3, name: 'Invigilator Schedule.xlsx', size: '3.7 MB', uploadedBy: 'Admin', date: '2023-05-08' },
  ]);
  
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Distribute exam papers', assignedTo: 'John Smith', status: 'Pending', dueDate: '2023-05-20' },
    { id: 2, title: 'Manage hall entry', assignedTo: 'Sarah Johnson', status: 'Completed', dueDate: '2023-05-15' },
    { id: 3, title: 'Collect answer sheets', assignedTo: 'Michael Brown', status: 'Pending', dueDate: '2023-05-25' },
  ]);
  
  const [feedbackItems, setFeedbackItems] = useState([
    { id: 1, from: 'Student', name: 'Alice Cooper', content: 'I have a scheduling conflict with the Physics exam.', status: 'Unresolved', date: '2023-05-15' },
    { id: 2, from: 'Invigilator', name: 'Prof. Johnson', content: 'Hall A is too small for 150 students. Need a larger venue.', status: 'Resolved', date: '2023-05-10' },
    { id: 3, from: 'Student', name: 'Bob Smith', content: 'Can we have a 15-minute break during the 3-hour exam?', status: 'Under Review', date: '2023-05-08' },
  ]);
  
  const [invitations, setInvitations] = useState([
    { id: 1, email: 'professor.new@university.edu', role: 'Invigilator', status: 'Pending', sentDate: '2023-05-15' },
    { id: 2, email: 'student.new@university.edu', role: 'Student', status: 'Accepted', sentDate: '2023-05-10' },
    { id: 3, email: 'admin.new@university.edu', role: 'Admin', status: 'Declined', sentDate: '2023-05-08' },
  ]);
  
  const [calendarEvents] = useState([
    { id: 1, title: 'Mathematics Exam', date: '2023-05-20', time: '10:00 AM', venue: 'Hall A', participants: '120 students' },
    { id: 2, title: 'Physics Exam', date: '2023-05-22', time: '2:00 PM', venue: 'Hall B', participants: '85 students' },
    { id: 3, title: 'Computer Science Exam', date: '2023-05-25', time: '9:00 AM', venue: 'Lab 101', participants: '50 students' },
  ]);
  
  // State for new message
  const [newMessage, setNewMessage] = useState('');
  const [selectedContact, setSelectedContact] = useState('John Doe');
  
  // State for new announcement
  const [newAnnouncement, setNewAnnouncement] = useState({ title: '', content: '' });
  
  // State for new task
  const [newTask, setNewTask] = useState({ title: '', assignedTo: '', dueDate: '' });
  
  // State for new feedback
  const [newFeedback, setNewFeedback] = useState({ content: '' });
  
  // State for new invitation
  const [newInvitation, setNewInvitation] = useState({ email: '', role: 'Student' });
  
  // Handlers for various actions
  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    const newMsg = {
      id: messages.length + 1,
      sender: 'You',
      content: newMessage,
      timestamp: 'Just now',
      isRead: true
    };
    
    setMessages([newMsg, ...messages]);
    setNewMessage('');
  };
  
  const handlePostAnnouncement = () => {
    if (newAnnouncement.title.trim() === '' || newAnnouncement.content.trim() === '') return;
    
    const announcement = {
      id: announcements.length + 1,
      title: newAnnouncement.title,
      content: newAnnouncement.content,
      date: new Date().toISOString().split('T')[0],
      author: 'You'
    };
    
    setAnnouncements([announcement, ...announcements]);
    setNewAnnouncement({ title: '', content: '' });
  };
  
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const newFile = {
      id: sharedFiles.length + 1,
      name: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      uploadedBy: 'You',
      date: new Date().toISOString().split('T')[0]
    };
    
    setSharedFiles([newFile, ...sharedFiles]);
  };
  
  const handleAddTask = () => {
    if (newTask.title.trim() === '' || newTask.assignedTo.trim() === '' || newTask.dueDate.trim() === '') return;
    
    const task = {
      id: tasks.length + 1,
      title: newTask.title,
      assignedTo: newTask.assignedTo,
      status: 'Pending',
      dueDate: newTask.dueDate
    };
    
    setTasks([...tasks, task]);
    setNewTask({ title: '', assignedTo: '', dueDate: '' });
  };
  
  const handleTaskStatusChange = (id, newStatus) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status: newStatus } : task
    ));
  };
  
  const handleSubmitFeedback = () => {
    if (newFeedback.content.trim() === '') return;
    
    const newFeedbackItem = {
      id: feedbackItems.length + 1,
      from: 'You',
      name: 'You',
      content: newFeedback.content,
      status: 'Unresolved',
      date: new Date().toISOString().split('T')[0]
    };
    
    setFeedbackItems([newFeedbackItem, ...feedbackItems]);
    setNewFeedback({ content: '' });
  };
  
  const handleSendInvitation = () => {
    if (newInvitation.email.trim() === '') return;
    
    const invitation = {
      id: invitations.length + 1,
      email: newInvitation.email,
      role: newInvitation.role,
      status: 'Pending',
      sentDate: new Date().toISOString().split('T')[0]
    };
    
    setInvitations([...invitations, invitation]);
    setNewInvitation({ email: '', role: 'Student' });
  };
  
  return (
    <div className="collab-container">
      {/* Navigation Bar */}
      <aside className="collab-sidebar">
        <div className="collab-brand-row">
          <div className="collab-brand-dot" />
          <div className="collab-logo">EffiESGen</div>
        </div>
        <ul className="collab-menu">
          {menuItems.map((m) => (
            <li 
              key={m.label} 
              className={m.path === "/collaboration" ? "active" : ""} 
              onClick={() => navigate(m.path)}
            >
              <span className="collab-menu-icon" aria-hidden>{m.icon}</span>
              <span>{m.label}</span>
            </li>
          ))}
        </ul>
        <div className="collab-help">Help and Docs</div>
      </aside>

      <main className="collab-main">
        {/* Top Bar */}
        <header className="collab-topbar">
          <h1 className="collab-page-title">Collaboration Hub</h1>
          <div className="collab-topbar-right">
            <div className="collab-search">
              <span className="collab-search-icon">🔍</span>
              <input placeholder="Search" />
            </div>
            <button className="collab-icon-btn" title="Notifications">🔔</button>
            <div className="collab-avatar">👩</div>
          </div>
        </header>

        {/* Tabs Navigation */}
        <div className="collab-tabs">
          <button 
            className={`collab-tab ${activeTab === 'messages' ? 'active' : ''}`}
            onClick={() => setActiveTab('messages')}
          >
            💬 Messages
          </button>
          <button 
            className={`collab-tab ${activeTab === 'announcements' ? 'active' : ''}`}
            onClick={() => setActiveTab('announcements')}
          >
            📢 Announcements
          </button>
          <button 
            className={`collab-tab ${activeTab === 'files' ? 'active' : ''}`}
            onClick={() => setActiveTab('files')}
          >
            📁 Files
          </button>
          <button 
            className={`collab-tab ${activeTab === 'tasks' ? 'active' : ''}`}
            onClick={() => setActiveTab('tasks')}
          >
            ✅ Tasks
          </button>
          <button 
            className={`collab-tab ${activeTab === 'feedback' ? 'active' : ''}`}
            onClick={() => setActiveTab('feedback')}
          >
            💭 Feedback
          </button>
          <button 
            className={`collab-tab ${activeTab === 'invitations' ? 'active' : ''}`}
            onClick={() => setActiveTab('invitations')}
          >
            ✉️ Invitations
          </button>
          <button 
            className={`collab-tab ${activeTab === 'calendar' ? 'active' : ''}`}
            onClick={() => setActiveTab('calendar')}
          >
            📅 Calendar
          </button>
        </div>

        {/* Tab Content */}
        <div className="collab-content">
          {/* Messages Tab */}
          {activeTab === 'messages' && (
            <div className="collab-messages-container">
              <div className="collab-contacts">
                <h3>Contacts</h3>
                <div className="collab-contact-list">
                  <div 
                    className={`collab-contact ${selectedContact === 'John Doe' ? 'active' : ''}`}
                    onClick={() => setSelectedContact('John Doe')}
                  >
                    <div className="collab-contact-avatar">👨</div>
                    <div className="collab-contact-info">
                      <div className="collab-contact-name">John Doe</div>
                      <div className="collab-contact-status">Student</div>
                    </div>
                  </div>
                  <div 
                    className={`collab-contact ${selectedContact === 'Admin' ? 'active' : ''}`}
                    onClick={() => setSelectedContact('Admin')}
                  >
                    <div className="collab-contact-avatar">👩‍💼</div>
                    <div className="collab-contact-info">
                      <div className="collab-contact-name">Admin</div>
                      <div className="collab-contact-status">Admin</div>
                    </div>
                  </div>
                  <div 
                    className={`collab-contact ${selectedContact === 'Sarah Smith' ? 'active' : ''}`}
                    onClick={() => setSelectedContact('Sarah Smith')}
                  >
                    <div className="collab-contact-avatar">👩</div>
                    <div className="collab-contact-info">
                      <div className="collab-contact-name">Sarah Smith</div>
                      <div className="collab-contact-status">Student</div>
                    </div>
                  </div>
                  <div className="collab-contact">
                    <div className="collab-contact-avatar">👨‍🏫</div>
                    <div className="collab-contact-info">
                      <div className="collab-contact-name">Prof. Johnson</div>
                      <div className="collab-contact-status">Invigilator</div>
                    </div>
                  </div>
                </div>
                <button className="collab-new-chat-btn">+ New Chat</button>
              </div>
              <div className="collab-chat">
                <div className="collab-chat-header">
                  <div className="collab-chat-avatar">
                    {selectedContact === 'John Doe' ? '👨' : 
                     selectedContact === 'Admin' ? '👩‍💼' : '👩'}
                  </div>
                  <div className="collab-chat-info">
                    <div className="collab-chat-name">{selectedContact}</div>
                    <div className="collab-chat-status">Online</div>
                  </div>
                </div>
                <div className="collab-chat-messages">
                  {messages.map(message => (
                    <div key={message.id} className={`collab-message ${message.sender === 'You' ? 'sent' : 'received'}`}>
                      <div className="collab-message-content">{message.content}</div>
                      <div className="collab-message-time">{message.timestamp}</div>
                    </div>
                  ))}
                </div>
                <div className="collab-chat-input">
                  <input 
                    type="text" 
                    placeholder="Type a message..." 
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <button onClick={handleSendMessage}>Send</button>
                </div>
              </div>
            </div>
          )}

          {/* Announcements Tab */}
          {activeTab === 'announcements' && (
            <div className="collab-announcements">
              <div className="collab-section-header">
                <h2>Announcements</h2>
                <button className="collab-btn-primary">+ New Announcement</button>
              </div>
              
              {/* New Announcement Form */}
              <div className="collab-new-announcement">
                <input 
                  type="text" 
                  placeholder="Announcement Title" 
                  value={newAnnouncement.title}
                  onChange={(e) => setNewAnnouncement({...newAnnouncement, title: e.target.value})}
                />
                <textarea 
                  placeholder="Announcement Content" 
                  value={newAnnouncement.content}
                  onChange={(e) => setNewAnnouncement({...newAnnouncement, content: e.target.value})}
                ></textarea>
                <button className="collab-btn-primary" onClick={handlePostAnnouncement}>Post Announcement</button>
              </div>
              
              {/* Announcements List */}
              <div className="collab-announcements-list">
                {announcements.map(announcement => (
                  <div key={announcement.id} className="collab-announcement-card">
                    <div className="collab-announcement-header">
                      <h3>{announcement.title}</h3>
                      <span className="collab-announcement-date">{announcement.date}</span>
                    </div>
                    <div className="collab-announcement-content">{announcement.content}</div>
                    <div className="collab-announcement-footer">
                      <span className="collab-announcement-author">Posted by: {announcement.author}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Files Tab */}
          {activeTab === 'files' && (
            <div className="collab-files">
              <div className="collab-section-header">
                <h2>Shared Files</h2>
                <div>
                  <input 
                    type="file" 
                    id="file-upload" 
                    style={{ display: 'none' }} 
                    onChange={handleFileUpload} 
                  />
                  <label htmlFor="file-upload" className="collab-btn-primary">+ Upload File</label>
                </div>
              </div>
              
              <div className="collab-files-list">
                <table className="collab-files-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Size</th>
                      <th>Uploaded By</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sharedFiles.map(file => (
                      <tr key={file.id}>
                        <td>
                          <div className="collab-file-name">
                            <span className="collab-file-icon">📄</span>
                            {file.name}
                          </div>
                        </td>
                        <td>{file.size}</td>
                        <td>{file.uploadedBy}</td>
                        <td>{file.date}</td>
                        <td>
                          <button className="collab-btn-sm">Download</button>
                          <button className="collab-btn-sm collab-btn-danger">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tasks Tab */}
          {activeTab === 'tasks' && (
            <div className="collab-tasks">
              <div className="collab-section-header">
                <h2>Tasks & Responsibilities</h2>
                <button className="collab-btn-primary">+ New Task</button>
              </div>
              
              {/* New Task Form */}
              <div className="collab-new-task">
                <input 
                  type="text" 
                  placeholder="Task Title" 
                  value={newTask.title}
                  onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                />
                <input 
                  type="text" 
                  placeholder="Assigned To" 
                  value={newTask.assignedTo}
                  onChange={(e) => setNewTask({...newTask, assignedTo: e.target.value})}
                />
                <input 
                  type="date" 
                  placeholder="Due Date" 
                  value={newTask.dueDate}
                  onChange={(e) => setNewTask({...newTask, dueDate: e.target.value})}
                />
                <button className="collab-btn-primary" onClick={handleAddTask}>Add Task</button>
              </div>
              
              {/* Tasks List */}
              <div className="collab-tasks-list">
                <table className="collab-tasks-table">
                  <thead>
                    <tr>
                      <th>Task</th>
                      <th>Assigned To</th>
                      <th>Status</th>
                      <th>Due Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tasks.map(task => (
                      <tr key={task.id}>
                        <td>{task.title}</td>
                        <td>{task.assignedTo}</td>
                        <td>
                          <select 
                            value={task.status}
                            onChange={(e) => handleTaskStatusChange(task.id, e.target.value)}
                            className={`collab-status-select ${task.status.toLowerCase()}`}
                          >
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                          </select>
                        </td>
                        <td>{task.dueDate}</td>
                        <td>
                          <button className="collab-btn-sm">Edit</button>
                          <button className="collab-btn-sm collab-btn-danger">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Feedback Tab */}
          {activeTab === 'feedback' && (
            <div className="collab-feedback">
              <div className="collab-section-header">
                <h2>Feedback & Comments</h2>
              </div>
              
              {/* New Feedback Form */}
              <div className="collab-new-feedback">
                <textarea 
                  placeholder="Share your feedback or report an issue..." 
                  value={newFeedback.content}
                  onChange={(e) => setNewFeedback({...newFeedback, content: e.target.value})}
                ></textarea>
                <button className="collab-btn-primary" onClick={handleSubmitFeedback}>Submit Feedback</button>
              </div>
              
              {/* Feedback List */}
              <div className="collab-feedback-list">
                {feedbackItems.map(item => (
                  <div key={item.id} className="collab-feedback-card">
                    <div className="collab-feedback-header">
                      <div>
                        <span className="collab-feedback-from">{item.from}</span>
                        <span className="collab-feedback-name">{item.name}</span>
                      </div>
                      <span className={`collab-feedback-status ${item.status.toLowerCase().replace(' ', '-')}`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="collab-feedback-content">{item.content}</div>
                    <div className="collab-feedback-footer">
                      <span className="collab-feedback-date">{item.date}</span>
                      <div className="collab-feedback-actions">
                        <button className="collab-btn-sm">Reply</button>
                        {item.status !== 'Resolved' && (
                          <button className="collab-btn-sm collab-btn-success">Mark Resolved</button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Invitations Tab */}
          {activeTab === 'invitations' && (
            <div className="collab-invitations">
              <div className="collab-section-header">
                <h2>Collaborator Invitations</h2>
              </div>
              
              {/* New Invitation Form */}
              <div className="collab-new-invitation">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  value={newInvitation.email}
                  onChange={(e) => setNewInvitation({...newInvitation, email: e.target.value})}
                />
                <select 
                  value={newInvitation.role}
                  onChange={(e) => setNewInvitation({...newInvitation, role: e.target.value})}
                >
                  <option value="Student">Student</option>
                  <option value="Invigilator">Invigilator</option>
                  <option value="Admin">Admin</option>
                </select>
                <button className="collab-btn-primary" onClick={handleSendInvitation}>Send Invitation</button>
              </div>
              
              {/* Invitations List */}
              <div className="collab-invitations-list">
                <table className="collab-invitations-table">
                  <thead>
                    <tr>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Sent Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invitations.map(invitation => (
                      <tr key={invitation.id}>
                        <td>{invitation.email}</td>
                        <td>{invitation.role}</td>
                        <td>
                          <span className={`collab-invitation-status ${invitation.status.toLowerCase()}`}>
                            {invitation.status}
                          </span>
                        </td>
                        <td>{invitation.sentDate}</td>
                        <td>
                          {invitation.status === 'Pending' && (
                            <>
                              <button className="collab-btn-sm">Resend</button>
                              <button className="collab-btn-sm collab-btn-danger">Cancel</button>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Calendar Tab */}
          {activeTab === 'calendar' && (
            <div className="collab-calendar">
              <div className="collab-section-header">
                <h2>Shared Calendar</h2>
                <button className="collab-btn-primary">+ Add Event</button>
              </div>
              
              <div className="collab-calendar-view">
                {/* Calendar Navigation */}
                <div className="collab-calendar-nav">
                  <button className="collab-btn-sm">◀ Previous</button>
                  <h3>May 2023</h3>
                  <button className="collab-btn-sm">Next ▶</button>
                </div>
                
                {/* Calendar Grid - Simplified for demo */}
                <div className="collab-calendar-grid">
                  <div className="collab-calendar-days">
                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                  </div>
                  <div className="collab-calendar-dates">
                    {/* First row */}
                    <div className="collab-calendar-date prev-month">30</div>
                    <div className="collab-calendar-date">1</div>
                    <div className="collab-calendar-date">2</div>
                    <div className="collab-calendar-date">3</div>
                    <div className="collab-calendar-date">4</div>
                    <div className="collab-calendar-date">5</div>
                    <div className="collab-calendar-date">6</div>
                    
                    {/* Second row */}
                    <div className="collab-calendar-date">7</div>
                    <div className="collab-calendar-date">8</div>
                    <div className="collab-calendar-date">9</div>
                    <div className="collab-calendar-date">10</div>
                    <div className="collab-calendar-date">11</div>
                    <div className="collab-calendar-date">12</div>
                    <div className="collab-calendar-date">13</div>
                    
                    {/* Third row */}
                    <div className="collab-calendar-date">14</div>
                    <div className="collab-calendar-date">15</div>
                    <div className="collab-calendar-date">16</div>
                    <div className="collab-calendar-date">17</div>
                    <div className="collab-calendar-date">18</div>
                    <div className="collab-calendar-date">19</div>
                    <div className="collab-calendar-date">20</div>
                    
                    {/* Fourth row with events */}
                    <div className="collab-calendar-date">21</div>
                    <div className="collab-calendar-date has-event">22</div>
                    <div className="collab-calendar-date">23</div>
                    <div className="collab-calendar-date">24</div>
                    <div className="collab-calendar-date has-event">25</div>
                    <div className="collab-calendar-date">26</div>
                    <div className="collab-calendar-date">27</div>
                    
                    {/* Fifth row */}
                    <div className="collab-calendar-date">28</div>
                    <div className="collab-calendar-date">29</div>
                    <div className="collab-calendar-date">30</div>
                    <div className="collab-calendar-date">31</div>
                    <div className="collab-calendar-date next-month">1</div>
                    <div className="collab-calendar-date next-month">2</div>
                    <div className="collab-calendar-date next-month">3</div>
                  </div>
                </div>
                
                {/* Upcoming Events */}
                <div className="collab-upcoming-events">
                  <h3>Upcoming Events</h3>
                  {calendarEvents.map(event => (
                    <div key={event.id} className="collab-event-card">
                      <div className="collab-event-date">
                        <div className="collab-event-day">{event.date.split('-')[2]}</div>
                        <div className="collab-event-month">{new Date(event.date).toLocaleString('default', { month: 'short' })}</div>
                      </div>
                      <div className="collab-event-details">
                        <h4>{event.title}</h4>
                        <div className="collab-event-info">
                          <div><span className="collab-event-icon">🕒</span> {event.time}</div>
                          <div><span className="collab-event-icon">📍</span> {event.venue}</div>
                          <div><span className="collab-event-icon">👥</span> {event.participants}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default CollaborationPage;