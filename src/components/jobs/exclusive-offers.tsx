"use client";

import useToggleModal from "@/hooks/use-toggle-modal";
import { useState } from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../ui/modal";
import JobCard from "./job-card";
import JobDetails from "./job-details";
import Button from "../button";
import { Job } from "../jobs";
import { useJob } from "@/context/job-context";

export interface ExclusiveOffersProps {
  jobs: Job[];
}

const ExclusiveOffers = ({ jobs }: ExclusiveOffersProps) => {
  const { open, toggleModal } = useToggleModal();
  const [visibleJobs, setVisibleJobs] = useState(6);

  const { setSelectedJob } = useJob();
  const loadMoreJobs = () => setVisibleJobs((prev) => prev + 6);
  const showLessJobs = () => setVisibleJobs(6);

  return (
    <Box pt="2rem" pb="8rem">
      <Heading
        fontSize={{ base: "1.5rem", md: "2rem" }}
        fontWeight={"semibold"}
        textAlign="center"
        mx="auto"
        mt="2.5rem"
        mb={{base: '1.6rem', md:'2.5rem'}}
      >
        Exclusive Offers
      </Heading>

      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gapY={"2rem"}
        gapX={'1rem'}
        mb="3rem"
        w="100%"
      >
        <AnimatePresence>
          {jobs.slice(0, visibleJobs).map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="jobCard"
            >
              <JobCard
                company_name={job.company_name}
                company_logo={job.company_logo}
                title={job.title}
                category={job.category}
                job_type={job.job_type}
                salary={job.salary}
                candidate_required_location={job.candidate_required_location}
                publication_date={job.publication_date}
                url={job.url}
                onClick={() => {
                  toggleModal();
                  setSelectedJob(job);
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </Flex>

      <Flex gap={4} mt="2rem" justifyContent={"center"} alignItems={"center"}>
        {visibleJobs < jobs?.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Button onClick={loadMoreJobs} bg="#35383F">
              Load More
            </Button>
          </motion.div>
        )}

        {visibleJobs > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Button onClick={showLessJobs} bg="#E0E0E0" color="#757575">
              Show Less
            </Button>
          </motion.div>
        )}
      </Flex>

      <Modal size="xl" open={open} onOpenChange={toggleModal}>
        <JobDetails />
      </Modal>
    </Box>
  );
};

export default ExclusiveOffers;
