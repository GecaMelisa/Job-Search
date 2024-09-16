import React, { useState, useEffect } from "react";
import axios from "axios";
import { AppBar, Tabs, Tab, Typography, Box } from "@mui/material";
import { Job } from "../../utils/types";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const JobTabs: React.FC<{}> = () => {
  const [value, setValue] = useState(0);
  const [fullTimeJobs, setFullTimeJobs] = useState<Job[]>([]);
  const [partTimeJobs, setPartTimeJobs] = useState<Job[]>([]);
  const [internshipJobs, setInternshipJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fullTimeResponse = await axios.get(
          `${import.meta.env.VITE_API_URL}/jobs/type/FULL_TIME`
        );
        setFullTimeJobs(fullTimeResponse.data);

        const partTimeResponse = await axios.get(
          `${import.meta.env.VITE_API_URL}/jobs/type/PART_TIME`
        );
        setPartTimeJobs(partTimeResponse.data);

        const internshipResponse = await axios.get(
          `${import.meta.env.VITE_API_URL}/jobs/type/INTERN`
        );
        setInternshipJobs(internshipResponse.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Full Time Jobs" />
          <Tab label="Part Time Jobs" />
          <Tab label="Internship Positions" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Typography variant="h6">Full Time Jobs</Typography>
        <ul>
          {fullTimeJobs.map((job) => (
            <li key={job.jobId}>
              {job.position} at {job.companyName}
            </li>
          ))}
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="h6">Part Time Jobs</Typography>
        <ul>
          {partTimeJobs.map((job) => (
            <li key={job.jobId}>
              {job.position} at {job.companyName}
            </li>
          ))}
        </ul>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="h6">Internship Positions</Typography>
        <ul>
          {internshipJobs.map((job) => (
            <li key={job.jobId}>
              {job.position} at {job.companyName}
            </li>
          ))}
        </ul>
      </TabPanel>
    </div>
  );
};

export default JobTabs;
