// JobModal.tsx

import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

type JobModalProps = {
  isOpen: boolean;
  onClose: () => void;
  job?: {
    id: string;
  };
};

const JobModal: React.FC<JobModalProps> = ({ isOpen, onClose, job }) => {
  const [formData, setFormData] = useState({
    // Your form data properties here
    education: '',
    workExperience: '',
    cv: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSendClick = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/applications/submitApp', {
        jobId: job?.id, // Using optional chaining in case job is undefined
        education: formData.education,
        workExperience: formData.workExperience,
        cv: formData.cv,
      });
      console.log('Application submitted successfully:', response.data);

      onClose();
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, maxWidth: '90%', bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <Typography variant="h6" component="div" sx={{ color: '#175e5e', fontWeight: 'bold' }}>
          A few steps to Your dream Job..
        </Typography>

        {/* Your form fields go here */}

        <TextField
          label="Education"
          name="education"
          value={formData.education}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          margin="normal"
        />

        {/* Other form fields... */}

        <Button onClick={onClose} sx={{ backgroundColor: '#ff862a', color: '#fff', width: '120px', height: '40px' }}>
          Cancel
        </Button>
        <Button onClick={handleSendClick} sx={{ backgroundColor: '#175e5e', color: '#fff', width: '120px', height: '40px' }}>
          Send
        </Button>
      </Box>
    </Modal>
  );
};

export default JobModal;
