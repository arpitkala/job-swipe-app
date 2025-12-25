import type { JobCardData } from "../types/JobCardData";
import "../styles/jobCard.css";

type Props = {
  job: JobCardData;
  swipeDir: "left" | "right" | null;
};

const JobCard = ({ job, swipeDir }: Props) => {
  return (
    <div className={`job-card ${swipeDir ?? ""}`}>
      <img src={job.image} alt={job.title} className="job-image" />

      <div className="job-content">
        <h3>{job.title}</h3>
        <p className="company">{job.company}</p>

        <p className="meta">
          ⏱ {job.duration} • 📍 {job.location}
        </p>

        <div className="tags">
          {job.tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="job-footer">
          <span className="salary"> ₹{job.salary}</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
