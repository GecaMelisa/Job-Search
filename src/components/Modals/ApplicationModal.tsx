import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

type ApplicationModalProps = {
  isOpen: boolean;
  onClose: () => void;
   job: {
    id: string;
  };
};

const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose, job}) => {

  const [formData, setFormData] = useState({
    jobId: '',
    userId: '',
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
        jobId: formData.jobId, 
        userId: formData.userId,
        education: formData.education,
        workExperience: formData.workExperience,
        cv: formData.cv,
      });
       console.log('Application submitted successfully:', response.data);

       onClose();
     } catch (error) {
       // Ukoliko dođe do greške, možete dodati logiku za prikazivanje poruke korisniku
       console.error('Error submitting application:', error);
     }
   };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, maxWidth: '90%', bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <Typography variant="h6" component="div" sx={{ color: '#175e5e', fontWeight: 'bold' }}>
          A few steps to Your dream Job..
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}> </Box>
        
        <TextField
          label="JobId"
          name="jobId"
          value={formData.jobId}
          onChange={handleChange}
          multiline
          rows={1}
          fullWidth
          margin="normal"
        />
           
          <TextField
          label="UserId"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
          multiline
          rows={1}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Education"
          name="education"
          value={formData.education}
          onChange={handleChange}
          multiline
          rows={3}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Work Experience"
          name="workExperience"
          value={formData.workExperience}
          onChange={handleChange}
          multiline
          rows={3}
          fullWidth
          margin="normal"
        />

        <TextField
          label="CV"
          name="cv"
          value={formData.cv}
          onChange={handleChange}
          multiline
          rows={5}
          fullWidth
          margin="normal"
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
          <Button onClick={onClose} sx={{ backgroundColor: '#ff862a', color: '#fff', width: '120px', height: '40px' }}>
            Cancel
          </Button>
          <Button onClick={handleSendClick} sx={{ backgroundColor: '#175e5e', color: '#fff', width: '120px', height: '40px' }}>
            Send
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ApplicationModal;
