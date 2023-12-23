import React from 'react';
import {
  styled,
  Typography,
  Paper,
  Avatar,
  Button,
  Divider,
  Box,
} from '@mui/material';
import { FaEdit, FaMapMarkerAlt, FaClipboardList } from 'react-icons/fa';

const UserProfileContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  backgroundColor: 'white',
  boxShadow: theme.shadows[4],
  margin: 'auto', // Centriranje containera
  marginTop: theme.spacing(10),
  marginLeft: theme.spacing(40),
  marginRight: theme.spacing(40),
  marginBottom: theme.spacing(10),


}));

const BoxContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#4e66a2',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
}));

const ProfileHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
}));

const AvatarImage = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(12),
  height: theme.spacing(12),
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
}));

const EditButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  height: theme.spacing(4),
  marginTop: theme.spacing(2),
  backgroundColor: '#4e66a2',
  color: theme.palette.secondary.contrastText,
}));

const SectionContainer = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const CardContainer = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default,
}));

const BoldText = styled(Typography)({
  fontWeight: 'bold',
});

const IconStyle = {
  fontSize: '1.2em',
  marginRight: '8px',
  marginTop: '15px',
};

const useStyles = {
  UserProfileContainer,
  BoxContainer,
  ProfileHeader,
  AvatarImage,
  EditButton,
  SectionContainer,
  CardContainer,
  BoldText,
};

const UserProfile = () => {
  return (
    <BoxContainer>
      <UserProfileContainer>
        <ProfileHeader>
          <AvatarImage
            alt="User Avatar"
            src="https://placekitten.com/200/200" // Zamijenite sa stvarnim URL-om slike profila
          />
          <div>
            <BoldText variant="h5" align="center">
              Melisa Geca
            </BoldText>
            <Typography variant="subtitle1" color="textSecondary" align="center">
              Web Developer
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
              <FaMapMarkerAlt style={IconStyle} />
              <Typography variant="body2">Sarajevo</Typography>
            </div>
          </div>
        </ProfileHeader>

        <Divider />

        <SectionContainer>
          <Typography variant="h6">Applied Jobs</Typography>
          <BoldText variant="body1">6</BoldText>
        </SectionContainer>

        <Divider />

        <SectionContainer>
          <Typography variant="h6">About</Typography>
          <Typography variant="body1">
            <BoldText>Passionate Web Developer</BoldText>with a keen eye for design.
          </Typography>
          <Typography variant="body1">
            <BoldText>Lives in Sarajevo</BoldText>Bosnia and Herzegovina.
          </Typography>
          <Typography variant="body1">
            <BoldText>Enthusiastic photographer</BoldText>capturing moments.
          </Typography>
        </SectionContainer>

        <Divider />

        <SectionContainer>
          <Typography variant="h6">Recent Applied Jobs</Typography>
          <CardContainer>
            <div>
              <BoldText variant="h6">Senior Frontend Developer</BoldText>
              <Typography variant="body2" color="textSecondary">
                Tech Co.
              </Typography>
            </div>
            <FaClipboardList style={IconStyle} />
          </CardContainer>
        </SectionContainer>

        <Divider />

        <EditButton variant="outlined"  startIcon={<FaEdit style={IconStyle}  />}>
          Edit Profile
        </EditButton>
      </UserProfileContainer>
    </BoxContainer>
  );
};

export default UserProfile;
