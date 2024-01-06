import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

type ApplicationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    education: '',
    workExperience: '',
    cv: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSendClick = () => {
    // dodati logiku za submitanje app
    console.log('Form data sent:', formData);
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, maxWidth: '90%', bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
      <Typography variant="h6" component="div" sx={{ color: '#175e5e', fontWeight: 'bold' }}>
        A few steps to Your dream Job..
      </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
       
            <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            <TextField
            label="Education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
            </Box>
            <TextField
            label="Work Experience"
            name="workExperience"
            value={formData.workExperience}
            onChange={handleChange}
            multiline
            rows={2} 
            fullWidth
            margin="normal"
            />

            <TextField
            label="CV"
            name="cv"
            value={formData.cv}
            onChange={handleChange}
            multiline
            rows={4} 
            fullWidth
            margin="normal"
            />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
        <Button onClick={onClose} sx={{ backgroundColor: '#ff862a', color: '#fff', width: '120px', height: '40px'}}>
            Cancel
        </Button>
        <Button onClick={handleSendClick} sx={{ backgroundColor: '#175e5e', color: '#fff', width: '120px', height: '40px'}}>
            Send
        </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ApplicationModal;
