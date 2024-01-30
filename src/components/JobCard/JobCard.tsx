import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ApplicationModal from '../Modals/ApplicationModal';
import './jobs.css';
import { useUpdateJob } from '../../hooks/useUpdateJob';
import UpdateJobModal from '../Modals/UpdateJobModal';
import { Job, User } from '../../utils/types';
import axios from 'axios';
import useDeleteJob from '../../hooks/useDeleteJob';

type JobCardProps = {
  job: Job;
};


const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const updateJobMutation = useUpdateJob();
  const deleteJobMutation =useDeleteJob();

  const [info, setInfo] = useState<User>({
    userType: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    address: '',
    education: '',
    username: '',
  });

  const [loading, setLoading] = useState<boolean>(false); 
  const [error, setError] = useState<any>(null); 

  const handleApplyClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdateClick = () => {
    setIsUpdateModalOpen(true);
  };

  const handleUpdateJob = (updatedJobData: Job) => {
    updateJobMutation.mutate(updatedJobData);
    setIsUpdateModalOpen(false);
  };

  const handleCancelUpdate = () => {
    setIsUpdateModalOpen(false); // Close the modal when canceling
  };

  const handleDeleteClick = async () => {
      if (window.confirm('Are you sure you want to delete this job?')) {
        await deleteJobMutation.mutateAsync(job.jobId);
      }
    };

  useEffect(() => {
    var userToken = localStorage.getItem('userToken');
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch user info
        let userConfig = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'http://localhost:8080/api/users/userInfo',
          headers: {
            'Authorization': 'Bearer ' + userToken,
          },
        };
        const userResponse = await axios.request(userConfig);
        setInfo(userResponse.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    
    <Card
      className='job-card'
      sx={{
        margin: '20px auto',
        borderRadius: '10px',
        border: '1.5px solid #175e5e',
        backgroundColor: '#edede0e3',
        position: 'relative',
        width: '80%',
        maxWidth: '980px',
      }}
    >

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
            <>
          <CardHeader title={job.position} sx={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '8px', color: '#175e5e' }} />
          <CardContent>
            <Typography variant='body2' color='#333' sx={{ fontSize: '15px', marginBottom: '4px' }}>
              <span style={{ fontWeight: 'bold', color: '#175e5e' }}>Company:</span> {job.companyName}
            </Typography>
            <Typography variant='body2' color='#333' sx={{ fontSize: '15px', marginBottom: '4px' }}>
              <span style={{ fontWeight: 'bold', color: '#175e5e' }}>Description:</span> {job.description}
            </Typography>
            <Typography variant='body2' color='#333' sx={{ fontSize: '15px', marginBottom: '4px' }}>
              <span style={{ fontWeight: 'bold', color: '#175e5e' }}>Job Type:</span> {job.jobType}
            </Typography>
            <Typography variant='body2' color='#333' sx={{ fontSize: '15px', marginBottom: '4px' }}>
              <span style={{ fontWeight: 'bold', color: '#175e5e' }}>Location:</span> {job.location}
            </Typography>
            <Typography variant='body2' color='#333' sx={{ fontSize: '15px', marginBottom: '4px' }}>
              <span style={{ fontWeight: 'bold', color: '#175e5e' }}>Requirements:</span> {job.requirements.join(', ')}
            </Typography>
            <Typography variant='body2' color='#333' sx={{ fontSize: '15px', marginBottom: '4px' }}>
              <span style={{ fontWeight: 'bold', color: '#175e5e' }}>Salary:</span> {job.salary}
            </Typography>
          
            <Typography variant='body2' color='textSecondary' sx={{ fontSize: '15px', fontWeight: 'bold', marginTop: '8px', color: 'red' }}>
              <span style={{ fontWeight: 'bold', color: '#175e5e' }}>Deadline:</span> {job.deadline}
            </Typography>
          
            {info.userType === 'COMPANY_OWNER' || info.userType === 'ADMIN' ? (
            
            <Button
              variant='outlined'
              onClick={handleDeleteClick}
              size='medium'
              disabled={deleteJobMutation.isLoading}
              sx={{
                position: 'absolute',
                bottom: '25px',
                right: '230px',
                backgroundColor: 'red',
                color: '#fff',
              }}
            >
              {deleteJobMutation.isLoading ? 'Deleting...' : 'Delete'}
            </Button>
            ) : null}
          
            {info.userType === 'COMPANY_OWNER' || info.userType === 'ADMIN' ? (

            <Button
              variant='outlined'
              onClick={handleUpdateClick}
              size='medium'
              disabled={updateJobMutation.isLoading}
              sx={{
                position: 'absolute',
                bottom: '25px',
                right: '120px',
                backgroundColor: '#ff862a',
                color: '#fff',
              }}
            >
              {updateJobMutation.isLoading ? 'Updating...' : 'Update'}
            </Button>
            ) : null}

            <Button
              variant='outlined'
              onClick={handleApplyClick}
              size='medium'
              sx={{
                position: 'absolute',
                bottom: '25px',
                right: '25px',
                backgroundColor: '#175e5e',
                color: '#fff',
              }}
            >
              Apply
            </Button>
            <ApplicationModal isOpen={isModalOpen} onClose={handleCloseModal} job={job} />  
            <UpdateJobModal
              isOpen={isUpdateModalOpen}
              onCancel={handleCancelUpdate} 
              onSubmitJob={handleUpdateJob}
              initialJobData={job}
            />
          </CardContent>
          </>
            )}
        </Card>
  );
};

export default JobCard;