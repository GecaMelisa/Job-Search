import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Box, Paper, Card, CardContent, CardActions } from '@mui/material';
import { styled, Theme } from '@mui/system';

interface InfoItemProps {
  icon: string;
  label: string;
  value: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, label, value }) => (
  <div className="info-item">
    <i className={icon}></i>
    <span>
      <strong>{label}:</strong>
      <span>{value}</span>
    </span>
  </div>
);

const RoleLabel = styled(Typography)({
  marginTop: '20px',
  fontSize: '14px',
});

const UserProfileContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(8),
  backgroundColor: '#4e66a2', 
  color: 'white',
  boxShadow: (theme as any).shadows[4], 
  margin: 'auto',
  marginTop: theme.spacing(20),
  marginLeft: theme.spacing(40),
  marginRight: theme.spacing(40),
  marginBottom: theme.spacing(10),
}));

const CustomButton = styled(Button)({
  backgroundColor: 'red',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '5px',
  fontSize: '16px',
  marginTop: '-20px',
  marginRight: '10px',
  display: 'inline-block',
});

const CloseButton = styled('span')({
  position: 'absolute',
  top: '15px',
  right: '15px',
  cursor: 'pointer',
  fontSize: '20px',
});

const UserProfile: React.FC = () => {
  const [profileData, setProfileData] = useState({
    fullName: 'Melisa Geca',
    email: 'melisageca@ibu.edu.ba',
    country: 'BiH',
    city: 'Sarajevo',
    birthDate: '2002-01-25',
    phone: '123-456-7890',
  });

  useEffect(() => {
    // Fetch profile data and update the state (profileData)
  }, []); 

  const showChangePasswordForm = () => {
    // Logic to show change password form
  };

  const closeChangePasswordForm = () => {
    // Logic to close change password form
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 3 }}>
        <Paper elevation={3} sx={{ padding: 3, position: 'relative', backgroundColor: '#4e66a2', color: 'white' }}>
          <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <i className="fas fa-user fa-fw"></i>
            <span>User Profile</span>
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <Box sx={{ mr: 4 }}>
              <img src="images/mely.jpg" alt="User Image" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
              <RoleLabel variant="subtitle2">MEMBER</RoleLabel>
            </Box>
            <Box>
              <Typography variant="h5">John Doe</Typography>
              <InfoItem icon="fas fa-envelope" label="Email" value={profileData.email} />
              <InfoItem icon="fas fa-globe" label="Country" value={profileData.country} />
              <InfoItem icon="fas fa-city" label="City" value={profileData.city} />
              <InfoItem icon="fas fa-birthday-cake" label="Birth Date" value={profileData.birthDate} />
              <InfoItem icon="fas fa-phone" label="Phone" value={profileData.phone} />
            </Box>
          </Box>

          <Box sx={{ textAlign: 'end', position: 'relative' }}>
            <CustomButton onClick={showChangePasswordForm}>Change Password</CustomButton>
          </Box>

          <Box id="change-password-container"></Box>
          <CloseButton onClick={closeChangePasswordForm}>&times;</CloseButton>
        </Paper>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Paper elevation={3} sx={{ padding: 3}}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Applied Jobs
          </Typography>
          {/* Example: */}
          <Card>
            <CardContent >
              <Typography variant="subtitle1">Job Title</Typography>
              <Typography variant="body2">Company Name</Typography>
              {/* Add more job details*/}
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                View Details
              </Button>
            </CardActions>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="subtitle1">Job Title</Typography>
              <Typography variant="body2">Company Name</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                View Details
              </Button>
            </CardActions>
          </Card>
        </Paper>
      </Box>
    </Container>
  );
};

export default UserProfile;
