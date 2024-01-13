import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Job } from '../utils/types';
import { jobList } from '../constants';

type Props = {};

const JobPage: React.FC<Props> = (props: Props) => {
  const { position } = useParams<{ position: string }>();
  const job: Job | undefined = jobList.find((j) => j.position === position);

  if (!job) {
    return <p>The requested job does not exist.</p>;
  }

  return (
    <div className="col-12 col-md-6 m-3">
      <Link className="btn btn-info mb-2" to="/">
        Back to Jobs
      </Link>
      <div className="card">
        <div className="card-header">Position: {job.position}</div>
        <div className="card-body">
          <h5 className="card-title">{job.companyName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Location: {job.location}</h6>
          <p className="card-text">
            <li className="list-group-item">Job Type: {job.jobType}</li>
            <li className="list-group-item">Salary: {job.salary}</li>
            <li className="list-group-item">Requirements: {job.requirements}</li>
            <li className="list-group-item">Posted Date: {job.postedDate}</li>
            <li className="list-group-item">Deadline: {job.deadline}</li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobPage;
