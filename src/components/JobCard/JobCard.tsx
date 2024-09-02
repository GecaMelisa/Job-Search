import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  DialogContent,
  DialogTitle,
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

  console.log(company, "companyyy");

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
            "http://localhost:8080/api/users/userInfo",
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
    // const deadlineDate = new Date(deadline);

    const now = dayjs();
    const difference = deadlineDate.diff(now, "day");
    console.log(difference);

    if (difference < 0) {
      return `Expired`;
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
        style={{
          borderRadius: "10px",
          border: "2px solid #ccc",
          marginBottom: "20px",
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
          }}
        >
          <ModalClose />
          <div className="modal-container">
            <DialogTitle
              sx={{
                fontSize: "40px",
                justifyContent: "center",
                textAlign: "center",
                marginTop: "40px",
                color: "#141b39",
              }}
            >
              {job.position}
            </DialogTitle>
            <DialogContent
              sx={{
                justifyContent: "center",
                textAlign: "left",
                alignItems: "center",
                marginTop: "0px",
                marginBottom: "",
              }}
            >
              <hr />
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                }}
              >
                <div style={{ marginRight: "20px" }}>
                  <ShareLocationIcon
                    sx={{
                      width: "30px",
                      height: "30px",
                      marginRight: "10px",
                      color: "#141b39",
                    }}
                  />
                  <strong style={{ color: "#141b39" }}>{job.location}</strong>
                </div>
                <div style={{ marginRight: "20px" }}>
                  <WorkOutlineIcon
                    sx={{
                      width: "30px",
                      height: "30px",
                      marginRight: "10px",
                      color: "#141b39",
                    }}
                  />
                  <strong style={{ color: "#141b39" }}>
                    {job.jobType.split("_").join(" ")}
                  </strong>
                </div>
                <div>
                  <AccessTimeIcon
                    sx={{
                      width: "30px",
                      height: "30px",
                      marginRight: "10px",
                      color: "#141b39",
                    }}
                  />
                  <strong style={{ color: "#141b39" }}>
                    {formatDeadline(job.deadline)}
                  </strong>
                </div>
              </div>
              <hr />
              <div className="job-info-modal">
                <h3>About the Company</h3>
                <p>{company.companyName}</p>
                <div>{company.description}</div>
                <hr />
                <h3>About the Job</h3>
                <p>{job.description}</p>
                <hr />
                <div>
                  <h3>Additional information</h3>
                  <p>
                    <b>Salary</b>: {job.salary}
                  </p>
                  {/* <p>Type: {job.jobType}</p> */}
                  {/* <p>Location: {job.location}</p>
              <p>Location: {job.location}</p>
              <p>Location: {job.deadline}</p> */}
                </div>
              </div>
              <h3></h3>
              <hr />

              <CardActions className="job-actions">
                {info &&
                  (info.userType === "COMPANY_OWNER" ||
                    info.userType === "ADMIN") && (
                    <>
                      <Button
                        variant="contained"
                        className="update-button"
                        onClick={handleUpdateClick}
                        style={{
                          backgroundColor: "#a9a965e3",
                          borderRadius: "15px",
                        }}
                      >
                        Update
                      </Button>
                      <Button
                        variant="contained"
                        className="delete-button"
                        onClick={handleDeleteClick}
                        style={{
                          backgroundColor: "red",
                          borderRadius: "15px",
                        }}
                      >
                        Delete
                      </Button>
                    </>
                  )}
                <Button
                  variant="contained"
                  className="apply-button"
                  onClick={handleApplyClick}
                  disabled={!info}
                  style={{ backgroundColor: "#175e5e", borderRadius: "15px" }}
                >
                  Apply
                </Button>
              </CardActions>
            </DialogContent>
          </div>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default JobCard;
