import { useEffect, useState } from "react";
import jobsData from "../data/jobs.json";
import JobCard from "../components/JobCard";
import SwipeCard from "../components/SwipeCard";
import JobDetailsModal from "../components/JobDetailsModal";
import ATSModal from "../components/ATSModal";
import type { JobCardData } from "../types/JobCardData";
import type { Job } from "../types/Job";

const jobs: JobCardData[] = jobsData;

const Home = () => {
  const [index, setIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [showATS, setShowATS] = useState(false);
  const [swipeDir, setSwipeDir] =
    useState<"left" | "right" | null>(null);

  //theme state
  const [darkMode, setDarkMode] = useState(false);

  //Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  //Toggle theme
  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    setDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  const job = jobs[index];

  const handleSkip = () => {
    setSwipeDir("left");
    setTimeout(() => {
      setIndex(i => i + 1);
      setSwipeDir(null);
    }, 300);
  };

  const handleInterested = () => {
    setSwipeDir("right");
    setTimeout(() => {
      setShowDetails(true);
      setSwipeDir(null);
    }, 300);
  };

  if (!job) {
    return <h2>No more jobs 🎉</h2>;
  }

  const fullJob: Job = {
    ...job,
    description: "Work on real-world frontend projects.",
    eligibility: { cgpa: "7+", branch: "CS / IT" },
    requirements: ["React", "JavaScript", "HTML", "CSS"]
  };

  return (
    <div className="container">
      {/* theme toggle button */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? "🌞" : "🌙"}
      </button>

      <h2 className="page-title">Trending Jobs</h2>

      <div className="job-row">
        <JobCard job={job} swipeDir={swipeDir} />
      </div>

      <SwipeCard
        onSkip={handleSkip}
        onInterested={handleInterested}
      />

      {showDetails && (
        <JobDetailsModal
          job={fullJob}
          onApply={() => {
            setShowDetails(false);
            setShowATS(true);
          }}
        />
      )}

      {showATS && (
        <ATSModal
          job={fullJob}
          onClose={() => {
            setShowATS(false);
            setIndex(i => i + 1);
          }}
        />
      )}
    </div>
  );
};

export default Home;
