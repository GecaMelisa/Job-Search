import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Avatar,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import { AiOutlineSearch } from "react-icons/ai";
import NavBar from "../components/NavBar";
import { Application, Company, User } from "../utils/types";
import axios from "axios";
import { MdPerson } from "react-icons/md";
import JobModal from "../components/Modals/JobModal";
import CompanyModal from "../components/Modals/CompanyModal";
import CheckCircle from "@mui/icons-material/CheckCircle";
import VerifiedUser from "@mui/icons-material/VerifiedUser";
import DateRange from "@mui/icons-material/DateRange";
import ContactMail from "@mui/icons-material/ContactMail";
import Person from "@mui/icons-material/Person";
import Cancel from "@mui/icons-material/Cancel";
import BackgroundImage from "../utils/slika.avif";
import { toast } from "react-toastify";
import Footer from "../components/Footer/Footer";

const BackgroundBox = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "repeat-y",
  backgroundPosition: "center",
  filter: "blur(0.5px)", // Efekat zamagljenja
  zIndex: -1, // Da bi pozadinska slika bila iza sadržaja
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    zIndex: -1,
  },
});

const ContentBox = styled(Box)({
  position: "relative",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
});

const UserInfoContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "20px",
  marginLeft: "80px",
  marginRight: "80px",
  backgroundColor: "#transapent",
  border: "0px solid #ffffff",
  borderRadius: "4px",
  padding: "8px",
});

const StyledCard = styled(Card)({
  width: "320px",
  height: "320px",
  borderRadius: "15px",
  border: "1px solid #175e5e",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.02)",
  },
  margin: "20px",
});

const StyledCardContent = styled(CardContent)({
  color: "#175e5e",
  padding: "15px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  height: "auto",
  borderRadius: "15px",
  width: "100%",
});

const UserInfoItem = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginBottom: "9px",
  color: "#f0f0f0",
});

const UserType = styled("strong")({
  color: "#f0f0f0",
  fontSize: "1.3rem",
  marginBottom: "15px",
});

const StyledButton = styled("button")({
  borderRadius: "20px",
  width: "80px",
  border: "0px white",
  color: "white",
  height: "25px",
  textAlign: "center",
});

const StyledSpan = styled("span")({
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  gap: "5px",
  fontSize: "20px",
});

