import React from "react";
import Modal from "@mui/material/Modal";
import { Button, DialogContent, DialogTitle, Typography } from "@mui/material";
import { ModalClose, ModalDialog } from "@mui/joy";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Company } from "../../utils/types";

type CompanyInfoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  company?: Company;
};

const CompanyInfoModal: React.FC<CompanyInfoModalProps> = ({
  isOpen,
  onClose,
  company,
}) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <ModalDialog
        layout="fullscreen"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.0)",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "15px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            width: "80%",
            maxWidth: "700px",
            padding: "20px",
            overflow: "auto",
          }}
        >
          <ModalClose />
          <DialogTitle
            sx={{
              fontSize: "36px",
              fontWeight: "600",
              textAlign: "center",
              color: "#175e5e",
              borderBottom: "3px solid #dcdcdc",
              paddingBottom: "10px",
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            {company?.companyName}
          </DialogTitle>
          <DialogContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div
                style={{ display: "flex", gap: "20px", marginBottom: "10px" }}
              >
                <ShareLocationIcon
                  sx={{
                    width: "40px",
                    height: "40px",
                    color: "#175e5e",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: "#175e5e",
                    fontWeight: "500",
                  }}
                >
                  {company?.address}
                </Typography>
              </div>
              {/* Uncomment if email is needed */}
              {/* <div style={{ display: "flex", gap: "20px" }}>
                <WorkOutlineIcon
                  sx={{
                    width: "40px",
                    height: "40px",
                    color: "#175e5e",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: "#175e5e",
                    fontWeight: "500",
                  }}
                >
                  {company?.email}
                </Typography>
              </div> */}
            </div>
            <hr
              style={{
                border: "none",
                borderTop: "2px solid #dcdcdc",
                marginBottom: "20px",
                width: "100%",
              }}
            />
            <div
              style={{
                marginBottom: "20px",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "600",
                  color: "#175e5e",
                  textAlign: "center",
                }}
              >
                About the Company
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  margin: "20px 0",
                  color: "#333",
                  textAlign: "justify", // Obostrano poravnanje teksta
                }}
              >
                {company?.description}
              </Typography>
            </div>

            <hr
              style={{
                border: "none",
                borderTop: "2px solid #dcdcdc",
                marginBottom: "20px",
                width: "100%",
              }}
            />
            <div>
              <Typography
                variant="h5"
                sx={{ fontWeight: "600", color: "#175e5e" }}
              >
                Additional Information
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#333", margin: "10px 0" }}
              >
                <strong>Email:</strong> {company?.email}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#333", margin: "10px 0" }}
              >
                <strong>Phone:</strong> {company?.phone}
              </Typography>
            </div>
            <hr
              style={{
                border: "none",
                borderTop: "2px solid #dcdcdc",
                marginTop: "20px",
                width: "100%",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Button
                onClick={() => {
                  window.open(
                    `/companyJobs?companyId=${company?.id}`,
                    "_blank"
                  );
                }}
                sx={{
                  color: "#175e5e",
                  backgroundColor: "transparent",
                  padding: "5px 0",
                  border: "none",
                  borderBottom: "2px solid #a9a965e3",
                  fontSize: "16px",
                  fontWeight: "bold",
                  transition: "color 0.3s, border-bottom 0.3s",
                  "&:hover": {
                    color: "#004d40",
                    borderBottom: "2px solid #004d40",
                  },
                  "&:active": {
                    color: "#00332b",
                    borderBottom: "2px solid #00332b",
                  },
                }}
              >
                Open Positions
              </Button>
            </div>
          </DialogContent>
        </div>
      </ModalDialog>
    </Modal>
  );
};

export default CompanyInfoModal;
