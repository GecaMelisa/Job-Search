import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from '../JobCard';
import { Job } from '../../utils/types';
import { JobService } from '../../services';
import ApplicationModal from '../Modals/ApplicationModal';
import './jobs.css';

const JobListAxios: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();

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
      {!loading &&
        <div className="row">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      }
    </>
  );
};

export default JobListAxios;
