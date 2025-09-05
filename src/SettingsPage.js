import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SettingsPage.css';

const SettingsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('general');

  // Sample state for form values
  const [generalSettings, setGeneralSettings] = useState({
    institutionName: 'ABC University',
    academicYear: '2023-2024',
    semester: 'Fall',
    timeZone: 'UTC+5:30',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: '24-hour',
    language: 'English'
  });

  const [examParameters, setExamParameters] = useState({
    defaultDuration: 180,
    allowedStartTimes: ['09:00', '14:00'],
    breakTime: 30,
    maxExamsPerDay: 2
  });

  // Handle input changes for general settings
  const handleGeneralSettingChange = (e) => {
    const { name, value } = e.target;
    setGeneralSettings({
      ...generalSettings,
      [name]: value
    });
  };

  // Handle input changes for exam parameters
  const handleExamParameterChange = (e) => {
    const { name, value } = e.target;
    setExamParameters({
      ...examParameters,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save settings logic would go here
    alert('Settings saved successfully!');
  };

  return (
    <div className="settings-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <i className="fas fa-graduation-cap"></i>
          <span>Exam Unit</span>
        </div>
        <div className="navbar-menu">
          <Link to="/dashboard" className="navbar-item">
            Dashboard
          </Link>
          <Link to="/exam-unit" className="navbar-item">
            Exam Unit
          </Link>
          <Link to="/students" className="navbar-item">
            Student Management
          </Link>
          <Link to="/invigilators" className="navbar-item">
            Invigilator
          </Link>
          <Link to="/settings" className="navbar-item active">
            Settings
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <i className="fas fa-bell"></i>
          </div>
          <div className="navbar-item">
            <div className="user-avatar">
              <i className="fas fa-user"></i>
            </div>
          </div>
        </div>
      </nav>

      <div className="settings-container">
        <h1 className="settings-title">Settings</h1>
        
        {/* Settings Tabs */}
        <div className="settings-tabs">
          <button 
            className={activeTab === 'general' ? 'tab-active' : ''}
            onClick={() => setActiveTab('general')}
          >
            General
          </button>
          <button 
            className={activeTab === 'users' ? 'tab-active' : ''}
            onClick={() => setActiveTab('users')}
          >
            User Management
          </button>
          <button 
            className={activeTab === 'exams' ? 'tab-active' : ''}
            onClick={() => setActiveTab('exams')}
          >
            Exam Parameters
          </button>
          <button 
            className={activeTab === 'venues' ? 'tab-active' : ''}
            onClick={() => setActiveTab('venues')}
          >
            Room/Venue
          </button>
          <button 
            className={activeTab === 'invigilators' ? 'tab-active' : ''}
            onClick={() => setActiveTab('invigilators')}
          >
            Invigilator
          </button>
          <button 
            className={activeTab === 'collaboration' ? 'tab-active' : ''}
            onClick={() => setActiveTab('collaboration')}
          >
            Collaboration
          </button>
          <button 
            className={activeTab === 'conflicts' ? 'tab-active' : ''}
            onClick={() => setActiveTab('conflicts')}
          >
            Conflict Management
          </button>
          <button 
            className={activeTab === 'data' ? 'tab-active' : ''}
            onClick={() => setActiveTab('data')}
          >
            Data Import/Export
          </button>
        </div>

        {/* Settings Content */}
        <div className="settings-content">
          {/* General System Settings */}
          {activeTab === 'general' && (
            <div className="settings-section">
              <h2>General System Settings</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Institution Name</label>
                  <input 
                    type="text" 
                    name="institutionName" 
                    value={generalSettings.institutionName} 
                    onChange={handleGeneralSettingChange} 
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Academic Year</label>
                    <input 
                      type="text" 
                      name="academicYear" 
                      value={generalSettings.academicYear} 
                      onChange={handleGeneralSettingChange} 
                    />
                  </div>
                  <div className="form-group">
                    <label>Semester</label>
                    <select 
                      name="semester" 
                      value={generalSettings.semester} 
                      onChange={handleGeneralSettingChange}
                    >
                      <option value="Fall">Fall</option>
                      <option value="Spring">Spring</option>
                      <option value="Summer">Summer</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Time Zone</label>
                  <select 
                    name="timeZone" 
                    value={generalSettings.timeZone} 
                    onChange={handleGeneralSettingChange}
                  >
                    <option value="UTC+5:30">UTC+5:30 (IST)</option>
                    <option value="UTC+0">UTC+0 (GMT)</option>
                    <option value="UTC-5">UTC-5 (EST)</option>
                    <option value="UTC-8">UTC-8 (PST)</option>
                  </select>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Date Format</label>
                    <select 
                      name="dateFormat" 
                      value={generalSettings.dateFormat} 
                      onChange={handleGeneralSettingChange}
                    >
                      <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                      <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Time Format</label>
                    <select 
                      name="timeFormat" 
                      value={generalSettings.timeFormat} 
                      onChange={handleGeneralSettingChange}
                    >
                      <option value="12-hour">12-hour (AM/PM)</option>
                      <option value="24-hour">24-hour</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Language</label>
                  <select 
                    name="language" 
                    value={generalSettings.language} 
                    onChange={handleGeneralSettingChange}
                  >
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Spanish">Spanish</option>
                  </select>
                </div>
                <div className="form-actions">
                  <button type="submit" className="save-button">Save Changes</button>
                  <button type="button" className="reset-button">Reset to Default</button>
                </div>
              </form>
            </div>
          )}

          {/* User Management Settings */}
          {activeTab === 'users' && (
            <div className="settings-section">
              <h2>User Management Settings</h2>
              <div className="user-roles-section">
                <h3>Roles & Permissions</h3>
                <div className="role-cards">
                  <div className="role-card">
                    <h4>Administrator</h4>
                    <p>Full access to all system features</p>
                    <button className="edit-role-button">Edit Permissions</button>
                  </div>
                  <div className="role-card">
                    <h4>Invigilator</h4>
                    <p>Access to exam schedules and assignments</p>
                    <button className="edit-role-button">Edit Permissions</button>
                  </div>
                  <div className="role-card">
                    <h4>Student</h4>
                    <p>View-only access to exam schedules</p>
                    <button className="edit-role-button">Edit Permissions</button>
                  </div>
                </div>
              </div>
              
              <div className="user-accounts-section">
                <h3>User Accounts</h3>
                <div className="user-actions">
                  <button className="add-user-button">Add New User</button>
                  <button className="import-users-button">Import Users</button>
                </div>
                <table className="users-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John Doe</td>
                      <td>john.doe@example.com</td>
                      <td>Administrator</td>
                      <td><span className="status-active">Active</span></td>
                      <td>
                        <button className="edit-button">Edit</button>
                        <button className="delete-button">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Jane Smith</td>
                      <td>jane.smith@example.com</td>
                      <td>Invigilator</td>
                      <td><span className="status-active">Active</span></td>
                      <td>
                        <button className="edit-button">Edit</button>
                        <button className="delete-button">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Bob Johnson</td>
                      <td>bob.johnson@example.com</td>
                      <td>Student</td>
                      <td><span className="status-inactive">Inactive</span></td>
                      <td>
                        <button className="edit-button">Edit</button>
                        <button className="delete-button">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="authentication-section">
                <h3>Authentication Options</h3>
                <div className="auth-options">
                  <div className="auth-option">
                    <input type="checkbox" id="password-reset" checked />
                    <label htmlFor="password-reset">Enable password reset</label>
                  </div>
                  <div className="auth-option">
                    <input type="checkbox" id="email-verification" checked />
                    <label htmlFor="email-verification">Require email verification</label>
                  </div>
                  <div className="auth-option">
                    <input type="checkbox" id="sso" />
                    <label htmlFor="sso">Enable Single Sign-On (SSO)</label>
                  </div>
                </div>
                <div className="form-actions">
                  <button className="save-button">Save Changes</button>
                </div>
              </div>
            </div>
          )}

          {/* Exam Parameters */}
          {activeTab === 'exams' && (
            <div className="settings-section">
              <h2>Exam Parameters</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Default Exam Duration (minutes)</label>
                  <input 
                    type="number" 
                    name="defaultDuration" 
                    value={examParameters.defaultDuration} 
                    onChange={handleExamParameterChange} 
                    min="30"
                    step="30"
                  />
                </div>
                
                <div className="form-group">
                  <label>Allowed Exam Start Times</label>
                  <div className="time-slots">
                    <div className="time-slot">
                      <input type="checkbox" id="time-9am" checked />
                      <label htmlFor="time-9am">9:00 AM</label>
                    </div>
                    <div className="time-slot">
                      <input type="checkbox" id="time-11am" />
                      <label htmlFor="time-11am">11:00 AM</label>
                    </div>
                    <div className="time-slot">
                      <input type="checkbox" id="time-2pm" checked />
                      <label htmlFor="time-2pm">2:00 PM</label>
                    </div>
                    <div className="time-slot">
                      <input type="checkbox" id="time-4pm" />
                      <label htmlFor="time-4pm">4:00 PM</label>
                    </div>
                    <button type="button" className="add-time-button">Add Custom Time</button>
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Break Time Between Exams (minutes)</label>
                  <input 
                    type="number" 
                    name="breakTime" 
                    value={examParameters.breakTime} 
                    onChange={handleExamParameterChange} 
                    min="0"
                    step="5"
                  />
                </div>
                
                <div className="form-group">
                  <label>Maximum Exams Per Day for a Student</label>
                  <select 
                    name="maxExamsPerDay" 
                    value={examParameters.maxExamsPerDay} 
                    onChange={handleExamParameterChange}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                
                <div className="form-actions">
                  <button type="submit" className="save-button">Save Changes</button>
                  <button type="button" className="reset-button">Reset to Default</button>
                </div>
              </form>
            </div>
          )}

          {/* Room/Venue Settings */}
          {activeTab === 'venues' && (
            <div className="settings-section">
              <h2>Room / Venue Settings</h2>
              
              <div className="venue-actions">
                <button className="add-venue-button">Add New Venue</button>
                <button className="import-venues-button">Import Venues</button>
              </div>
              
              <table className="venues-table">
                <thead>
                  <tr>
                    <th>Room Name</th>
                    <th>Building</th>
                    <th>Capacity</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>LH-101</td>
                    <td>Main Building</td>
                    <td>120</td>
                    <td>Lecture Hall</td>
                    <td><span className="status-active">Available</span></td>
                    <td>
                      <button className="edit-button">Edit</button>
                      <button className="delete-button">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>CS-Lab-1</td>
                    <td>Computer Science Block</td>
                    <td>60</td>
                    <td>Computer Lab</td>
                    <td><span className="status-active">Available</span></td>
                    <td>
                      <button className="edit-button">Edit</button>
                      <button className="delete-button">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>SR-202</td>
                    <td>Science Block</td>
                    <td>40</td>
                    <td>Seminar Room</td>
                    <td><span className="status-inactive">Under Maintenance</span></td>
                    <td>
                      <button className="edit-button">Edit</button>
                      <button className="delete-button">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>AR-001</td>
                    <td>Arts Block</td>
                    <td>30</td>
                    <td>Accessibility Room</td>
                    <td><span className="status-active">Available</span></td>
                    <td>
                      <button className="edit-button">Edit</button>
                      <button className="delete-button">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Invigilator Settings */}
          {activeTab === 'invigilators' && (
            <div className="settings-section">
              <h2>Invigilator Settings</h2>
              
              <div className="invigilator-upload-section">
                <h3>Upload Invigilator List</h3>
                <div className="upload-options">
                  <button className="upload-excel-button">Upload Excel File</button>
                  <button className="add-manual-button">Add Manually</button>
                </div>
                <div className="upload-template">
                  <p>Download template: <a href="#">invigilator_template.xlsx</a></p>
                </div>
              </div>
              
              <div className="workload-section">
                <h3>Workload Limits</h3>
                <div className="form-group">
                  <label>Maximum Exams Per Day</label>
                  <select>
                    <option value="1">1</option>
                    <option value="2" selected>2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Maximum Exams Per Week</label>
                  <select>
                    <option value="5">5</option>
                    <option value="7">7</option>
                    <option value="10" selected>10</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Minimum Break Between Duties (hours)</label>
                  <select>
                    <option value="1">1</option>
                    <option value="2" selected>2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
              
              <div className="availability-section">
                <h3>Availability Management</h3>
                <p>Set default availability or manage individual invigilator schedules</p>
                <div className="availability-options">
                  <button className="set-default-button">Set Default Availability</button>
                  <button className="manage-individual-button">Manage Individual Schedules</button>
                </div>
              </div>
              
              <div className="form-actions">
                <button className="save-button">Save Changes</button>
              </div>
            </div>
          )}

          {/* Collaboration & Notifications */}
          {activeTab === 'collaboration' && (
            <div className="settings-section">
              <h2>Collaboration & Notifications</h2>
              
              <div className="messaging-section">
                <h3>Messaging Options</h3>
                <div className="messaging-options">
                  <div className="option">
                    <input type="checkbox" id="admin-invigilator" checked />
                    <label htmlFor="admin-invigilator">Enable Admin-Invigilator messaging</label>
                  </div>
                  <div className="option">
                    <input type="checkbox" id="admin-student" checked />
                    <label htmlFor="admin-student">Enable Admin-Student messaging</label>
                  </div>
                  <div className="option">
                    <input type="checkbox" id="invigilator-student" />
                    <label htmlFor="invigilator-student">Enable Invigilator-Student messaging</label>
                  </div>
                </div>
              </div>
              
              <div className="notification-section">
                <h3>Notification Preferences</h3>
                <table className="notification-table">
                  <thead>
                    <tr>
                      <th>Event</th>
                      <th>Email</th>
                      <th>In-App</th>
                      <th>SMS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Exam Schedule Published</td>
                      <td><input type="checkbox" checked /></td>
                      <td><input type="checkbox" checked /></td>
                      <td><input type="checkbox" /></td>
                    </tr>
                    <tr>
                      <td>Exam Schedule Changed</td>
                      <td><input type="checkbox" checked /></td>
                      <td><input type="checkbox" checked /></td>
                      <td><input type="checkbox" checked /></td>
                    </tr>
                    <tr>
                      <td>Invigilator Assignment</td>
                      <td><input type="checkbox" checked /></td>
                      <td><input type="checkbox" checked /></td>
                      <td><input type="checkbox" /></td>
                    </tr>
                    <tr>
                      <td>Room Change</td>
                      <td><input type="checkbox" checked /></td>
                      <td><input type="checkbox" checked /></td>
                      <td><input type="checkbox" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="file-sharing-section">
                <h3>File Sharing Permissions</h3>
                <div className="file-sharing-options">
                  <div className="option">
                    <input type="checkbox" id="share-timetables" checked />
                    <label htmlFor="share-timetables">Allow sharing of timetables</label>
                  </div>
                  <div className="option">
                    <input type="checkbox" id="share-reports" checked />
                    <label htmlFor="share-reports">Allow sharing of reports</label>
                  </div>
                  <div className="option">
                    <input type="checkbox" id="share-student-data" />
                    <label htmlFor="share-student-data">Allow sharing of student data</label>
                  </div>
                </div>
              </div>
              
              <div className="form-actions">
                <button className="save-button">Save Changes</button>
              </div>
            </div>
          )}

          {/* Conflict Management Rules */}
          {activeTab === 'conflicts' && (
            <div className="settings-section">
              <h2>Conflict Management Rules</h2>
              
              <div className="overlap-rules-section">
                <h3>Overlap Rules</h3>
                <div className="rule-option">
                  <input type="checkbox" id="no-student-overlap" checked disabled />
                  <label htmlFor="no-student-overlap">No student can have two exams at the same time (Required)</label>
                </div>
                <div className="rule-option">
                  <input type="checkbox" id="no-same-day" checked />
                  <label htmlFor="no-same-day">Avoid scheduling same-batch exams on the same day</label>
                </div>
                <div className="rule-option">
                  <input type="checkbox" id="no-consecutive" checked />
                  <label htmlFor="no-consecutive">Avoid back-to-back exams for the same batch</label>
                </div>
              </div>
              
              <div className="priority-section">
                <h3>Exam Priority</h3>
                <p>Set priority for exam scheduling conflicts</p>
                <div className="priority-list">
                  <div className="priority-item">
                    <span className="priority-number">1</span>
                    <span className="priority-text">Major/Core Subject Exams</span>
                    <button className="move-up-button" disabled>↑</button>
                    <button className="move-down-button">↓</button>
                  </div>
                  <div className="priority-item">
                    <span className="priority-number">2</span>
                    <span className="priority-text">Elective Subject Exams</span>
                    <button className="move-up-button">↑</button>
                    <button className="move-down-button">↓</button>
                  </div>
                  <div className="priority-item">
                    <span className="priority-number">3</span>
                    <span className="priority-text">Lab Exams</span>
                    <button className="move-up-button">↑</button>
                    <button className="move-down-button" disabled>↓</button>
                  </div>
                </div>
              </div>
              
              <div className="custom-constraints-section">
                <h3>Custom Constraints</h3>
                <div className="custom-constraints-list">
                  <div className="constraint-item">
                    <p>Minimum 1 day gap between consecutive exams for first-year students</p>
                    <div className="constraint-actions">
                      <button className="edit-button">Edit</button>
                      <button className="delete-button">Delete</button>
                    </div>
                  </div>
                  <div className="constraint-item">
                    <p>Schedule all programming exams in computer labs</p>
                    <div className="constraint-actions">
                      <button className="edit-button">Edit</button>
                      <button className="delete-button">Delete</button>
                    </div>
                  </div>
                </div>
                <button className="add-constraint-button">Add Custom Constraint</button>
              </div>
              
              <div className="form-actions">
                <button className="save-button">Save Changes</button>
              </div>
            </div>
          )}

          {/* System Data Import/Export */}
          {activeTab === 'data' && (
            <div className="settings-section">
              <h2>System Data Import/Export</h2>
              
              <div className="import-section">
                <h3>Import Data</h3>
                <div className="import-options">
                  <div className="import-option">
                    <h4>Student Data</h4>
                    <p>Import student information including roll numbers, courses, and batches</p>
                    <button className="import-button">Import Students</button>
                    <a href="#" className="download-template">Download Template</a>
                  </div>
                  <div className="import-option">
                    <h4>Course List</h4>
                    <p>Import course information including course codes, names, and credits</p>
                    <button className="import-button">Import Courses</button>
                    <a href="#" className="download-template">Download Template</a>
                  </div>
                  <div className="import-option">
                    <h4>Exam Subjects</h4>
                    <p>Import exam subject details including subject codes and exam durations</p>
                    <button className="import-button">Import Subjects</button>
                    <a href="#" className="download-template">Download Template</a>
                  </div>
                </div>
              </div>
              
              <div className="export-section">
                <h3>Export Data</h3>
                <div className="export-options">
                  <div className="export-option">
                    <h4>Exam Timetables</h4>
                    <p>Export complete exam schedules in various formats</p>
                    <div className="export-buttons">
                      <button className="export-pdf-button">Export as PDF</button>
                      <button className="export-excel-button">Export as Excel</button>
                      <button className="export-csv-button">Export as CSV</button>
                    </div>
                  </div>
                  <div className="export-option">
                    <h4>Reports</h4>
                    <p>Export system reports and analytics</p>
                    <div className="export-buttons">
                      <button className="export-pdf-button">Export as PDF</button>
                      <button className="export-excel-button">Export as Excel</button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="backup-section">
                <h3>Backup & Restore</h3>
                <div className="backup-options">
                  <div className="backup-option">
                    <h4>Create Backup</h4>
                    <p>Create a complete backup of all system data and settings</p>
                    <button className="backup-button">Create Backup</button>
                  </div>
                  <div className="backup-option">
                    <h4>Restore from Backup</h4>
                    <p>Restore system from a previous backup file</p>
                    <button className="restore-button">Restore System</button>
                  </div>
                </div>
                <div className="backup-history">
                  <h4>Backup History</h4>
                  <table className="backup-table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Size</th>
                        <th>Created By</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2023-11-15 09:30 AM</td>
                        <td>24.5 MB</td>
                        <td>Admin</td>
                        <td>
                          <button className="download-button">Download</button>
                          <button className="restore-from-button">Restore</button>
                          <button className="delete-button">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <td>2023-11-01 10:15 AM</td>
                        <td>23.8 MB</td>
                        <td>System</td>
                        <td>
                          <button className="download-button">Download</button>
                          <button className="restore-from-button">Restore</button>
                          <button className="delete-button">Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;