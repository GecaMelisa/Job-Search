import React from 'react';
import { Paper, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/system';

interface UserInfo {
  id: string;
  userType: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
}

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

interface UserComponentProps {
  user: UserInfo;
}

export const UserComponent: React.FC<UserComponentProps> = ({ user }) => (
  <Paper elevation={3} sx={{ padding: 3, marginTop: 3 }}>
    <Typography variant="h5">{`${user.firstName} ${user.lastName}`}</Typography>
    <RoleLabel variant="subtitle2">{user.userType}</RoleLabel>

    <InfoItem icon="fas fa-envelope" label="Email" value={user.email} />
    {/* Add other InfoItem components with corresponding data from the profile */}
  </Paper>
);

export default UserComponent;