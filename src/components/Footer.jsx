import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  CardMedia,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Pinterest,
  LocationOn,
  Phone,
  Email,
} from '@mui/icons-material';

function Footer() {

  return (
    <Box component="footer" sx={{ backgroundColor: '#d4d4d4e2', color: '#333', pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box>
              <CardMedia
                component="img"
                image="/assets/images/logo1.png"
                alt="Logo"
                sx={{ width: 120, mb: 2 }}
              />
              <Box>
                <IconButton href="#" sx={{ color: '#3b5998' }}>
                  <Facebook />
                </IconButton>
                <IconButton href="#" sx={{ color: '#1DA1F2' }}>
                  <Twitter />
                </IconButton>
                <IconButton href="#" sx={{ color: '#E60023' }}>
                  <Pinterest />
                </IconButton>
              </Box>
            </Box>
          </Grid>

     
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h6" gutterBottom>
              QUICK LINKS
            </Typography>
           {[
  { text: 'Privacy Policy', link: '/privacy-policy' },
  { text: 'Terms & Conditions', link: '/terms-and-conditions' },
  { text: 'Refund Policy', link: '/refund-policy' }
].map(({ text, link }) => (
  <Typography key={text} variant="body2">
    <Link href={link} color="inherit" underline="hover">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm








































































































































































































































































































































































































































































































































































































































    
      {text}
    </Link>
  </Typography>
))}

          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h6" gutterBottom>
              OUR ADDRESS
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Kundalahalli, ITPL Main Rd, Phase 2, Brookefield, Bengaluru, Karnataka 560037
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Phone fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">+91 63638 62257</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Email fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">support@allindialegalcomplaints.com</Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: '#ccc' }} />
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body2">©allindialegalcomplaints.com all rights reserved.</Typography>
          </Grid>
          <Grid item>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {['Home', 'About', 'Contact', 'FAQ'].map((text) => (
                <Link key={text} href="#" color="inherit" underline="hover" variant="body2">
                  {text}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
