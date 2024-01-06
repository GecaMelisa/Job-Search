import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Job } from '../../utils/types';
import { useState, useEffect } from 'react';
import ApplicationModal from '../Modals/ApplicationModal';


type Props = {};

const Jobs = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [jobs, setJobs] = useState<Job[]>([
    
    {
      job_title: 'Frontend Developer',
      job_status: 'ACTIVE',
      company_name: 'IBU',
    },
    {
      job_title: 'Project Manager',
      job_status: 'ACTIVE',
      company_name: 'Mistral',
    },
    {
      job_title: 'Full-Stack Developer',
      job_status: 'ACTIVE',
      company_name: 'Deloitte',
    },
    {
      job_title: 'Graphic Designer',
      job_status: 'ACTIVE',
      company_name: 'Catwalk',
    },
  ]);

  useEffect(() => {}, [jobs]);

  const handleApplyClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='jobs-container'>
      {jobs.map((item, index) => (
        <Card
          key={index}
          className='job-card'
          sx={{
            margin: '35px 250px 40px 250px',
            border: '1px solid #175e5e',
            borderRadius: '7px',
            backgroundColor: '#edede0e3',
            position: 'relative', 
          }}
        >
           <CardHeader title={item.job_title} />
           <CardContent>
            <Typography variant='body2' color='textSecondary' sx={{ fontSize: '14px', fontWeight: 'bold' }}>
              Company: <span style={{ color: '#007bff' }}>{item.company_name}</span>
            </Typography>
            <Typography variant='body2' color='textSecondary' sx={{ fontSize: '14px', fontWeight: 'bold' }}>
              Status: <span style={{ color: item.job_status === 'ACTIVE' ? 'green' : 'red' }}>{item.job_status}</span>
            </Typography>
            <Button
              variant='outlined'
              onClick={handleApplyClick}
              size='medium'
              sx={{
                position: 'absolute',
                marginRight: '10px',
                marginBottom: '11px',
                bottom: '8px',
                right: '8px',
                backgroundColor: '#175e5e', 
                color: '#fff',
              }}
            >
              Apply
            </Button>
          </CardContent>
        </Card>
      ))}

     <ApplicationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Jobs;
