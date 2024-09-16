import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  DialogContent,
  DialogTitle,
  Tooltip, // Import Tooltip
} from "@mui/material";
import { LocationOn, Schedule, BarChart } from "@mui/icons-material";
import ApplicationModal from "../Modals/ApplicationModal";
import UpdateJobModal from "../Modals/UpdateJobModal";
import { useUpdateJob } from "../../hooks/useUpdateJob";
import useDeleteJob from "../../hooks/useDeleteJob";
import { Job, User, Company } from "../../utils/types";
import axios from "axios";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "./jobCard.css";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

type JobCardProps = {
  job: Job;
  company: Company;
};

const JobCard: React.FC<JobCardProps> = ({ job, company }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const [info, setInfo] = useState<User | null>(null);
  const updateJobMutation = useUpdateJob();
  const deleteJobMutation = useDeleteJob();
  const [jobInfoModal, setJobInfoModal] = useState(false);
  const { userToken } = useSelector((state: RootState) => state.auth);

  const handleApplyClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdateClick = () => {
    setIsUpdateModalOpen(true);
  };

  const handleDeleteClick = async () => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      await deleteJobMutation.mutateAsync(job.jobId);
    }
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userToken = localStorage.getItem("userToken");
      if (userToken) {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/users/userInfo`,
            {
              headers: {
                Authorization: `Bearer ${userToken}`,
              },
            }
          );
          setInfo(response.data);
        } catch (error) {
          console.error("Error fetching user info:", error);
        }
      }
    };

    fetchUserInfo();
  }, []);

  const formatDeadline = (deadline: string) => {
    dayjs.extend(customParseFormat);
    const deadlineDate = dayjs(deadline, "DD.MM.YYYY.");
    const now = dayjs();
    if (!deadlineDate.isValid() || deadlineDate.diff(now, "day") < 0) {
      return (
        <>
          <Typography variant="body2" color="error">
            Expired
          </Typography>
        </>
      );
    }
    const difference = deadlineDate.diff(now, "day");

    if (difference < 0) {
      return `Deadline expired, please submit your CV on jobsearch@gmail.com`;
    } else if (difference < 1) {
      const hoursDifference = deadlineDate.diff(now, "hour");
      return hoursDifference <= 1
        ? "Less than hour"
        : `${hoursDifference} hours`;
    } else {
      return `${difference} days`; //moment
    }
  };

  return (
    <>
      <Card
        className="job-card"
        sx={{
          borderRadius: "10px",
          border: "2px solid #ccc",
          marginBottom: "20px",
          width: "75%",
        }}
      >
        <CardContent
          className="card-content"
          onClick={() => setJobInfoModal(true)}
        >
          <div className="job-header">
            <h6 className="job-title">{job.position}</h6>
            <Typography variant="body2" className="job-company">
              {job.companyName}
            </Typography>
          </div>
          <div className="job-details">
            <div className="job-location">
              <span className="job-info-span">
                <LocationOn
                  className="job-location-icon"
                  style={{
                    width: "18px",
                    height: "18px",
                    marginRight: "2px",
                    marginLeft: "-5px",
                  }}
                />{" "}
                Location
              </span>

              <Typography variant="body2" className="job-info">
                {job.location}
              </Typography>
            </div>
            <div className="job-seniority">
              <span className="job-info-span">
                <BarChart
                  className="job-location-icon"
                  style={{
                    width: "18px",
                    height: "18px",
                    marginRight: "2px",
                    marginLeft: "-5px",
                  }}
                />{" "}
                Experience
              </span>

              <Typography variant="body2" className="job-info">
                {job.seniority}
              </Typography>
            </div>
            <div className="job-deadline">
              <span className="job-info-span">
                <Schedule
                  className="job-deadline-icon"
                  style={{
                    width: "18px",
                    height: "18px",
                    marginRight: "2px",
                    marginLeft: "-5px",
                  }}
                />{" "}
                Deadline{" "}
              </span>
              <Typography variant="body2" className="job-info">
                {formatDeadline(job.deadline)}
              </Typography>
            </div>
          </div>
        </CardContent>
        <ApplicationModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          job={job}
        />
        <UpdateJobModal
          isOpen={isUpdateModalOpen}
          onCancel={() => setIsUpdateModalOpen(false)}
          onSubmitJob={(formData) =>
            updateJobMutation.mutate({ ...job, ...formData })
          }
          initialJobData={job}
        />
      </Card>

      <Modal
        open={jobInfoModal}
        onClose={() => setJobInfoModal(false)}
        disableEnforceFocus
      >
        <ModalDialog
          layout="fullscreen"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(240, 240, 255, 0.5)",
            padding: "30px",
          }}
        >
          <ModalClose />
          <div className="modal-container">
            <DialogTitle
              sx={{
                fontSize: "36px",
                textAlign: "center",
                marginTop: "20px",
                color: "#175e5e",
                fontWeight: "bold",
              }}
            >
              {job.position}
            </DialogTitle>
            <DialogContent
              sx={{
                justifyContent: "center",
                textAlign: "left",
                marginTop: "0px",
                padding: "0px 20px", // Padding za razmak
              }}
            >
              <hr />
              <div
                style={{
                  display: "flex",
                  gap: "30px",
                  justifyContent: "center",
                }}
              >
                <div style={{ marginRight: "20px" }}>
                  <ShareLocationIcon
                    sx={{
                      width: "30px",
                      height: "30px",
                      marginRight: "10px",
                      color: "#175e5e",
                    }}
                  />
                  <strong style={{ color: "#175e5e" }}>{job.location}</strong>
                </div>
                <div style={{ marginRight: "20px" }}>
                  <WorkOutlineIcon
                    sx={{
                      width: "30px",
                      height: "30px",
                      marginRight: "10px",
                      color: "#175e5e",
                    }}
                  />
                  <strong style={{ color: "#175e5e" }}>
                    {job.jobType.split("_").join(" ")}
                  </strong>
                </div>
                <div>
                  <AccessTimeIcon
                    sx={{
                      width: "30px",
                      height: "30px",
                      marginRight: "10px",
                      color: "#175e5e",
                    }}
                  />
                  <strong style={{ color: "#175e5e" }}>{job.deadline}</strong>
                </div>
              </div>
              <hr />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "20px",
                  marginBottom: "30px",
                  color: "#2b2b2b",
                  textAlign: "center",
                }}
              >
                {/*  <h4 style={{ color: "#175e5e", marginBottom: "20px" }}>
                  Job Details
                </h4>*/}

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    lineHeight: "28px",
                    maxWidth: "800px",
                    textAlign: "center",
                  }}
                >
                  <ul
                    style={{
                      paddingInlineStart: "25px",
                      listStyleType: "none",
                      margin: 0,
                    }}
                  >
                    <li style={{ marginBottom: "15px" }}>
                      <strong style={{ color: "#175e5e", fontSize: "26px" }}>
                        About the company
                      </strong>
                      <hr
                        style={{
                          border: "none",
                          borderBottom: "2px solid #a9a965e3",
                          marginBottom: "10px",
                          width: "40%",
                          margin: "10px auto", // Centriranje hr
                        }}
                      />
                      <div
                        style={{
                          color: "#2b2b2b",
                          fontSize: "16px",
                          textAlign: "justify",
                        }}
                      >
                        {company.description}
                      </div>
                    </li>
                    <li style={{ marginBottom: "15px" }}>
                      <strong style={{ color: "#175e5e", fontSize: "26px" }}>
                        About the job
                      </strong>
                      <hr
                        style={{
                          border: "none",
                          borderBottom: "2px solid #a9a965e3",
                          marginBottom: "10px",
                          width: "30%",
                          margin: "10px auto",
                        }}
                      />
                      <div
                        style={{
                          color: "#2b2b2b",
                          fontSize: "16px",
                          textAlign: "justify",
                        }}
                      >
                        {job.description}
                      </div>
                    </li>
                    <li style={{ marginBottom: "0px 0px" }}>
                      <strong
                        style={{
                          color: "#175e5e",
                          fontSize: "26px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Requirements
                      </strong>
                      <hr
                        style={{
                          border: "none",
                          borderBottom: "2px solid #a9a965e3",
                          marginBottom: "0px",
                          width: "30%",
                          margin: "10px auto",
                        }}
                      />
                      <div
                        style={{
                          color: "#2b2b2b",
                          fontSize: "16px",
                          marginBottom: "0px",
                          textAlign: "justify",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {job.requirements.join(", ")}
                      </div>
                    </li>
                  </ul>
                </div>

                <hr style={{ marginTop: "30px", borderColor: "#ddd" }} />
              </div>

              <div className="modal-buttons" style={{ textAlign: "center" }}>
                {info?.userType === "ADMIN" ||
                info?.userType === "COMPANY_OWNER" ? (
                  <div className="admin-actions">
                    <Button
                      variant="contained"
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        marginBottom: "5px",
                        marginTop: "0px",
                        marginLeft: "10px",
                        width: "150px",
                        backgroundColor: "#175e5e",
                        "&:hover": {
                          backgroundColor: "#005252",
                        },
                      }}
                      onClick={handleUpdateClick}
                    >
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        marginBottom: "0px",
                        marginLeft: "10px",
                        width: "150px",
                        backgroundColor: "#a92e2e",
                        "&:hover": {
                          backgroundColor: "#a92e2e",
                        },
                      }}
                      onClick={handleDeleteClick}
                    >
                      Delete
                    </Button>
                  </div>
                ) : (
                  <Button
                    disabled={userToken ? false : true}
                    variant="contained"
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      marginBottom: "50px",
                      borderRadius: "6px",
                      marginTop: "0px",
                      width: "200px",
                      backgroundColor: "#175e5e",
                      "&:hover": {
                        backgroundColor: "#005252",
                      },
                    }}
                    onClick={handleApplyClick}
                  >
                    Apply Now
                  </Button>
                )}
              </div>
            </DialogContent>
          </div>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default JobCard;
