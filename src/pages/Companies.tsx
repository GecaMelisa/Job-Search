import React, { useEffect, useState } from 'react';
import { Typography, Button, Box, Card, CardContent, FormControl, InputLabel, OutlinedInput, InputAdornment, Grid } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
import { AiOutlineSearch } from 'react-icons/ai';
import NavBar from '../components/NavBar';
import { Company } from '../utils/types';
import BackgroundImage from '../utils/backk.jpg'; 

const BackgroundBox = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  filter: 'blur(3.5px)',
  zIndex: -1, 
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
    zIndex: -1,
  },
});

const ContentBox = styled(Box)({
  position: 'relative',
  zIndex: 1, 
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
});

const StyledCompanyCard = styled(Card)({
  width: '320px', 
  height: '340px', 
  borderRadius: '15px',
  border: '1.5px solid #175e5e',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  },
  margin: '20px',
});

const StyledCardContent = styled(CardContent)({
  color: '#141b39',
  padding: '15px', 
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%', 
  borderRadius: '15px',
});

const Companies: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [pageSize, setPageSize] = useState(3);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let userToken = localStorage.getItem('userToken');

        // Fetch companies
        let companiesConfig = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `http://localhost:8080/api/companies/withPagination?offset=${page * pageSize}&pageSize=${pageSize}&field=${searchTerm}`,
          headers: {
            'Authorization': 'Bearer ' + userToken,
          },
        };
        const companiesResponse = await axios.request(companiesConfig);
        setCompanies(companiesResponse.data.data);
        setTotalCount(companiesResponse.data.total);

      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, pageSize, searchTerm]);

  const handlePageSizeChange = (e: any) => {
    setPageSize(Number(e.target.value));
    setPage(0);
  };

  return (
    <>
      <Box sx={{ position: 'relative', minHeight: '100vh' }}>
        <BackgroundBox />
        <ContentBox>
          <NavBar />

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
            <Box sx={{ position: 'relative', minHeight: '100vh' }}>
              <BackgroundBox />
              <ContentBox>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  {/* <strong>VIEW ALL COMPANIES</strong>*/}
                </Typography>

                {/* Search bar */}
                <div className='search-bar' style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '30px', width: '100%' }}>
                  <FormControl fullWidth variant="outlined" sx={{ borderRadius: '25px', backgroundColor: '#ffffff', maxWidth: '800px' }}>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      startAdornment={<InputAdornment position="start"><AiOutlineSearch /></InputAdornment>}
                      placeholder="Search for..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      sx={{
                        borderRadius: '30px',
                        backgroundColor: '#fffff',
                        '&:hover': {
                          color: '#175e5e',
                        },
                      }}
                    />
                  </FormControl>
                </div>

                {/* Pagination controls */}
                <label htmlFor="pageSize">Select page size:</label>
                <br />
                <select name="pageSize" id="pageSize" value={pageSize} onChange={handlePageSizeChange}>
                  <option value="3">3</option>
                  <option value="6">6</option>
                  <option value="9">9</option>
                  <option value="12">12</option>
                </select>

                {/* Grid for displaying companies */}
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: '1200px' }}>
                    {companies.map((company) => (
                      <Grid item xs={12} sm={6} md={4} key={company.id} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <StyledCompanyCard>
                          <StyledCardContent>
                            <Typography variant="h5">{company.companyName}</Typography>
                            <Typography variant="body2"><strong>Email: </strong>{company.email}</Typography>
                            <Typography variant="body2"><strong>Address: </strong>{company.address}</Typography>
                            <Typography variant="body2"><strong>Phone: </strong>{company.phone}</Typography>
                          </StyledCardContent>
                        </StyledCompanyCard>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                {/* Pagination controls */}
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Button onClick={() => setPage(page - 1)} disabled={page === 0}>Previous Page</Button>
                  <Typography variant="body1" sx={{ mx: 2 }}>
                    {page + 1} of {Math.ceil(totalCount / pageSize)}
                  </Typography>
                  <Button onClick={() => setPage(page + 1)} disabled={(page * pageSize) + companies.length === totalCount}>Next Page</Button>
                </Box>
              </ContentBox>
            </Box>
          )}
        </ContentBox>
      </Box>
    </>
  );
};

export default Companies;
