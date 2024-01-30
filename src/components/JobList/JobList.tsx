import React, { ChangeEvent, useEffect, useState } from 'react';
import { Job } from '../../utils/types';
import { JobService } from '../../services';
import './jobs.css';
import { jobList } from '../../constants';

const JobList: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    const filteredJobs = jobList.filter(job => job.position.toLowerCase().includes(e.target.value.toLowerCase()))
 
    setJobs(filteredJobs)
 }


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await JobService.getJobs();
        setJobs(data);
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
      {loading && <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>}
      {error && <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">Unable to render data!</h4>
        <p>{error?.response?.data?.message || error?.message}</p>
        <hr />
        <p className="mb-0">Something went wrong, please try again.</p>
      </div>}
     
    </>
  );
};

export default JobList;
