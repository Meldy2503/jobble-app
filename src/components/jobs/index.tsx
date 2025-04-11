// "use client";

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
// import Wrapper from "@/components/ui/wrapper";
// import JobSearch from "@/components/jobs/job-search";
// import ExclusiveOffers from "@/components/jobs/exclusive-offers";
// import { Flex, Spinner, Text } from "@chakra-ui/react";

// // Define Job interface
// export interface Job {
//   id?: number;
//   title?: string;
//   company_name?: string;
//   company_logo?: string;
//   category?: string;
//   tags?: string[];
//   salary?: string;
//   candidate_required_location?: string;
//   job_type?: string;
//   publication_date?: string;
//   url?: string;
//   description?: string;
// }

// const JobsPage = () => {
//   const [jobs, setJobs] = useState<Job[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         // Fetch remote jobs from Remotive API
//         const response = await axios.get(
//           "https://remotive.com/api/remote-jobs"
//         );
//         setJobs(response.data.jobs);
//         setLoading(false);
//       } catch (err) {
//         console.log(err);
//         setError("Failed to load jobs. Please try again later.");
//         setLoading(false);
//       }
//     };

//     fetchJobs();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <Wrapper>
//         <JobSearch />

//         {loading ? (
//           <Flex py="15rem" justifyContent="center" alignItems="center">
//             <Spinner />
//             <Text ml={4}>Loading jobs...</Text>
//           </Flex>
//         ) : error ? (
//           <Flex py="15rem" justifyContent="center" alignItems="center">
//             <Text>{error ?? "An error occured while loading jobs"}</Text>
//           </Flex>
//         ) : (
//           <ExclusiveOffers jobs={jobs} />
//         )}
//       </Wrapper>
//       <Footer />
//     </>
//   );
// };

// export default JobsPage;


"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Wrapper from "@/components/ui/wrapper";
import JobSearch from "@/components/jobs/job-search";
import ExclusiveOffers from "@/components/jobs/exclusive-offers";
import { Flex, Spinner, Text } from "@chakra-ui/react";

// Define Job interface
export interface Job {
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

const JobsPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "https://remotive.com/api/remote-jobs"
        );
        setJobs(response.data.jobs);
        setFilteredJobs(response.data.jobs); // Initialize filtered jobs
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError("Failed to load jobs. Please try again later.");
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleSearch = (position: string, location: string) => {
    const filtered = jobs.filter((job) => {
      // If both fields are empty, return all jobs
      if (position === "" && location === "") return true;

      // Check if job title includes the position search term (if provided)
      const matchesPosition =
        position === "" ||
        job.title?.toLowerCase().includes(position.toLowerCase());

      // Check if job location includes the location search term (if provided)
      const matchesLocation =
        location === "" ||
        (job.candidate_required_location &&
          job.candidate_required_location
            .toLowerCase()
            .includes(location.toLowerCase()));

      // Return jobs that match both the provided criteria
      return matchesPosition && matchesLocation;
    });

    setFilteredJobs(filtered);
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        <JobSearch onSearch={handleSearch} />

        {loading ? (
          <Flex py="15rem" justifyContent="center" alignItems="center">
            <Spinner />
            <Text ml={4}>Loading jobs...</Text>
          </Flex>
        ) : error ? (
          <Flex py="15rem" justifyContent="center" alignItems="center">
            <Text>{error ?? "An error occurred while loading jobs"}</Text>
          </Flex>
        ) : (
          <ExclusiveOffers jobs={filteredJobs} />
        )}
      </Wrapper>
      <Footer />
    </>
  );
};

export default JobsPage;