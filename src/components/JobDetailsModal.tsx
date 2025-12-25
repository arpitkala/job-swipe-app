import  type { Job } from "../types/Job";

type Props = {
  job: Job;
  onApply: () => void;
};

const JobDetailsModal = ({ job, onApply }: Props) => {
  return (
    <div className="modal">
      <h2>{job.title}</h2>
      <p>{job.description}</p>

      <h4>Eligibility</h4>
      <p>CGPA: {job.eligibility.cgpa}</p>
      <p>Branch: {job.eligibility.branch}</p>

      <h4>Requirements</h4>
      <ul>
        {job.requirements.map(req => (
          <li key={req}>{req}</li>
        ))}
      </ul>

      <button onClick={onApply}>Apply</button>
    </div>
  );
};

export default JobDetailsModal;
