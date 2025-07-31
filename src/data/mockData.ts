export const dashboardStats = {
  candidatePool: { value: 2845, change: 8, trend: "up" },
  openJobs: { value: 156, change: 12, trend: "up" },
  totalShortlisted: { value: 486, change: -3, trend: "down" },
  totalJoined: { value: 184, change: 15, trend: "up" },
};

export const recruitmentFunnelData = [
  { name: "Shared", value: 850, color: "#4f46e5" },
  { name: "Shortlisted", value: 550, color: "#06b6d4" },
  { name: "Interviewed", value: 450, color: "#ec4899" },
  { name: "Offered", value: 250, color: "#f59e0b" },
  { name: "Joined", value: 150, color: "#10b981" },
];

export const applicationSourcesData = [
  { name: "Career Page", value: 750, color: "#4f46e5" },
  { name: "Referral", value: 500, color: "#06b6d4" },
  { name: "LinkedIn", value: 250, color: "#ec4899" },
  { name: "Others", value: 100, color: "#10b981" },
];

export const clientDynamicsData = [
  { name: "Total", value: 950, color: "#4f46e5" },
  { name: "Active", value: 500, color: "#10b981" },
  { name: "Dormant", value: 250, color: "#ec4899" },
  { name: "Lost Clients", value: 100, color: "#06b6d4" },
];

export const additionalMetrics = [
  {
    id: "fresh-mandate",
    title: "Fresh Mandate",
    subtitle: "New Jobs Added",
    value: 12,
    icon: "calendar",
  },
  {
    id: "low-response",
    title: "Low Response Jobs",
    subtitle: "Low Applicant Response",
    value: 8,
    icon: "document",
  },
  {
    id: "ctc-opportunity",
    title: "Total CTC Opportunity",
    subtitle: "Aggregate CTC to deliver",
    value: "₹4.2 Cr",
    icon: "star",
  },
  {
    id: "success-probability",
    title: "Probability of Success",
    subtitle: "Revenue Possibility",
    value: "76%",
    icon: "calendar",
  },
  {
    id: "loopholes",
    title: "Loopholes",
    subtitle: "Jobs with no Active resume",
    value: 5,
    icon: "document",
  },
  {
    id: "interview-schedule",
    title: "Today's Interview Schedule",
    subtitle: "",
    value: 12,
    icon: "calendar",
  },
];

// Client Management Data
export const clientsData = [
  {
    id: 1,
    clientName: "Tech Solutions Inc",
    industry: "IT",
    location: "New York, USA",
    totalHiringManagers: 5,
    city: "New York",
    websiteUrl: "https://techsolutions.com",
    emailDomain: "@techsolutions.com",
    gstNumber: "GST123456789",
    notes: "Leading technology company"
  },
  {
    id: 2,
    clientName: "Global Finance Corp",
    industry: "Finance",
    location: "London, UK",
    totalHiringManagers: 3,
    city: "London",
    websiteUrl: "https://globalfinance.com",
    emailDomain: "@globalfinance.com",
    gstNumber: "GST987654321",
    notes: "International finance corporation"
  },
  {
    id: 3,
    clientName: "Healthcare Plus",
    industry: "Healthcare",
    location: "Toronto, Canada",
    totalHiringManagers: 4,
    city: "Toronto",
    websiteUrl: "https://healthcareplus.com",
    emailDomain: "@healthcareplus.com",
    gstNumber: "GST456789123",
    notes: "Healthcare services provider"
  },
];

export const hiringManagersData = [
  {
    id: 1,
    clientId: 1,
    fullName: "John Smith",
    designation: "Senior HR Manager",
    phoneNumber: "+1-555-0123",
    email: "john.smith@techsolutions.com",
    department: "Human Resources",
    alternatePhoneNumber: "+1-555-0124",
    linkedinProfile: "https://linkedin.com/in/johnsmith"
  },
  {
    id: 2,
    clientId: 1,
    fullName: "Sarah Johnson",
    designation: "Technical Recruiter",
    phoneNumber: "+1-555-0125",
    email: "sarah.johnson@techsolutions.com",
    department: "Talent Acquisition",
    alternatePhoneNumber: "+1-555-0126",
    linkedinProfile: "https://linkedin.com/in/sarahjohnson"
  },
];