const UserProfile: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [filteredApplications, setFilteredApplications] = useState<
    Application[]
  >([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [pageSize, setPageSize] = useState(3);
  const [searchTerm, setSearchTerm] = useState("");
  const [info, setInfo] = useState<User & { id: string }>({
    id: "",
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
  const [error, setError] = useState<any>();
  const [isJobModalOpen, setJobModalOpen] = useState(false);
  const [isCompanyModalOpen, setCompanyModalOpen] = useState(false);
  const [companyOwners, setCompanyOwners] = useState();
  const [companiesForModal, setCompaniesForModal] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let userToken = localStorage.getItem("userToken");

        // Fetch user info
        let userConfig = {
          method: "get",
          maxBodyLength: Infinity,
          url: "http://localhost:8080/api/users/userInfo",
          headers: {
            Authorization: "Bearer " + userToken,
          },
        };
        const userResponse = await axios.request(userConfig);
        setInfo(userResponse.data);

        // Fetch applications
        let applicationsConfig = {
          method: "get",
          maxBodyLength: Infinity,
          url: "http://localhost:8080/api/applications/",
          headers: {
            Authorization: "Bearer " + userToken,
          },
        };
        const applicationsResponse = await axios.request(applicationsConfig);
        setApplications(applicationsResponse.data);

        let allCompaniesConfig = {
          method: "get",
          maxBodyLength: Infinity,
          url: "http://localhost:8080/api/companies/",
          headers: {
            Authorization: "Bearer " + userToken,
          },
        };
        const allCompaniesResponse = await axios.request(allCompaniesConfig);
        setCompaniesForModal(allCompaniesResponse.data);

        let companyOwnersConfig = {
          method: "get",
          maxBodyLength: Infinity,
          url: "http://localhost:8080/api/companyOwners/",
          headers: {
            Authorization: "Bearer " + userToken,
          },
        };
        const companyOwnersResponse = await axios.request(companyOwnersConfig);
        setCompanyOwners(companyOwnersResponse.data);

        // Fetch companies
        let companiesConfig = {
          method: "get",
          maxBodyLength: Infinity,
          url: `http://localhost:8080/api/companies/withPagination?offset=${
            page * pageSize
          }&pageSize=${pageSize}&field=${searchTerm}`,
          headers: {
            Authorization: "Bearer " + userToken,
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

  useEffect(() => {
    if (info.userType === "COMPANY_OWNER") {
      setFilteredApplications(
        applications.filter(
          (application) =>
            application.job.company?.companyOwner?.userId === info?.id
        )
      );
    } else if (info.userType === "MEMBER") {
      setFilteredApplications(
        applications.filter((application) => application.user.id === info?.id)
      );
    } else setFilteredApplications(applications);
  }, [applications]);

  const updateApplicationResponse = async (
    id: string,
    applicationResponse: "ACCEPTED" | "DECLINED",
    toEmail: string
  ) => {
    var token = localStorage.getItem("userToken");
    if (!token) {
      toast.error("Only members can apply for jobs. Please register or login.");
      return;
    }

    try {
      const responseObject = await axios.patch(
        `http://localhost:8080/api/applications/${id}`,
        {
          response: applicationResponse,
          toEmail: toEmail,
        },
        { headers: { Authorization: "Bearer " + token } }
      );
      if (responseObject.status === 200) {
        toast.success("Application submitted successfully");
        window.location.reload();
      } else {
        toast.error("Error submitting application");
      }
    } catch (error) {
      toast.error("Error submitting application");
    }
  };

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

  const handlePageSizeChange = (e: any) => {
    setPageSize(Number(e.target.value));
    setPage(0);
  };

  return (
    <>
      <Box sx={{ position: "relative", minHeight: "100vh", width: "100%" }}>
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
            <Box sx={{ mt: 5 }}>
              <UserInfoContainer>
                {/* Avatar or icon for user */}
                <Avatar
                  sx={{
                    width: 150,
                    height: 150,
                    backgroundColor: "#afaf63e3",
                    marginBottom: "20px",
                  }}
                >
                  <MdPerson size={80} color="#fff" />
                </Avatar>

                {/* User information */}
                <Typography
                  variant="h4"
                  sx={{ marginBottom: "20px", color: "#f0f0f0" }}
                >
                  {info.firstName} {info.lastName}
                </Typography>
                <div
                  style={{ display: "flex", gap: "70px", margin: "40px 0px" }}
                >
                  <UserInfoItem>
                    <StyledSpan>
                      <VerifiedUser />
                      <strong>User Type</strong>
                    </StyledSpan>{" "}
                    {info.userType}
                  </UserInfoItem>
                  <UserInfoItem>
                    <StyledSpan>
                      <DateRange />
                      <strong>Date of Birth</strong>
                    </StyledSpan>{" "}
                    {info.dateOfBirth}
                  </UserInfoItem>
                  <UserInfoItem>
                    <StyledSpan>
                      <ContactMail />
                      <strong>Email</strong>
                    </StyledSpan>{" "}
                    {info.email}
                  </UserInfoItem>
                  <UserInfoItem>
                    <StyledSpan>
                      <Person />
                      <strong>Username</strong>
                    </StyledSpan>{" "}
                    {info.username}
                  </UserInfoItem>
                </div>
                {/* Buttons for creating company and job */}
                {info.userType === "COMPANY_OWNER" ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 3,
                      width: "100%",
                    }}
                  >
                    <Button
                      onClick={handleCreateCompanyClick}
                      sx={{
                        backgroundColor: "#737680",
                        color: "#ffff",
                        width: "180px",
                        height: "50px",
                        marginBottom: "10px",
                        borderRadius: "25px",
                        marginLeft: "205px",
                        ":hover": {
                          border: "1px solid white",
                          backgroundColor: "#737680",
                        },
                      }}
                    >
                      Create Company
                    </Button>
                    <Button
                      onClick={handleCreateJobClick}
                      sx={{
                        backgroundColor: "#afaf63e3",
                        color: "#fff",
                        width: "180px",
                        height: "50px",
                        marginBottom: "10px",
                        marginLeft: "auto",
                        borderRadius: "25px",
                        marginRight: "205px",
                        ":hover": {
                          border: "1px solid white",
                          backgroundColor: "#afaf63e3",
                        },
                      }}
                    >
                      Create Job
                    </Button>
                  </Box>
                ) : null}
              </UserInfoContainer>
            </Box>
          )}

          {/* Search bar */}
          <div
            className="search-bar"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              marginBottom: "30px",
              width: "100%",
            }}
          >
            <FormControl
              fullWidth
              variant="outlined"
              sx={{
                borderRadius: "25px",
                backgroundColor: "#f0f0f0",
                maxWidth: "650px",
              }}
            >
              <OutlinedInput
                startAdornment={
                  <InputAdornment position="start">
                    <AiOutlineSearch />
                  </InputAdornment>
                }
                placeholder="Search for..."
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{
                  borderRadius: "30px",
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                }}
              />
            </FormControl>
          </div>

          {/* Pagination and Search */}
          <Box
            sx={{
              mt: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#f0f0f0",
              marginTop: "10px",
              marginBottom: "5px",
              width: "100%",
            }}
          >
            {/* Pagination controls */}
            {/* <label htmlFor="">Select page size:</label>
            <br />
            <select
              name="pageSize"
              id=""
              value={pageSize}
              onChange={handlePageSizeChange}
            >
              <option value="3">3</option>
              <option value="6">6</option>
              <option value="9">9</option>
              <option value="12">12</option>
            </select> */}

            {/* Conditional rendering based on user type */}
            {/* {info.userType === "COMPANY_OWNER" && ( */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              {/* View all applications */}
              <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
                {/*<strong>VIEW ALL APPLICATIONS FOR YOUR JOB</strong>*/}
              </Typography>
              {/* Display applications */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Grid
                  container
                  spacing={3}
                  justifyContent="center"
                  sx={{ maxWidth: "1200px" }}
                >
                  {filteredApplications.map((application) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      key={application.id}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <StyledCard>
                        <StyledCardContent
                          style={{
                            justifyContent: "space-between",
                            height: "100%",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              width: "100%",
                            }}
                          >
                            <Typography variant="h6">
                              {application.job.position}
                            </Typography>
                            <Typography variant="body2">
                              <strong>Name: </strong>
                              {application.user.name}
                            </Typography>
                            <Typography variant="body2">
                              <strong>Email: </strong>
                              {application.user.email}
                            </Typography>
                            <Typography variant="body2">
                              <strong>Date of Birth: </strong>
                              {application.user.dateOfBirth}
                            </Typography>
                            <Typography variant="body2">
                              <strong>Education: </strong>
                              {application.education}
                            </Typography>
                            <Typography variant="body2">
                              <strong>Work Experience: </strong>
                              {application.workExperience}
                            </Typography>
                            <Typography variant="body2">
                              <strong>CV: </strong>
                              {application.cv}
                            </Typography>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              width: "100%",
                              justifyContent: "flex-end",
                            }}
                          >
                            {info.userType === "COMPANY_OWNER" &&
                              !application.response && (
                                <div style={{ display: "flex", gap: "10px" }}>
                                  <StyledButton
                                    style={{ backgroundColor: "green" }}
                                    onClick={() =>
                                      updateApplicationResponse(
                                        application.id,
                                        "ACCEPTED",
                                        application.user.email
                                      )
                                    }
                                  >
                                    Accept
                                  </StyledButton>
                                  <StyledButton
                                    style={{ backgroundColor: "red" }}
                                    onClick={() =>
                                      updateApplicationResponse(
                                        application.id,
                                        "DECLINED",
                                        application.user.email
                                      )
                                    }
                                  >
                                    Decline
                                  </StyledButton>
                                </div>
                              )}
                            {application.response === "ACCEPTED" && (
                              <span
                                style={{
                                  color: "green",
                                  fontWeight: "500",
                                }}
                              >
                                <CheckCircle
                                  style={{
                                    marginRight: "5px",
                                    marginBottom: "2px",
                                  }}
                                />
                                Accepted
                              </span>
                            )}
                            {application.response === "DECLINED" && (
                              <span style={{ color: "red", fontWeight: "500" }}>
                                <Cancel
                                  style={{
                                    marginRight: "5px",
                                    marginBottom: "2px",
                                  }}
                                />
                                Declined
                              </span>
                            )}
                          </div>
                        </StyledCardContent>
                      </StyledCard>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
            {/* )} */}

            {info.userType === "ADMIN" && (
              <Box
                sx={{
                  mt: 5,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Typography variant="h5" sx={{ mb: 3, textAlign: "center" }}>
                  {/*<strong>VIEW ALL COMPANIES</strong>*/}
                </Typography>
                {/* Grid for displaying companies */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                    sx={{ maxWidth: "1200px" }}
                  >
                    {companies.map((company) => (
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={company.id}
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                        }}
                      >
                        <StyledCard>
                          <StyledCardContent>
                            <Typography
                              sx={{ marginBottom: "15px" }}
                              variant="h5"
                            >
                              {company.companyName}
                            </Typography>
                            <Typography variant="body2">
                              <strong>Email: </strong>
                              {company.email}
                            </Typography>
                            <Typography variant="body2">
                              <strong>Address: </strong>
                              {company.address}
                            </Typography>
                            <Typography variant="body2">
                              <strong>Phone: </strong>
                              {company.phone}
                            </Typography>
                          </StyledCardContent>
                        </StyledCard>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                {/* Pagination controls */}
                <Button
                  onClick={() => {
                    setPage(page - 1);
                  }}
                  disabled={page === 0}
                >
                  Previous Page
                </Button>
                <Typography variant="body1" sx={{ mx: 2 }}>
                  {page + 1} of {Math.ceil(totalCount / pageSize)}
                </Typography>
                <Button
                  onClick={() => {
                    setPage(page + 1);
                  }}
                  disabled={page * pageSize + companies.length === totalCount}
                >
                  Next Page
                </Button>
              </Box>
            )}
          </Box>

          {/* Modals */}
          {isJobModalOpen && (
            <JobModal
              allCompanies={companiesForModal}
              onCancel={handleCloseJobModal}
              onSubmitJob={(formData) => {
                console.log("Job data submitted:", formData);
                handleCloseJobModal();
              }}
            />
          )}

          {isCompanyModalOpen && (
            <CompanyModal
              onCancel={handleCloseCompanyModal}
              companyOwners={companyOwners}
            />
          )}
        </ContentBox>
        <Footer />
      </Box>
    </>
  );
};

export default UserProfile;
