import NavBar from '../components/NavBar';

const About = () => {
  return (
        <div>
          <NavBar />
    
          <div style={{ maxWidth: '800px', margin: 'auto', padding: '40px' }}>
        <p style={{ textAlign: 'justify', fontSize: '1.2em', lineHeight: '1.6', color: '#333' }}>
          Welcome to the Job Search platform! Here, you can discover the latest job opportunities, explore various
          career paths, and connect with potential employers.
        </p>
        <p style={{ textAlign: 'justify', fontSize: '1.2em', lineHeight: '1.6', color: '#333', marginTop: '20px' }}>
          Our mission is to simplify the job search process and bridge the gap between talented individuals and
          exciting opportunities. Feel free to explore our platform and find a job that aligns with your skills and interests.
        </p>
      </div>
    </div>
  );
};

export default About;
