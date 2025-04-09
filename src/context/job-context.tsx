
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Define Job type (customize this based on your job data structure)
interface Job {
  id?: number;
  title?: string;
  company_name?: string;
  company_logo?: string;
  category?: string;
  tags?: string[];
  salary?: string;
  candidate_required_location?: string;
  job_type?: string;
  publication_date?: string;
  url?: string;
  description?: string;
}

interface JobContextType {
  selectedJob: Job | null;
  setSelectedJob: (job: Job | null) => void;
}

// Create context
const JobContext = createContext<JobContextType | undefined>(undefined);

// Context provider
export const JobProvider = ({ children }: { children: ReactNode }) => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <JobContext.Provider value={{ selectedJob, setSelectedJob }}>
      {children}
    </JobContext.Provider>
  );
};

// Custom hook to use the context
export const useJob = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error("useJob must be used within a JobProvider");
  }
  return context;
};
