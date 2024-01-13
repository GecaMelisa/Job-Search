import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ApplicationModal from '../Modals/ApplicationModal';
import './jobs.css';

type JobCardProps = {
  job: {
    companyName: string;
    description: string;
    jobId: string;
    jobType: string;
    location: string;
    position?: string;
    postedDate?: string;
    deadline: string;
    salary: number;
    requirements: string[];
    statusRequest: string;
    submittedApplication: any[];
  };
};

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleApplyClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
        <Typography variant='body2' color='#333' sx={{ fontSize: '15px', marginBottom: '4px' }}>
          <span style={{ fontWeight: 'bold', color: '#175e5e' }}>Posted Date:</span> {job.postedDate}
        </Typography>
        <Typography variant='body2' color='textSecondary' sx={{ fontSize: '15px', fontWeight: 'bold', marginTop: '8px', color: 'red' }}>
          <span style={{ fontWeight: 'bold', color: '#175e5e' }}>Deadline:</span> {job.deadline}
        </Typography>
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
        <ApplicationModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </CardContent>
    </Card>
  );
};

export default JobCard;
