import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { Button, DialogContent, DialogTitle } from "@mui/material";
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(240, 240, 255, 0.8)",
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
            {company?.companyName}
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
                <strong style={{ color: "#141b39" }}>{company?.address}</strong>
              </div>
              {/* <div style={{ marginRight: "20px" }}>
                <WorkOutlineIcon
                  sx={{
                    width: "30px",
                    height: "30px",
                    marginRight: "10px",
                    color: "#141b39",
                  }}
                />
                <strong style={{ color: "#141b39" }}>{company?.email}</strong>
              </div> */}
            </div>
            <hr />
            <div className="job-info-modal">
              <h3>About the Company</h3>
              <p style={{ margin: "0px 100px" }}>{company?.description}</p>
              <div>Some info about the company</div>
              <hr />
              <div>
                <h3>Additional information</h3>
                {/* <p>
                  <b>Salary</b>: {company.salary}
                </p> */}
                <p>
                  <b>Email</b>: {company?.email}
                </p>
                <p>
                  <b>Phone</b>: {company?.phone}
                </p>
              </div>
            </div>
            <hr />
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                onClick={() => {
                  window.open(
                    `/companyJobs?companyId=${company?.id}`,
                    "_blank"
                  );
                }}
                style={{ color: "#175e5e" }}
              >
                Proceed to Company Jobs
              </Button>
            </div>
          </DialogContent>
        </div>
      </ModalDialog>
    </Modal>
  );
};

export default CompanyInfoModal;