// Admin Settings Data
export const modulePermissions = [
  {
    id: "job-management",
    title: "Job Management",
    description: "Allows clients to view and manage jobs assigned to them",
    enabled: true,
    category: "Core Features"
  },
  {
    id: "resume-dashboard",
    title: "Resume Dashboard",
    description: "Enables access to candidate resumes shared with client",
    enabled: true,
    category: "Core Features"
  },
  {
    id: "interview-scheduling",
    title: "Interview Scheduling",
    description: "Hides interview calendar & booking tools",
    enabled: false,
    category: "Core Features"
  },
  {
    id: "reports-analytics",
    title: "Reports & Analytics",
    description: "Grants access to performance and hiring reports",
    enabled: true,
    category: "Advanced Tools"
  },
  {
    id: "communication-hub",
    title: "Communication Hub",
    description: "Enables access to candidate resumes shared with client",
    enabled: true,
    category: "Advanced Tools"
  },
  {
    id: "quiz-test-results",
    title: "Quiz/Test Results",
    description: "View candidate quiz performance and results",
    enabled: false,
    category: "Advanced Tools"
  },
];

// Quiz Data
export const quizData = [
  {
    id: 1,
    title: "Introduction to React Development",
    function: "Development",
    role: "Frontend Developer",
    questionCount: 25,
    timeLimit: "45 min",
    completionStats: "856/1000",
    status: "active",
    avgScore: "78%",
    createdDate: "Jan 15, 2024"
  },
  {
    id: 2,
    title: "Advanced JavaScript Concepts",
    function: "Development",
    role: "Senior Developer",
    questionCount: 30,
    timeLimit: "60 min",
    completionStats: "423/1000",
    status: "draft",
    avgScore: "82%",
    createdDate: "Jan 10, 2024"
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    function: "Development",
    role: "UI Designer",
    questionCount: 20,
    timeLimit: "30 min",
    completionStats: "678/1000",
    status: "active",
    avgScore: "76%",
    createdDate: "Jan 12, 2024"
  },
  {
    id: 4,
    title: "Project Management Basics",
    function: "Development",
    role: "Project Manager",
    questionCount: 15,
    timeLimit: "25 min",
    completionStats: "234/1000",
    status: "inactive",
    avgScore: "68%",
    createdDate: "Jan 8, 2024"
  },
  {
    id: 5,
    title: "Database Design Fundamentals",
    function: "Development",
    role: "Backend Developer",
    questionCount: 28,
    timeLimit: "50 min",
    completionStats: "567/1000",
    status: "active",
    avgScore: "54%",
    createdDate: "Jan 5, 2024"
  },
];

