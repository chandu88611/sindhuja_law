import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Stack,
} from "@mui/material";

function About({ setShow }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          height: "60vh",
          backgroundImage:
            "url(/banner.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          backgroundColor: 'rgb(0,0,0,.8)'
        }}
      >
        <Container maxWidth="md">
          {/* <Typography variant="h3" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to allindialegalcomplaints, your trusted legal partner. Our
            experienced team provides expert legal guidance and representation.
          </Typography> */}
          <Button variant="contained" color="success">
            Get Appointment
          </Button>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box sx={{ bgcolor: "#f9f9f9", py: 8 }}>
        <Container>
          <Box textAlign="center" mb={6} data-aos="fade-down">
            <Typography variant="h4" color="success.main" gutterBottom>
              Empowering Justice Through Technology
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Bridging the gap between legal expertise and digital accessibility,
              ensuring justice is just a click away.
            </Typography>
          </Box>

          <Grid container spacing={4} data-aos="fade-up">
            {[
              {
                title: "Our Mission",
                content:
                  "To make legal services accessible, affordable, and reliable for every Indian citizen.",
              },
              {
                title: "Achievements",
                content: (
                  <>
                    <Typography>📈 Cases Raised: 10,000+</Typography>
                    <Typography>✅ Cases Solved: 9,500+</Typography>
                    <Typography>🏆 Success Rate: 95%</Typography>
                  </>
                ),
              },
              {
                title: "Why Choose Us?",
                content: (
                  <>
                    <Typography>✔️ Expert Legal Team</Typography>
                    <Typography>✔️ 100% Confidentiality</Typography>
                    <Typography>✔️ Digital & Accessible Services</Typography>
                  </>
                ),
              },
            ].map((item, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Paper elevation={3} sx={{ p: 3, borderLeft: '5px solid #2e7d32' }}>
                  <Typography variant="h6" color="success.main" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.content}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box textAlign="center" py={8} sx={{ backgroundColor: '#f0f0f0' }} data-aos="zoom-in">
        <Typography variant="h5" color="success.main" gutterBottom>
          Ready to Resolve Your Legal Issues?
        </Typography>
        <Button variant="contained" color="success">
          Get Started Now
        </Button>
      </Box>

      {/* More About Section */}
      <Box sx={{ py: 10 }} data-aos="fade-up">
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                MORE ABOUT US
              </Typography>
              <Typography variant="h5" color="success.main" gutterBottom>
                We Provide Reliable And Effective Legal Services
              </Typography>
              <Typography variant="body1" paragraph>
                At Online Legal Service India, we understand that navigating the
                legal system can be daunting. Our mission is to make the legal
                process as smooth and stress-free as possible for our clients.
              </Typography>
              <Typography variant="body2" paragraph>
                Our ready-made legal solutions are designed to ease your journey
                through complex matters like real estate, corporate law, and
                risk management. With a client-first approach, we offer
                practical and effective strategies tailored to your unique
                needs.
              </Typography>


            </Grid>


          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default About;