import React from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Grid from "@mui/material/Grid";

import ProfilePicture from "../../assets/images/pp.svg";

import "./back-cover.css";

const BackCover = () => {
  return (
    <div className="back-cover">
      <div className="bc-cover-image"></div>
      <div className="bc-bottom-info">
        <div className="bc-left">
          <div className="bc-profile-picture">
            <img src={ProfilePicture} alt="user profile picture" />
          </div>
          <div className="bc-description">
            <div className="bc-starting-time">
              Starts in: 3 days : 2 hours : 24 minutes
            </div>
            <div className="bc-description-lower">
              <div className="bc-live">
                <div className="bc-live-spot"></div>
                Not Live
              </div>
              <div className="bc-auction">Layers Auction </div>
            </div>
          </div>
        </div>

        <div className="bc-right">
          <div className="bc-invite-link">
            <Grid item xs={1}>
              <ThumbUpOffAltIcon />
            </Grid>
            <h3>Accept Invite</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackCover;
