import React, { useState } from "react";
import { Box, TextField, Button, Paper, IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";

const ChatBot = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const getBotResponse = async (userQuery: string) => {
    const trimmedQuery = userQuery.trim().toLowerCase();
    console.log("User Query:", trimmedQuery); // Debugging

    // Opšti odgovori
    if (trimmedQuery === "hi" || trimmedQuery === "hello") {
      return "How can I help you today?";
    }
    if (
      trimmedQuery.includes("what can you do") ||
      trimmedQuery.includes("what do you do")
    ) {
      return "I can help you find jobs, provide job details, and assist with job applications!";
    }
    if (
      trimmedQuery.includes("how to apply") ||
      trimmedQuery.includes("how can I apply")
    ) {
      return "You can apply for jobs directly on our platform by selecting a job and submitting your application.";
    }

    // Pretraga poslova
    if (trimmedQuery.startsWith("show jobs in ")) {
      const location = trimmedQuery.replace("show jobs in ", "");
      console.log("Location:", location); // Debugging
      try {
        const response = await fetch(
          `/chatbot/search?query=${encodeURIComponent(location)}`
        );

        if (!response.ok) {
          return "Sorry, I couldn't fetch the jobs.";
        }
        const jobs = await response.json();
        console.log("Jobs:", jobs); // Debugging
        return jobs.length
          ? `Found ${jobs.length} job(s) in ${location}.`
          : `No jobs found in ${location}.`;
      } catch (error) {
        console.error("Error fetching jobs:", error); // Error handling
        return "Sorry, there was an error while fetching the jobs.";
      }
    }

    // Detalji o poslu
    if (trimmedQuery.startsWith("details of job ")) {
      const jobId = trimmedQuery.replace("details of job ", "");
      console.log("Job ID:", jobId); // Debugging
      try {
        const response = await fetch(`/chatbot/job/${jobId}`);
        if (!response.ok) {
          return "Sorry, I couldn't fetch the job details.";
        }
        const job = await response.json();
        console.log("Job:", job); // Debugging
        return job
          ? `Job Details: ${job.title}, ${job.location}, ${job.description}`
          : "Job not found.";
      } catch (error) {
        console.error("Error fetching job details:", error); // Error handling
        return "Sorry, there was an error while fetching the job details.";
      }
    }

    // Default odgovor za neprepoznate upite
    return "Sorry, I didn't understand that. Can you please rephrase?";
  };

  const handleSendMessage = async () => {
    if (userInput.trim() === "") return; // Ignoriši prazne upite

    const botResponse = await getBotResponse(userInput);
    setMessages([...messages, `User: ${userInput}`, `Bot: ${botResponse}`]);
    setUserInput("");
  };

  return (
    <Box>
      {isOpen ? (
        <Paper
          elevation={5}
          sx={{
            position: "fixed",
            bottom: "0px", // Fiksirajte chat na dnu
            right: "20px",
            width: "350px", // Povećajte širinu
            height: "500px", // Povećajte visinu
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            bgcolor: "#f9f9f9",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            zIndex: 1000, // Postavite iznad drugih elemenata
          }}
        >
          {/* Header sa dugmetom za zatvaranje */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
              bgcolor: "#175e5e",
              color: "white",
              borderRadius: "16px 16px 0 0",
            }}
          >
            <Box>Chat with Us!</Box>
            <IconButton onClick={() => setIsOpen(false)} color="inherit">
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Chat Messages */}
          <Box sx={{ flex: 1, padding: "10px", overflowY: "auto" }}>
            {messages.map((msg, idx) => (
              <Box
                key={idx}
                sx={{
                  mb: 1,
                  display: "flex",
                  justifyContent: msg.startsWith("User")
                    ? "flex-end"
                    : "flex-start",
                }}
              >
                <Box
                  sx={{
                    maxWidth: "75%",
                    bgcolor: msg.startsWith("User") ? "#e0f7fa" : "#eeeeee",
                    p: 1,
                    borderRadius: "10px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {msg}
                </Box>
              </Box>
            ))}
          </Box>

          {/* Input za korisničku poruku */}
          <Box sx={{ display: "flex", p: 1, borderTop: "1px solid #ddd" }}>
            <TextField
              fullWidth
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
              variant="outlined"
              size="small"
              sx={{ mr: 1 }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSendMessage}
            >
              Send
            </Button>
          </Box>
        </Paper>
      ) : (
        <IconButton
          sx={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            bgcolor: "#175e5e",
            color: "white",
            p: 2,
            borderRadius: "50%",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
            "&:hover": { bgcolor: "#145555" },
          }}
          onClick={() => setIsOpen(true)}
        >
          <ChatIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default ChatBot;
