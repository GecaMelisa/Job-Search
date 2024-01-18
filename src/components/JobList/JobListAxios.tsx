import React, { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from '../JobCard';
import { Job } from '../../utils/types';
import { JobService } from '../../services';
import './jobs.css';
import { FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { AiOutlineSearch } from 'react-icons/ai';

const JobListAxios: React.FC = () => {
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    console.log('Search Term:', searchTerm);

    const filteredJobs = allJobs.filter(job => job.position.toLowerCase().includes(searchTerm));
    
    console.log('Filtered Jobs:', filteredJobs);

    setFilteredJobs(filteredJobs);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await JobService.getJobs();
        setAllJobs(data);
        setFilteredJobs(data); 
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
      <div className='search-bar' style={{ marginLeft: 'auto', marginRight: 'auto', borderRadius: '15px', maxWidth: '800px', width: '100%', marginTop: '0px', marginBottom: '55px'}}>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">&nbsp;</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start"><AiOutlineSearch /></InputAdornment>}
          placeholder="Search for Job..."
          onChange={search}
          sx={{
            borderRadius: '8px',
            border: '1px solid ',
            backgroundColor: '#edede0e3',
            '&:hover': {
              color: '#175e5e',
            },
          }}
        />
      </FormControl>
    </div>


      {loading && <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>}
      {error && <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">Unable to render data!</h4>
        <p>{error?.response?.data?.message || error?.message}</p>
        <hr />
        <p className="mb-0">Something went wrong, please try again.</p>
      </div>}
      {!loading && 
        <div className="row">
          {filteredJobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      }
    </>
  );
};

export default JobListAxios;
