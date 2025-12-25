import type { Job } from "../types/Job";

const ATSModal = ({ job, onClose }: { job: Job; onClose: () => void }) => {
  const candidateSkills = ["JavaScript", "HTML"];
  const matched = job.requirements.filter(r =>
    candidateSkills.includes(r)
  );

  const score = Math.round(
    (matched.length / job.requirements.length) * 100
  );

  return (
    <div className="modal">
      <h2>ATS Score</h2>
      <h1>{score}%</h1>

      <button onClick={onClose}>Continue</button>
    </div>
  );
};

export default ATSModal;
