import React, { ChangeEvent, useEffect, useState } from 'react';
import { Job } from '../../utils/types';
import { JobService } from '../../services';
import './jobList.css';
import { jobList } from '../../constants';
import axios from 'axios';

const JobList = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();

  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  /*

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    const filteredJobs = jobList.filter(job => job.position.toLowerCase().includes(e.target.value.toLowerCase()))
 
    setJobs(filteredJobs)
 }*/

 const handlePageSizeChange = (e: any) => {
  setPageSize(Number(e.target.value));
  setPage(0)
}

useEffect(() => {
  console.log('jobs after update:', jobs);
}, [jobs]);


  useEffect(() => {
    var userToken = localStorage.getItem('userToken');
    const fetchData = async () => {
      try {
        setLoading(true);

         //fetch jobs

         let jobsConfig = {
          method: 'get',
          maxBodyLength: Infinity,
          url:`http://localhost:8080/api/jobs/jobsWithPagination?offset=${page * pageSize}&pageSize=${pageSize}&field=${searchTerm}`,
          headers: {
            'Authorization': 'Bearer ' + userToken,
          },
        };
        const jobsResponse = await axios.request(jobsConfig);
        setJobs(jobsResponse.data.data);
        setTotalCount(jobsResponse.data.total)

      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, pageSize, searchTerm]);


    /*
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
  */


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
