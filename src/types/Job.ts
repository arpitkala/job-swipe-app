import type { JobCardData } from "./JobCardData";

export interface Job extends JobCardData {
  description: string;
  eligibility: {
    cgpa: string;
    branch: string;
  };
  requirements: string[];
}
