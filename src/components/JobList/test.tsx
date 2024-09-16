import React, { ChangeEvent, useEffect, useState } from "react";
import JobCard from "../JobCard";
import { Job } from "../../utils/types";
import { JobService } from "../../services";
import "./jobs.css";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  Link,
  Menu,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
  styled,
} from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import { useQuery } from "react-query";

const FormContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
});

const SearchContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

const JobListAxios = () => {
  const [allJobs, setAllJobs] = useState<Job[]>([]);

  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();

  //const [jobs, setJobs] = useState<Job[]>([]);

  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  /*FILTERING*/
  const [jobType, setJobType] = useState([]);
  const [trenutniTip, setTrenutniTip] = useState("");

  /*
  const fetchData = async (e: any) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/jobs/type/${jobType}`)
      
      setAllJobs(response.data.data);
      setTotalCount(response.data.data);

    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }*/

  const [experienceLevel, setExperienceLevel] = useState("Junior");

  const handleJobTypeChange = async (e: any) => {
    setJobType(e.target.value);
    //setTrenutniTip(e.target.value);
    //setAllJobs(jobType);
    //setAllJobs(e.target.value);
    jobType(setTrenutniTip);

    /* useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/jobs/type/${jobType}`);
        const newData = await response.json();
        setAllJobs(newData);
      };
  
      fetchData();
    }, [])*/
  };

  const handleExperienceLevelChange = (e: any) => {
    setExperienceLevel(e.target.value);
  };

  const handleSearch = (e: any) => {
    setJobType(e.target.value);
  };

  /* search sa frontenda */
  /*const search = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value ? e.target.value.toLowerCase() : '';
    console.log('Search Term:', searchTerm);
  
    const filteredJobs = allJobs.filter(
      job => job.position && job.position.toLowerCase().includes(searchTerm)
    );
  
    console.log('Filtered Jobs:', filteredJobs);
  
    setFilteredJobs(filteredJobs);
  };
  */

  const handlePageSizeChange = (e: any) => {
    setPageSize(Number(e.target.value));
    setPage(0);
  };

  useEffect(() => {
    var userToken = localStorage.getItem("userToken");
    const fetchData = async () => {
      try {
        setLoading(true);

        //fetch jobs

        let jobsConfig = {
          method: "get",
          maxBodyLength: Infinity,
          url: `${
            import.meta.env.VITE_API_URL
          }/jobs/jobsWithPaginationAndFiltering/{jobType}?offset=${
            page * pageSize
          }&pageSize=${pageSize}&field=${searchTerm}&jobType=${jobType}`,
          //url: `${import.meta.env.VITE_API_URL}/jobs/type/${jobType.toUpperCase()}`,

          headers: {
            Authorization: "Bearer " + userToken,
          },
        };
        const jobsResponse = await axios.request(jobsConfig);
        setAllJobs(jobsResponse.data.data);
        //setTrenutniTip(jobsResponse.data.data);
        // setJobType(jobsResponse.data.data);
        setTotalCount(jobsResponse.data.total);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, pageSize, searchTerm, trenutniTip]);

  useEffect(() => {
    var userToken = localStorage.getItem("userToken");
    const fetchDataType = async () => {
      try {
        setLoading(true);

        //fetch types

        let jobsConfig = {
          method: "get",
          maxBodyLength: Infinity,
          url: `${import.meta.env.VITE_API_URL}/jobs/getTypes`,

          headers: {
            Authorization: "Bearer " + userToken,
          },
        };
        const jobsResponse = await axios.request(jobsConfig);
        //setAllJobs(jobsResponse.data.data);
        setJobType(jobsResponse.data);
        // setTotalCount(jobsResponse.data.total)
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataType();
  }, []);

  /*
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/jobs/type/${jobType}`);
      const newData = await response.json();
      setJobType(newData);
    };

    fetchData();
  }, [props.jobType]);

  if (jobType) {
    return <div>{}</div>;
  } else {
    return null;
  }*/

  return (
    <>
      <div
        className="search-bar"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "15px",
          maxWidth: "800px",
          width: "100%",
          marginTop: "0px",
          marginBottom: "55px",
        }}
      >
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">&nbsp;</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={
              <InputAdornment position="start">
                <AiOutlineSearch />
              </InputAdornment>
            }
            placeholder="Search for Job..."
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              borderRadius: "8px",
              border: "1px solid ",
              backgroundColor: "#edede0e3",
              "&:hover": {
                color: "#175e5e",
              },
            }}
          />
        </FormControl>

        {/*FILTERING*/}

        <div className="search-root-container">
          <form action="">
            <FormContainer>
              <SearchContainer>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginLeft: "20px",
                    marginRight: "30px",
                  }}
                >
                  <Select
                    value={jobType}
                    onChange={handleJobTypeChange}
                    style={{
                      width: "200px",
                      border: "2px solid #4e66a2",
                      height: "40px",
                    }}
                  >
                    {!loading &&
                      jobType &&
                      jobType.map((jType, index) => (
                        <MenuItem value={jType}>{jType}</MenuItem>
                      ))}
                  </Select>
                  {/*
              <Select defaultValue="Junior" style={{ width: '200px', border: '2px solid #4e66a2', marginLeft: '30px', height: '40px' }}>
                <MenuItem value="Junior">Junior</MenuItem>
                <MenuItem value="Senior">Senior</MenuItem>
                <MenuItem value="Intern">Intern</MenuItem>
        </Select>*/}
                </Box>
                {/* <Button onClick={handleSearch}>Search</Button>*/}
              </SearchContainer>
            </FormContainer>
          </form>
        </div>

        {/**PAGINATION */}

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="pageSize">Select page size:</label>
          <br />
          <select
            name="pageSize"
            id="pageSize"
            value={pageSize}
            onChange={handlePageSizeChange}
          >
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="6">6</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>

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
      {!loading &&
        allJobs &&
        allJobs.map((job, index) => <JobCard key={index} job={job} />)}

      <Button
        onClick={() => {
          setPage(page - 1);
        }}
        disabled={page === 0}
      >
        Previous Page
      </Button>
      {/*<p>{page + 1}</p>*/}
      <Typography variant="body1" sx={{ mx: 2 }}>
        {page + 1} of {Math.ceil(totalCount / pageSize)}
      </Typography>
      <Button
        onClick={() => {
          setPage(page + 1);
        }}
        disabled={page * pageSize + allJobs.length === totalCount}
      >
        Next Page
      </Button>
    </>
  );
};

export default JobListAxios;
