import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./NavTabs.css";

export default function NavigationMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(open ? null : event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="nav-tabs-container">
      {/* Dashboard Menu */}
      <Button
        id="dashboard-button"
        aria-controls={open ? "dashboard-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="button"
        style={{ minWidth: "auto" }}
      >
        Dashboard
      </Button>
      <Menu
        id="dashboard-menu"
        anchorEl={anchorEl}
        open={open && anchorEl?.id === "dashboard-button"}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "dashboard-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <a href="/profile">Profile</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="/account">My account</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="/logout">Logout</a>
        </MenuItem>
      </Menu>
      {/* Advisory Services Menu */}
      <Button
        id="advisory-services-button"
        aria-controls={open ? "advisory-services-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="button"
        style={{ minWidth: "auto" }}
      >
        Advisory Services
      </Button>
      <Menu
        id="advisory-services-menu"
        anchorEl={anchorEl}
        open={open && anchorEl?.id === "advisory-services-button"}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "advisory-services-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <a href="/advisory-services/1">Service 1</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="/advisory-services/2">Service 2</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="/advisory-services/3">Service 3</a>
        </MenuItem>
      </Menu>
      {/* Qualifications Menu */}
      <Button
        id="qualifications-button"
        aria-controls={open ? "qualifications-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="button"
        style={{ minWidth: "auto" }}
      >
        Qualifications
      </Button>
      <Menu
        id="qualifications-menu"
        anchorEl={anchorEl}
        open={open && anchorEl?.id === "qualifications-button"}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "qualifications-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <a href="/qualifications/1">Qualification 1</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="/qualifications/2">Qualification 2</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="/qualifications/3">Qualification 3</a>
        </MenuItem>
      </Menu>
      {/* Training Menu */}
      <Button
        id="training-button"
        aria-controls={open ? "training-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="button"
        style={{ minWidth: "auto" }}
      >
        Training
      </Button>
      <Menu
        id="training-menu"
        anchorEl={anchorEl}
        open={open && anchorEl?.id === "training-button"}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "training-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <a href="/training/1">Training 1</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="/training/2">Training 2</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="/training/3">Training 3</a>
        </MenuItem>
      </Menu>
      {/* Events Menu */}
      <Button
        id="events-button"
        aria-controls={open ? "events-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="button"
        style={{ minWidth: "auto" }}
      >
        Events
      </Button>
      <Menu
        id="events-menu"
        anchorEl={anchorEl}
        open={open && anchorEl?.id === "events-button"}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "events-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <a href="/events/1">Event 1</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="/events/2">Event 2</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="/events/3">Event 3</a>
        </MenuItem>
      </Menu>
      {/* Join our community Menu */}
      <Button
        id="join-our-community-button"
        aria-controls={open ? "join-our-community-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="button"
        style={{ minWidth: "auto" }}
      >
        Join our community
      </Button>
      <Menu
        id="join-our-community-menu"
        anchorEl={anchorEl}
        open={open && anchorEl?.id === "join-our-community-button"}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "join-our-community-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <a href="/join-our-community/1">Community 1</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="/join-our-community/2">Community 2</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="/join-our-community/3">Community 3</a>
        </MenuItem>
      </Menu>
      {/* About us Menu */}
      <Button
        id="about-us-button"
        aria-controls={open ? "about-us-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="button"
        style={{ minWidth: "auto" }}
      >
        About us
      </Button>
      <Menu
        id="about-us-menu"
        anchorEl={anchorEl}
        open={open && anchorEl?.id === "about-us-button"}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "about-us-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <a href="/about-us/1">About 1</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="/about-us/2">About 2</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="/about-us/3">About 3</a>
        </MenuItem>
      </Menu>
    </div>
  );
}
