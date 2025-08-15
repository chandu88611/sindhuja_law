import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Contact() {
  const theme = useTheme();

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          height: { xs: "300px", md: "60vh" },
          backgroundImage:
            "url(/banner.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
          flexDirection: "column",
          px: 2,
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Contact Us
        </Typography>
      </Box>

      {/* Contact Info Section */}
      <Box sx={{ py: 8, backgroundColor: "#f9f9f9" }}>
        <Container>
          <Box textAlign="center" mb={6}>
            <Typography variant="h6" textTransform="uppercase" color="primary">
              Contact Info
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              Reach Out to Us
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Email */}
            <Grid item xs={12} md={4}>
              <Card elevation={3} sx={{ borderRadius: 4, textAlign: "center", p: 3 }}>
                <CardContent>
                  <EmailIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
                  <Typography variant="h6" mt={2}>Email</Typography>
                  <Typography>support@allindialegalcomplaints.com</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Phone */}
            <Grid item xs={12} md={4}>
              <Card elevation={3} sx={{ borderRadius: 4, textAlign: "center", p: 3 }}>
                <CardContent>
                  <PhoneIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
                  <Typography variant="h6" mt={2}>Phone</Typography>
                  <Typography>+91 63638 62257</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Address */}
            <Grid item xs={12} md={4}>
              <Card elevation={3} sx={{ borderRadius: 4, textAlign: "center", p: 3 }}>
                <CardContent>
                  <LocationOnIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
                  <Typography variant="h6" mt={2}>Address</Typography>
                  <Typography>
                    Kundalahalli, ITPL Main Rd, Phase 2,<br />
                    Brookefield, Bengaluru, Karnataka 560037
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Contact;
