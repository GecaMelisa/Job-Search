import React, { useEffect, useState } from 'react';
import {Typography, Button, Box, Paper, Card, CardContent, CardActions } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import JobModal from '../components/Modals/JobModal';
import CompanyModal from '../components/Modals/CompanyModal';
import axios from 'axios';
import {User} from '../utils/types'

const UserInfoContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '20px',
    marginLeft: '80px',
    marginRight: '80px',
    backgroundColor: '#edede0e3',
    border: '1.2px solid #175e5e',
    borderRadius: '5px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const UserInfoItem = styled('div')({
  marginBottom: '9px',
  color: '#175e5e'
});

const UserType = styled('strong')({
  color: '#ff862a', 
  fontSize: '1.2rem',
  marginBottom: '15px'
});


const UserProfile: React.FC = () => {
  const [info, setInfo] = useState<User>({
    userType: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    address: "",
    education: "",
    username: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();


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
  
  useEffect(() => {
    var userToken = localStorage.getItem("userToken");   
    const fetchData = () => {
      try {
        setLoading(true);
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'http://localhost:8080/api/users/userInfo',
          headers: { 
            'Authorization': 'Bearer ' + userToken
          }
        };
        
        axios.request(config)
        .then((response) => {
          setInfo(response.data);//
        })
        .catch((error) => {
          console.log(error);
        });  
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

      <Paper elevation={3} sx={{ padding: 3, position: 'relative', backgroundColor: '#175e5e', color: 'white', width: '100%', borderRadius: 0}}>
          <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', gap: 8 , marginTop: '30px'}}>
            <i className="fas fa-user fa-fw"></i>
            <span style={{ color: '#e3e3a4e3', marginTop: '20px' }}>JobSearch</span>
          </Typography>
        
         
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mt: 1, mb: 5, mr: 10, gap: '10px'}}>
            <li key="home" className='menuList text-[#4e66a2] hover:text-blueColor'>
              <Link className="nav-link font-bold" to="/home">Home</Link>
            </li>

            <li key="about" className='menuList text-[#4e66a2] hover:text-blueColor'>
              <Link className="nav-link font-bold" to="/about">About</Link>
            </li>

            <li key="userProfile" className='menuList text-[#4e66a2] hover:text-blueColor'>
              <Link className="nav-link font-bold" to="/userProfile/${id}">MyProfile</Link>
            </li>

          </Box>
        
        </Paper>
        
     
      
      {
      loading && <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      }
      {
      error && <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">Unable to render data!</h4>
        <p>{error?.response?.data?.message || error?.message}</p>
        <hr />
        <p className="mb-0">Something went wrong, please try again.</p>
      </div>
      }
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
              <Button onClick={handleCreateCompanyClick} sx={{ backgroundColor: '#175e5e', color: '#fff', width: '180px', height: '50px', marginBottom: '10px' }}>
                Create Company
              </Button>
              <Button onClick={handleCreateJobClick} sx={{ backgroundColor: '#ff862a', color: '#fff', width: '180px', height: '50px', marginBottom: '10px', marginLeft: 'auto' }}>
                Create Job
              </Button>
            </Box>
          ) : null}
            
          </UserInfoContainer>
        </Box>
      )}
      <Box sx={{ mt: 3 }}>
     
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
   </>
  );
};

export default UserProfile;
