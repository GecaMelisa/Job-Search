import styled from '@emotion/styled';
import { Box } from '@mui/material';
import NavBar from '../components/NavBar';
import BackgroundImage from '../utils/backk.jpg'; // Importujte vašu sliku

const BackgroundBox = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  filter: 'blur(3.5px)', // Efekat zamagljenja
  zIndex: -1, // Da bi pozadinska slika bila iza sadržaja
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

type Props = {};

const About = (props: Props) => {
  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <BackgroundBox />
      <ContentBox>
        <NavBar />
        <Box sx={{ maxWidth: '800px', margin: 'auto', padding: '40px', color: '#fff' }}>
          <p style={{ textAlign: 'justify', fontSize: '1.2em', lineHeight: '1.6' }}>
            Welcome to the Job Search platform! Here, you can discover the latest job opportunities, explore various
            career paths, and connect with potential employers.
          </p>
          <p style={{ textAlign: 'justify', fontSize: '1.2em', lineHeight: '1.6', marginTop: '20px' }}>
            Our mission is to simplify the job search process and bridge the gap between talented individuals and
            exciting opportunities. Feel free to explore our platform and find a job that aligns with your skills and interests.
          </p>
        </Box>
      </ContentBox>
    </Box>
  );
};

export default About;
