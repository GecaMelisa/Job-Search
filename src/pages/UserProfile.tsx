import React, { useState } from 'react';
import { Container, Typography, Button, Box, Paper, Card, CardContent, CardActions } from '@mui/material';
import { styled } from '@mui/system';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import { User } from '../utils/types';
import { UserService } from '../services';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useQuery } from 'react-query';
import JobModal from '../components/Modals/JobModal';
import CompanyModal from '../components/Modals/CompanyModal';

type UserInfo = {
  user: {
    id: string;
    userType: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    email: string;
    phoneNumber: string;
    address: string;
    education: string;
    username: string;
  };
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
  const [isJobModalOpen, setJobModalOpen] = useState(false);
  const [isCompanyModalOpen, setCompanyModalOpen] = useState(false);

  const handleCreateJobClick = () => {
    setJobModalOpen(true);
  }

  const handleCreateCompanyClick = () => {
    setCompanyModalOpen(true);
  }

  const handleCloseJobModal = () => {
    setJobModalOpen(false);
  }

  const handleCloseCompanyModal = () => {
    setCompanyModalOpen(false);
  }

  const dispatch = useDispatch();
  const { id } = useParams();
  const userToken = useSelector((state: RootState) => state.auth.userToken || '');

  const { data: user, isLoading, isError } = useQuery<UserInfo, Error>(
    ['user', id],
    () => UserService.getCurrentUser(userToken),
    {
      enabled: Boolean(id) && Boolean(userToken), // Execute the query only when id and userToken are available
    }
  );

 
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 3 }}>
        {/* Navigacija */}
        <Paper elevation={3} sx={{ padding: 3, position: 'relative', backgroundColor: '#175e5e', color: 'white' }}>
          <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', gap: 2 , marginTop: '10px'}}>
            <i className="fas fa-user fa-fw"></i>
            <span style={{ color: '#e3e3a4e3', marginTop: '20px' }}>JobSearch</span>
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mt: 2 }}>
            <li key="home" className='menuList text-[#4e66a2] hover:text-blueColor'>
              <Link className="nav-link font-bold" to="/home">Home</Link>
            </li>

            <li key="about" className='menuList text-[#4e66a2] hover:text-blueColor'>
              <Link className="nav-link font-bold" to="/about">About</Link>
            </li>

            <li key="userProfile" className='menuList text-[#4e66a2] hover:text-blueColor'>
              <Link className="nav-link font-bold" to="/userProfile/${id}">MyProfile</Link>
            </li>

          <li key="logout" className='menuList text-[#4e66a2] hover:text-blueColor'>
            <a
              className="nav-link font-bold"
              style={{ color: '#cd6225' }}
              onClick={() => {
                dispatch(logout());
                // navigate('/login'); // Redirekcija na login stranicu nakon odjave
              }}
            >
              Logout
            </a>
          </li>
          </Box>
        </Paper>

        {/* Podaci o korisniku */}
        {isLoading && (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        {isError && typeof isError === 'boolean' && (
          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Unable to render data!</h4>
            <p>Something went wrong, please try again.</p>
            <hr />
            <p className="mb-0">Another error message if needed.</p>
          </div>
        )}

        {!isLoading && userToken && user && (
          <Paper elevation={3} sx={{ padding: 3, marginTop: 3 }}>
            <Typography variant="h5">{`${user.user.firstName} ${user.user.lastName}`}</Typography>
            <RoleLabel variant="subtitle2">{user.user.userType}</RoleLabel>

            <InfoItem icon="fas fa-envelope" label="Email" value={user.user.email} />
            {/* Dodati ostale InfoItem komponente prema potrebi s odgovarajućim podacima iz profila */}
            <Box sx={{ textAlign: 'end', position: 'relative' }}>
            </Box>

          </Paper>
          
        )}
      </Box>

      <Box sx={{ mt: 3 }}>
     
      <Button variant="contained" color="primary" onClick={handleCreateJobClick}>
        Create Job
      </Button>

      <Button variant="contained" color="primary" onClick={handleCreateCompanyClick}>
          Create Company
        </Button>

      
        {isJobModalOpen && (
          <JobModal onCancel={handleCloseJobModal} onSubmitJob={(formData) => {
            console.log('Job data submitted:', formData);
            handleCloseJobModal();
          }} />
        )}

        {isCompanyModalOpen && (
          <CompanyModal onCancel={handleCloseCompanyModal} />
        )}

  	  



        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Applied Jobs
          </Typography>
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
          {/* Dodajte logiku za prikaz primijenjenih poslova */}
        </Paper>
      </Box>
    </Container>
  );
};

export default UserProfile;
