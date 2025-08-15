// Responsive MUI Header with Drawer and Submenus
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const complaintSubItems = [
  { label: "Cyber Crime", path: "/complaints/cyber-crime" },
  { label: "Child Pornography", path: "/complaints/child-pornography" },
  { label: "Women Abuse", path: "/complaints/women-abuse" },
  { label: "Consumer Complaints", path: "/complaints/consumer-complaints" },
  { label: "Insurance Claim", path: "/complaints/insurance-claim" },
  { label: "Check Bounce", path: "/complaints/check-bounce" },
  { label: "Online Blackmail", path: "/complaints/online-blackmail" },
  { label: "Property Rentals", path: "/complaints/property-rentals" },
  { label: "Family Issues", path: "/complaints/family-issues" },
];

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo & Title */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="/assets/images/logo1.png"
            alt="Logo"
            style={{ height: 40, marginRight: 10 }}
          />
      
        </Box>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, alignItems: "center" }}>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/about" color="inherit">
            About
          </Button>
          <Button
            color="inherit"
            endIcon={<ArrowDropDownIcon />}
            onClick={handleMenuOpen}
          >
            Complaint List
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {complaintSubItems.map((item) => (
              <MenuItem
                key={item.label}
                component={Link}
                to={item.path}
                onClick={handleMenuClose}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
          <Button component={Link} to="/pricing" color="inherit">
            Pricing
          </Button>
          <Button component={Link} to="/contact" color="inherit">
            Contact
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="/request-quote"
            sx={{ bgcolor: "green", color: "white" }}
          >
            Request A Quote
          </Button>
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          edge="end"
          color="inherit"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 280, padding: 2 }} role="presentation">
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="h6">Menu</Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/">
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/about">
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemText primary="Complaint List" />
            </ListItem>
            {complaintSubItems.map((item) => (
              <ListItem key={item.label} disablePadding sx={{ pl: 3 }}>
                <ListItemButton component={Link} to={item.path} onClick={toggleDrawer(false)}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/pricing">
                <ListItemText primary="Pricing" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/contact">
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <Button
                variant="contained"
                fullWidth
                component={Link}
                to="/request-quote"
                sx={{ bgcolor: "green", color: "white", mt: 2 }}
              >
                Request A Quote
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;