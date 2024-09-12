import React, { useState, useEffect } from "react";
import { Box, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import "./Search.css";
import JobCard from "../JobCard";
import { Job } from "../../utils/types";

const FormContainer = styled("div")({
  display: "flex",
  //flexDirection: "column",
  alignItems: "center",
  width: "100%",
  gap: "20px",
  //marginTop: "30px",
});

const SearchContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: "8px",
  //flexDirection: "column",
});

const SearchBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "15px",
  color: "#175e5e",
  backgroundColor: "#f0f0f0",
  padding: "10px",
  boxShadow: "0 5px 10px rgba(0, 0, 0, 0.4)",
  width: "100%",
  maxWidth: "600px",
  margin: "20px 0",
});

const RoundedSelect = styled(Select)({
  borderRadius: "50px",
  marginRight: "10px",
  width: "250px",
  height: "56px",
  background: "white",
  maxWidth: "180px",
  "&:focus": {
    outline: "none", // Removes the default focus outline
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#175e5e", // Removes the blue border when focused
  },
});
1;

const cities = [
  "Sarajevo",
  "Banja Luka",
  "Tuzla",
  "Zenica",
  "Mostar",
  "Bihać",
  "Trebinje",
  "Goražde",
  //.............
];

interface Props {
  filterOptions: any;
  setFilterOptions: (filter: any) => void;
}

const Search = ({ filterOptions, setFilterOptions }: Props) => {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [allJobs, setAllJobs] = useState<Job[]>([]);

  const handleJobTypeChange = (event: any) => {
    setFilterOptions((prevState: any) => {
      return { ...prevState, jobType: event.target.value };
    });
  };

  const handleExperienceLevelChange = (event: any) => {
    setFilterOptions((prevState: any) => ({
      ...prevState,
      experience: event.target.value,
    }));
  };

  const handleLocationChange = (event: any) => {
    setFilterOptions((prevState: any) => ({
      ...prevState,
      location: event.target.value,
    }));
  };

  return (
    <div className="search-root-container">
      <FormContainer>
        <SearchContainer>
          {/*<SearchBox>*/}
          <RoundedSelect
            value={filterOptions.jobType}
            onChange={(e) => {
              e.preventDefault();
              handleJobTypeChange(e);
            }}
            variant="outlined"
          >
            <MenuItem value="None">Job type</MenuItem>
            <MenuItem value="FULL_TIME">Full-Time</MenuItem>
            <MenuItem value="PART_TIME">Part-Time</MenuItem>
            <MenuItem value="INTERN">Internship</MenuItem>
          </RoundedSelect>
          <RoundedSelect
            value={filterOptions.experience}
            onChange={(e) => {
              handleExperienceLevelChange(e);
            }}
            variant="outlined"
          >
            <MenuItem value="None">Experience</MenuItem>
            <MenuItem value="Junior">Junior</MenuItem>
            <MenuItem value="Medior">Medior</MenuItem>
            <MenuItem value="Senior">Senior</MenuItem>
          </RoundedSelect>
          <RoundedSelect
            value={filterOptions.location}
            onChange={(e) => {
              handleLocationChange(e);
            }}
            variant="outlined"
          >
            <MenuItem value="None">Location</MenuItem>
            {cities.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </RoundedSelect>
          {/*</SearchBox>*/}
        </SearchContainer>
      </FormContainer>

      <div className="job-list">
        {filteredJobs.map((job, index) => (
          <JobCard
            key={index}
            job={job}
            company={{
              id: "",
              companyName: "",
              description: "",
              companyOwnerId: "",
              address: "",
              phone: "",
              email: "",
              companyOwner: {},
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}

function setError(error: unknown) {
  throw new Error("Function not implemented.");
}
