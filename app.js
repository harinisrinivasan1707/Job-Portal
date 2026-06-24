import React, { useState } from "react";

function App() {
  const jobsData = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      location: "Chennai",
      salary: "₹8 LPA",
      description:
        "Build responsive web applications using React and JavaScript."
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Amazon",
      location: "Bangalore",
      salary: "₹10 LPA",
      description:
        "Develop APIs, databases, and scalable backend systems."
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Infosys",
      location: "Hyderabad",
      salary: "₹6 LPA",
      description:
        "Design user-friendly and attractive interfaces."
    },
    {
      id: 4,
      title: "Full Stack Developer",
      company: "TCS",
      location: "Pune",
      salary: "₹9 LPA",
      description:
        "Work on both frontend and backend development."
    },
    {
      id: 5,
      title: "Data Analyst",
      company: "Wipro",
      location: "Mumbai",
      salary: "₹7 LPA",
      description:
        "Analyze data and generate business insights."
    },
    {
      id: 6,
      title: "Software Engineer",
      company: "Accenture",
      location: "Chennai",
      salary: "₹8.5 LPA",
      description:
        "Develop enterprise-level software solutions."
    },
    {
  id: 7,
  title: "Cloud Engineer",
  company: "Cognizant",
  location: "Bangalore",
  salary: "₹9.5 LPA",
  description: "Manage cloud infrastructure and services."
},
{
  id: 8,
  title: "DevOps Engineer",
  company: "HCL",
  location: "Noida",
  salary: "₹8 LPA",
  description: "Automate deployment and CI/CD pipelines."
},
{
  id: 9,
  title: "Cyber Security Analyst",
  company: "IBM",
  location: "Hyderabad",
  salary: "₹10 LPA",
  description: "Monitor and secure enterprise systems."
},
{
  id: 10,
  title: "AI/ML Engineer",
  company: "Microsoft",
  location: "Bangalore",
  salary: "₹12 LPA",
  description: "Build AI and machine learning models."
},
{
  id: 11,
  title: "Java Developer",
  company: "Capgemini",
  location: "Chennai",
  salary: "₹7.5 LPA",
  description: "Develop Java-based applications."
},
{
  id: 12,
  title: "Python Developer",
  company: "Zoho",
  location: "Chennai",
  salary: "₹9 LPA",
  description: "Build backend applications using Python."
},
{
  id: 13,
  title: "System Engineer",
  company: "Infosys",
  location: "Pune",
  salary: "₹6.5 LPA",
  description: "Maintain and support IT systems."
},
{
  id: 14,
  title: "Business Analyst",
  company: "Deloitte",
  location: "Mumbai",
  salary: "₹11 LPA",
  description: "Analyze business requirements."
},
{
  id: 15,
  title: "Mobile App Developer",
  company: "Tech Mahindra",
  location: "Hyderabad",
  salary: "₹8 LPA",
  description: "Develop Android and iOS applications."
}
    
  ];

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [savedJobs, setSavedJobs] = useState([]);

  const filteredJobs = jobsData.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase())
  );

  const saveJob = (job) => {
    if (!savedJobs.find((item) => item.id === job.id)) {
      setSavedJobs([...savedJobs, job]);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Segoe UI",
        background:
          "linear-gradient(135deg,#141e30,#243b55,#4f46e5,#7c3aed)",
        color: "white"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "55px",
          marginBottom: "10px"
        }}
      >
        🚀 CareerConnect
      </h1>

      <p
        style={{
          textAlign: "center",
          fontSize: "18px",
          marginBottom: "30px"
        }}
      >
        Placement Cell Job Portal
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "25px"
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.15)",
            padding: "20px",
            borderRadius: "15px",
            width: "180px",
            textAlign: "center"
          }}
        >
          <h2>{jobsData.length}</h2>
          <p>Total Jobs</p>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.15)",
            padding: "20px",
            borderRadius: "15px",
            width: "180px",
            textAlign: "center"
          }}
        >
          <h2>{savedJobs.length}</h2>
          <p>Saved Jobs</p>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.15)",
            padding: "20px",
            borderRadius: "15px",
            width: "180px",
            textAlign: "center"
          }}
        >
          <h2>15+</h2>
          <p>Companies</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
          marginBottom: "30px"
        }}
      >
        <input
          type="text"
          placeholder="Search Role"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "14px",
            width: "250px",
            borderRadius: "25px",
            border: "none"
          }}
        />

        <input
          type="text"
          placeholder="Filter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{
            padding: "14px",
            width: "250px",
            borderRadius: "25px",
            border: "none"
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(300px,1fr))",
          gap: "20px"
        }}
      >
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            style={{
              background: "rgba(255,255,255,0.15)",
              padding: "20px",
              borderRadius: "20px",
              backdropFilter: "blur(10px)"
            }}
          >
            <h2>{job.title}</h2>

            <p>🏢 {job.company}</p>
            <p>📍 {job.location}</p>
            <p>💰 {job.salary}</p>

            <button
              onClick={() => setSelectedJob(job)}
              style={{
                padding: "10px 15px",
                border: "none",
                borderRadius: "10px",
                background: "#2563eb",
                color: "white",
                marginRight: "10px",
                cursor: "pointer"
              }}
            >
              View Details
            </button>

            <button
              onClick={() => saveJob(job)}
              style={{
                padding: "10px 15px",
                border: "none",
                borderRadius: "10px",
                background: "#ef4444",
                color: "white",
                cursor: "pointer"
              }}
            >
              ❤️ Save
            </button>
          </div>
        ))}
      </div>

      {selectedJob && (
        <div
          style={{
            marginTop: "30px",
            background: "white",
            color: "black",
            padding: "25px",
            borderRadius: "20px"
          }}
        >
          <h2>{selectedJob.title}</h2>

          <p>{selectedJob.description}</p>

          <p>
            <b>Company:</b> {selectedJob.company}
          </p>

          <p>
            <b>Location:</b> {selectedJob.location}
          </p>

          <p>
            <b>Salary:</b> {selectedJob.salary}
          </p>

          <button
            onClick={() => setSelectedJob(null)}
            style={{
              padding: "10px 15px",
              border: "none",
              borderRadius: "10px",
              background: "#2563eb",
              color: "white",
              cursor: "pointer"
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
