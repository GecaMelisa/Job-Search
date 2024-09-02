import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { toast } from "react-toastify";

type ApplicationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  job: {
    jobId: string;
  };
};

const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  job,
}) => {
  const [formData, setFormData] = useState({
    jobId: "",
    education: "",
    workExperience: "",
    cv: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSendClick = async () => {
    var token = localStorage.getItem("userToken");
    if (!token) {
      toast.error("Only members can apply for jobs. Please register or login.");
      return;
    }

    if (!formData.education || !formData.workExperience || !formData.cv) {
      toast.error("Please, enter all required fields.");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/api/applications/submitApp",
        {
          jobId: job.jobId,
          education: formData.education,
          workExperience: formData.workExperience,
          cv: formData.cv,
        },
        { headers: { Authorization: "Bearer " + token } }
      );
      if (response.status === 200) {
        toast.success("Application submitted successfully");
        onClose();
      } else {
        toast.error("Error submitting application");
      }
    } catch (error) {
      toast.error("Error submitting application");
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          maxWidth: "90%",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ color: "#175e5e", fontWeight: "bold" }}
        >
          A few steps to Your dream Job..
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2,
          }}
        >
          {" "}
        </Box>

        <TextField
          label="Education"
          name="education"
          value={formData.education}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Work Experience"
          name="workExperience"
          value={formData.workExperience}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          margin="normal"
        />

        <TextField
          label="CV"
          name="cv"
          value={formData.cv}
          onChange={handleChange}
          multiline
          rows={8}
          fullWidth
          margin="normal"
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          <Button
            onClick={onClose}
            sx={{
              backgroundColor: "#ff862a",
              color: "#fff",
              width: "120px",
              height: "40px",
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSendClick}
            sx={{
              backgroundColor: "#175e5e",
              color: "#fff",
              width: "120px",
              height: "40px",
            }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ApplicationModal;