export const quizQuestionsData = [
  {
    id: 1,
    quizId: 2,
    question: "What is the difference between let, const, and var in JavaScript?",
    type: "MCQ",
    score: "10 pts",
    basics: "Technical",
    options: [
      "FIFO vs LIFO",
      "Same structure",
      "Different memory allocation",
      "Block vs function scope"
    ],
    correctAnswer: 3
  },
  {
    id: 2,
    quizId: 2,
    question: "Explain the concept of closures in JavaScript with an example.",
    type: "Short",
    score: "15 pts",
    basics: "Technical"
  },
  {
    id: 3,
    quizId: 2,
    question: "How would you handle an error in an async/await function?",
    type: "MCQ",
    score: "12 pts",
    basics: "Problem Solving",
    options: [
      "try-catch block",
      "Promise.catch()",
      "callback error handling",
      "All of the above"
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    quizId: 2,
    question: "Describe your experience with React hooks and state management.",
    type: "Short",
    score: "15 pts",
    basics: "Experience"
  },
  {
    id: 5,
    quizId: 2,
    question: "Describe your experience with React hooks and state management.",
    type: "Y/N",
    score: "8 pts",
    basics: "Opinion"
  },
];

// Talent Pool Data
export const talentPoolFolders = [
  {
    id: 1,
    name: "Default Folder",
    description: "Default folder contains the list of all the candidates in the organization, and cannot be deleted",
    candidateCount: 632548,
    type: "default",
    isEditable: false
  },
  {
    id: 2,
    name: "Employee Referral",
    description: "Employee referral contains the list of all the candidates referred through the mail",
    candidateCount: 48,
    type: "referral",
    isEditable: true
  },
  {
    id: 3,
    name: "Default Folder",
    description: "Default folder contains the list of all the candidates in the organization, and cannot be deleted",
    candidateCount: 632548,
    type: "default",
    isEditable: false
  },
];

export const talentPoolSubFolders = [
  {
    id: 1,
    parentId: 1,
    name: "Sub Folders",
    description: "Default folder contains the list of all the candidates in the organization, and cannot be deleted",
    candidateCount: 0,
    type: "subfolder"
  },
  {
    id: 2,
    parentId: 1,
    name: "Sub Folder",
    description: "Default folder contains the list of all the candidates in the organization, and cannot be deleted",
    candidateCount: 0,
    type: "subfolder"
  },
  {
    id: 3,
    parentId: 1,
    name: "Sub Folder",
    description: "Default folder contains the list of all the candidates in the organization, and cannot be deleted",
    candidateCount: 0,
    type: "subfolder"
  },
];

export const candidatesData = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+91-9876543210",
    matchLevel: "High Match",
    timeAgo: "2h ago",
    status: "recommended",
    company: "ABC Company",
    currentDesignation: "Sr. Frontend Developer",
    industry: "IT",
    candidateLocation: "Banglore",
    experience: "8y 8 mo",
    tenureInPresentCompany: "2 y 1 mo",
    highestEducation: "Graduation",
    isOnline: true,
    jobHopper: 85,
    completeness: 85,
    assessment: 85,
    matchScore: 85,
    stage: "In Interview Process",
    stageNumber: "3/5",
    age: 35,
    resumeAge: 160,
    hiredPreviously: "Blacklisted",
    recruiter: "Sarah Wilson",
    isInternal: true,
    currentCTC: "12,00,000",
    expectedCTC: "14,00,000"
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@email.com",
    phone: "+91-9876543211",
    matchLevel: "Medium Match",
    timeAgo: "4h ago",
    status: "sourced",
    company: "ABC Company",
    currentDesignation: "Sr. Frontend Developer",
    industry: "IT",
    candidateLocation: "Noida",
    experience: "8y 8 mo",
    tenureInPresentCompany: "2 y 1 mo",
    highestEducation: "Graduation",
    isOnline: true,
    jobHopper: 75,
    completeness: 75,
    assessment: 75,
    matchScore: 75,
    stage: "Applied",
    stageNumber: "2/5",
    age: 32,
    resumeAge: 120,
    hiredPreviously: "No",
    recruiter: "John Smith",
    isInternal: false,
    currentCTC: "10,00,000",
    expectedCTC: "12,00,000"
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily.davis@email.com",
    phone: "+91-9876543212",
    matchLevel: "Medium Match",
    timeAgo: "1d ago",
    status: "applied",
    company: "ABC Company",
    currentDesignation: "Sr. Frontend Developer",
    industry: "IT",
    candidateLocation: "Delhi",
    experience: "8y 8 mo",
    tenureInPresentCompany: "2 y 1 mo",
    highestEducation: "Graduation",
    isOnline: false,
    jobHopper: 70,
    completeness: 70,
    assessment: 70,
    matchScore: 70,
    stage: "Shortlisted",
    stageNumber: "1/5",
    age: 29,
    resumeAge: 90,
    hiredPreviously: "No",
    recruiter: "Mike Johnson",
    isInternal: false,
    currentCTC: "9,00,000",
    expectedCTC: "11,00,000"
  },
  {
    id: 4,
    name: "Meenakshi Ramandasani",
    email: "meenakshi.r@email.com",
    phone: "+91-9876543213",
    matchLevel: "High Match",
    timeAgo: "3h ago",
    status: "recommended",
    company: "ABC Company",
    currentDesignation: "Sr. Frontend Developer",
    industry: "IT",
    candidateLocation: "Banglore",
    experience: "8y 8 mo",
    tenureInPresentCompany: "2 y 1 mo",
    highestEducation: "Graduation",
    isOnline: true,
    jobHopper: 90,
    completeness: 90,
    assessment: 90,
    matchScore: 90,
    stage: "In Interview Process",
    stageNumber: "4/5",
    age: 33,
    resumeAge: 45,
    hiredPreviously: "No",
    recruiter: "Sarah Wilson",
    isInternal: true,
    currentCTC: "13,00,000",
    expectedCTC: "15,00,000"
  },
  {
    id: 5,
    name: "David Miller",
    email: "david.miller@email.com",
    phone: "+91-9876543214",
    matchLevel: "High Match",
    timeAgo: "5h ago",
    status: "sourced",
    company: "ABC Company",
    currentDesignation: "Sr. Frontend Developer",
    industry: "IT",
    candidateLocation: "Gurgaon",
    experience: "8y 8 mo",
    tenureInPresentCompany: "2 y 1 mo",
    highestEducation: "Graduation",
    isOnline: true,
    jobHopper: 80,
    completeness: 80,
    assessment: 80,
    matchScore: 80,
    stage: "Applied",
    stageNumber: "2/5",
    age: 31,
    resumeAge: 200,
    hiredPreviously: "No",
    recruiter: "Lisa Brown",
    isInternal: false,
    currentCTC: "11,00,000",
    expectedCTC: "13,00,000"
  },
  {
    id: 6,
    name: "Sarah Wilson",
    email: "sarah.wilson@email.com",
    phone: "+91-9876543215",
    matchLevel: "High Match",
    timeAgo: "6h ago",
    status: "applied",
    company: "ABC Company",
    currentDesignation: "Sr. Frontend Developer",
    industry: "IT",
    candidateLocation: "Varanasi",
    experience: "8y 8 mo",
    tenureInPresentCompany: "2 y 1 mo",
    highestEducation: "Graduation",
    isOnline: false,
    jobHopper: 85,
    completeness: 85,
    assessment: 85,
    matchScore: 85,
    stage: "Shortlisted",
    stageNumber: "1/5",
    age: 34,
    resumeAge: 180,
    hiredPreviously: "No",
    recruiter: "Tom Wilson",
    isInternal: true,
    currentCTC: "12,50,000",
    expectedCTC: "14,50,000"
  },
  {
    id: 7,
    name: "Michael Brown",
    email: "michael.brown@email.com",
    phone: "+91-9876543216",
    matchLevel: "Medium Match",
    timeAgo: "7h ago",
    status: "recommended",
    company: "ABC Company",
    currentDesignation: "Sr. Frontend Developer",
    industry: "IT",
    candidateLocation: "Noida",
    experience: "8y 8 mo",
    tenureInPresentCompany: "2 y 1 mo",
    highestEducation: "Graduation",
    isOnline: true,
    jobHopper: 70,
    completeness: 70,
    assessment: 70,
    matchScore: 70,
    stage: "In Interview Process",
    stageNumber: "3/5",
    age: 36,
    resumeAge: 75,
    hiredPreviously: "No",
    recruiter: "Anna Davis",
    isInternal: false,
    currentCTC: "10,50,000",
    expectedCTC: "12,50,000"
  }
];

