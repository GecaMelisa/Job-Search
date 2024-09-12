import React, { ChangeEvent, useEffect, useState } from "react";
import JobCard from "../JobCard";
import { Job } from "../../utils/types";
import { JobService } from "../../services";
import "./jobList.css";
import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";
import Search from "../Search";
import { jobList } from "../../constants";

const JobListAxios = ({ companyId }: { companyId?: string }) => {
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();
  const [filterOptions, setFilterOptions] = useState({
    jobType: "None",
    experience: "None",
    location: "None",
  });

  const areFiltersValid = (element: any) => {
    return (
      (element.jobType === filterOptions.jobType ||
        filterOptions.jobType === "None") &&
      (element.seniority === filterOptions.experience ||
        filterOptions.experience === "None") &&
      (element.location === filterOptions.location ||
        filterOptions.location === "None")
    );
  };

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value ? e.target.value.toLowerCase() : "";
    const filteredJobs = allJobs.filter(
      (job) =>
        job.position &&
        job.position.toLowerCase().includes(searchTerm) &&
        areFiltersValid(job)
    );
    setFilteredJobs(filteredJobs);
  };

  useEffect(() => {
    setFilteredJobs(allJobs.filter((element) => areFiltersValid(element)));
  }, [filterOptions]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let data;
        if (!companyId) {
          data = await JobService.getJobs();
        } else if (companyId) {
          data = await JobService.getJobsByCompanyId(companyId || "");
        }
        setAllJobs(data || []);
        setFilteredJobs(data || []);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {!companyId && (
        <div
          className="search-bar"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            marginBottom: "30px",
            width: "100%",
            alignItems: "center",
            justifyItems: "center",
            gap: "20px",
            padding: "30px 0px 30px 0px",
            maxWidth: "1000px",
            paddingLeft: "10px",
          }}
        >
          <FormControl
            fullWidth
            variant="outlined"
            sx={{
              borderRadius: "25px",
              backgroundColor: "#ffff",
              maxWidth: "400px",
              maxHeight: "70px",
            }}
          >
            <OutlinedInput
              startAdornment={
                <InputAdornment position="start">
                  <AiOutlineSearch />
                </InputAdornment>
              }
              placeholder="Search for job..."
              onChange={search}
              sx={{
                borderRadius: "25px",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
                "&:focus": {
                  outline: "none", // Removes the default focus outline
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#175e5e", // Removes the blue border when focused
                },
              }}
            />
          </FormControl>
          <Search
            filterOptions={filterOptions}
            setFilterOptions={setFilterOptions}
          />
        </div>
      )}
      {companyId && (
        <h1 style={{ marginBottom: "24px", marginTop: "45px" }}>
          Jobs By {filteredJobs[0]?.companyName}
        </h1>
      )}

      {loading && (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {error && (
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Unable to render data!</h4>
          <p>{error?.response?.data?.message || error?.message}</p>
          <hr />
          <p className="mb-0">Something went wrong, please try again.</p>
        </div>
      )}
      {!loading && (
        <div className="row">
          {filteredJobs.map((job, index) => {
            console.log(job.company, "company in map");

            return <JobCard key={index} job={job} company={job.company} />;
          })}
        </div>
      )}
    </>
  );
};

export default JobListAxios;
