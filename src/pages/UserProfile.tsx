import React, { useEffect, useState } from 'react';
import { Typography, Button, Box, Paper, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Application, Company, User } from '../utils/types';
import JobModal from '../components/Modals/JobModal';
import CompanyModal from '../components/Modals/CompanyModal';

const UserInfoContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginTop: '20px',
  marginLeft: '80px',
  marginRight: '80px',
  backgroundColor: '#edede0e3',
  border: '1.3px solid #175e5e',
  borderRadius: '4px',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const UserInfoItem = styled('div')({
  marginBottom: '9px',
  color: '#175e5e',
});

const UserType = styled('strong')({
  color: '#ff862a',
  fontSize: '1.3rem',
  marginBottom: '15px',

});

const Position = styled('strong')({
  display: 'flex',
  alignItems: 'flex-start',
  color: '#175e5e',
  fontSize: '1.3rem',
  marginBottom: '50px',
  marginTop: '25px'

});

const UserProfile: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();
  const [isJobModalOpen, setJobModalOpen] = useState(false);
  const [isCompanyModalOpen, setCompanyModalOpen] = useState(false);

  const handleCreateJobClick = () => {
    setJobModalOpen(true);
  };

  const handleCreateCompanyClick = () => {
    setCompanyModalOpen(true);
  };

  const handleCloseJobModal = () => {
    setJobModalOpen(false);
  };

  const handleCloseCompanyModal = () => {
    setCompanyModalOpen(false);
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

        // Fetch applications
        let applicationsConfig = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'http://localhost:8080/api/applications/',
          headers: {
            'Authorization': 'Bearer ' + userToken,
          },
        };
        const applicationsResponse = await axios.request(applicationsConfig);
        setApplications(applicationsResponse.data);


        let companiesConfig = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'http://localhost:8080/api/companies/',
          headers: {
            'Authorization': 'Bearer ' + userToken,
          },
        };
        const companiesResponse = await axios.request(companiesConfig);
        setCompanies(companiesResponse.data);


      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Paper elevation={3} sx={{ padding: 3, position: 'relative', backgroundColor: '#175e5e', color: 'white', width: '100%', borderRadius: 0 }}>
        <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: '30px' }}>
          <i className="fas fa-user fa-fw"></i>
          <span style={{ color: '#e3e3a4e3', marginTop: '20px' }}>JobSearch</span>
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mt: 1, mb: 5, mr: 10, gap: '10px' }}>
          <li key="home" className="menuList text-[#4e66a2] hover:text-blueColor">
            <Link className="nav-link font-bold" to="/home">
              Home
            </Link>
          </li>

          <li key="about" className="menuList text-[#4e66a2] hover:text-blueColor">
            <Link className="nav-link font-bold" to="/about">
              About
            </Link>
          </li>

          <li key="userProfile" className='menuList text-[#4e66a2] hover:text-blueColor'>
              <Link className="nav-link font-bold" to="/userProfile/${id}">MyProfile</Link>
            </li>
        </Box>
      </Paper>

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
        <Box sx={{ mt: 5 }}>
          <UserInfoContainer>
            <UserType>
              <strong>{info.userType}</strong>
            </UserType>
            <UserInfoItem>
              <strong>First Name:</strong> {info.firstName}
            </UserInfoItem>
            <UserInfoItem>
              <strong>Last Name:</strong> {info.lastName}
            </UserInfoItem>
            <UserInfoItem>
              <strong>Date of Birth:</strong> {info.dateOfBirth}
            </UserInfoItem>
            <UserInfoItem>
              <strong>Email:</strong> {info.email}
            </UserInfoItem>
            <UserInfoItem>
              <strong>Username:</strong> {info.username}
            </UserInfoItem>

            {info.userType === 'COMPANY_OWNER' || info.userType === 'ADMIN' ? (
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 3, width: '100%' }}>
                <Button
                  onClick={handleCreateCompanyClick}
                  sx={{ backgroundColor: '#175e5e', color: '#fff', width: '180px', height: '50px', marginBottom: '10px' }}
                >
                  Create Company
                </Button>
                <Button
                  onClick={handleCreateJobClick}
                  sx={{
                    backgroundColor: '#ff862a',
                    color: '#fff',
                    width: '180px',
                    height: '50px',
                    marginBottom: '10px',
                    marginLeft: 'auto',
                  }}
                >
                  Create Job
                </Button>
              </Box>
            ) : null}
          </UserInfoContainer>
        </Box>
      )}
    <Box sx={{ mt: 5 }}>
       {isJobModalOpen && (
          <JobModal onCancel={handleCloseJobModal} onSubmitJob={(formData) => {
            console.log('Job data submitted:', formData);
            handleCloseJobModal();
          }} />
        )}

        {isCompanyModalOpen && (
          <CompanyModal onCancel={handleCloseCompanyModal} />
        )}

{info.userType === 'COMPANY_OWNER'  ? (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
      }}
    >

    <Position>
      <strong>VIEW ALL APPLICATIONS FOR YOUR JOB</strong>
    </Position>
    
      {applications.map((application) => (
    <Card key={application.id} sx={{ width: '100%', maxWidth: 1100, marginBottom: 3, backgroundColor: '#edede0e3', height: '220px'}}>
    <CardContent sx={{ color: '#175e5e', fontSize: '6', border: '1.5px solid #175e5e', borderRadius: '8px', height: '220px' }}>
            <UserType>{application.job.position}</UserType>
            <Typography variant="body2"><strong>Name: </strong>{application.user.name}</Typography>
            <Typography variant="body2"><strong>Email: </strong>{application.user.email}</Typography>
            <Typography variant="body2"><strong>Date of Birth: </strong>{application.user.dateOfBirth}</Typography>
            <Typography variant="body2"><strong>Education: </strong>{application.education}</Typography>
            <Typography variant="body2"><strong>Work Experience: </strong>{application.workExperience}</Typography>
            <Typography variant="body2"><strong>CV: </strong>{application.cv}</Typography>
          </CardContent>
          
        </Card>
      ))}
  </Box>
   ) : null}

{info.userType === 'ADMIN'  ? (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
      }}
    >

    <Position>
      <strong>VIEW ALL COMPANIES</strong>
    </Position>
    
      {companies.map((company) => (
    <Card key={company.id} sx={{ width: '100%', maxWidth: 1100, marginBottom: 3, backgroundColor: '#edede0e3', height: '150px'}}>
    <CardContent sx={{ color: '#175e5e', fontSize: '6', border: '1.5px solid #175e5e', borderRadius: '8px', height: '220px' }}>
            <UserType>{company.companyName}</UserType>
            <Typography variant="body2"><strong>Name: </strong>{company.email}</Typography>
            <Typography variant="body2"><strong>Email: </strong>{company.address}</Typography>
            <Typography variant="body2"><strong>Phone: </strong>{company.phone}</Typography>
          </CardContent>
          
        </Card>
      ))}
  </Box>
   ) : null}





  </Box>



    </>
  );
};

export default UserProfile;