export const candidateDetailData = {
  id: 1,
  name: "John Doe",
  email: "john.doe@gmail.com",
  phone: "+91- 9876543210",
  age: 35,
  experience: "10 years and 4 months",
  location: "Noida, U.P.",
  recruiter: "Sarah Wilson",
  source: "Internal Referral",
  resumeAge: "160 days",
  hiredPreviously: "Blacklisted",
  jobHopper: 85,
  completeness: 85,
  assessment: 85,
  matchScore: 85,
  stage: "In Interview Process",
  stageNumber: "3/5",
  tabs: [
    { id: "resume", label: "Resume", active: true },
    { id: "forms", label: "Forms" },
    { id: "comments", label: "Comments", hasNotification: true },
    { id: "feedback", label: "Feedback" },
    { id: "tests", label: "Tests" },
    { id: "ai-review", label: "AI Review" },
    { id: "attachments", label: "Attachments" }
  ]
};

export const jobsData = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "ABC Company",
    location: "San Francisco, CA",
    status: "HOT",
    daysPosted: 2,
    cvCount: 48,
    lpa: 12,
    type: "Remote",
  },
  {
    id: 2,
    title: "Product Marketing Manager",
    company: "ABC Company",
    location: "San Francisco, CA",
    status: "Open",
    daysPosted: 4,
    cvCount: 48,
    lpa: 12,
    type: "Hybrid",
  },
  {
    id: 3,
    title: "UX/UI Designer",
    company: "ABC Company",
    location: "San Francisco, CA",
    status: "Draft",
    daysPosted: 7,
    cvCount: 48,
    lpa: 12,
    type: "In-office",
  },
  {
    id: 4,
    title: "Senior Frontend Developer",
    company: "ABC Company",
    location: "San Francisco, CA",
    status: "HOT",
    daysPosted: 10,
    cvCount: 48,
    lpa: 12,
    type: "Remote",
  },
];

export const jobFormData = {
  jobTitle: "Senior Frontend Developer",
  roleLevel: "",
  client: "",
  function: "",
  city: "",
  location: "",
  deploymentType: "",
  responsibility: "",
  travelling: "",
  clientRecruiter: "",
  jobType: "Remote",
  jobDescription: "",
  skills: ["Technical Lead", "5+ years", "React", "Node.js"],
  gender: "",
  noticePeriod: "",
  salaryRange: { min: 1200000, max: 1400000, type: "Annual" },
  workExperience: "5 years",
  experienceLevel: "",
  employmentType: "Full-time",
  differentlyAble: "No",
  languageKnown: "No",
  education: "",
  numberOfOpenings: 1,
  relocationAllowed: "Yes",
  ageRange: { min: 20, max: 24 },
};