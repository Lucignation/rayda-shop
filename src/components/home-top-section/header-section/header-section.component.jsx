import React from "react";

import Grid from "@mui/material/Grid";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import "./header-section.component.css";

const HeaderSection = () => {
  return (
    <div className="header-section">
      <div className="hs-left">
        <div className="hs-title">Welcome </div>
        <div className="hs-subtitle">
          Your current sales auction and activity.
        </div>
      </div>
      <div className="hs-right">
        <div className="hs-notification-number">2</div>
        <Grid item xs={1}>
          <NotificationsNoneIcon />
        </Grid>
      </div>
    </div>
  );
};

export default HeaderSection;
