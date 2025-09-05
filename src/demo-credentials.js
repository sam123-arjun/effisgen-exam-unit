// Demo credentials for testing different user types
export const demoCredentials = {
  'Exam Unit': [
    { email: 'examunit@effiesgen.com', password: 'admin123' },
    { email: 'admin@university.edu', password: 'password' }
  ],
  'Student': [
    { email: 'student1@university.edu', password: 'student123' },
    { email: 'john.doe@university.edu', password: 'password' }
  ],
  'Invigilator': [
    { email: 'invigilator1@university.edu', password: 'invigilator123' },
    { email: 'prof.smith@university.edu', password: 'password' }
  ]
};

// Helper function to validate credentials
export const validateCredentials = (userType, email, password) => {
  const credentials = demoCredentials[userType] || [];
  return credentials.some(cred => cred.email === email && cred.password === password);
};

