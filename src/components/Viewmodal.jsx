import React, { Fragment } from "react";
import Modal from "@material-ui/core/Modal";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import WorkIcon from "@material-ui/icons/Work";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import AlbumIcon from "@material-ui/icons/Album";
import CopyrightIcon from "@material-ui/icons/Copyright";

function Viewmodal({ viewedAlbum, ...props }) {
  const modalBody = (
    <div className="Album__modal">
      <img
        className="Album__modal-avatar"
        src={viewedAlbum["im:image"][2].label}
        alt={viewedAlbum["im:image"][2].label}
      />
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AlbumIcon color="primary" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={viewedAlbum["im:artist"].label}
            secondary={viewedAlbum["title"].label}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon color="primary" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Release Date"
            secondary={viewedAlbum["im:releaseDate"].attributes.label}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <MonetizationOnIcon color="primary" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Price"
            secondary={viewedAlbum["im:price"].label}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <CopyrightIcon color="primary" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Rights"
            secondary={viewedAlbum["rights"].label}
          />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Fragment>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        {...props}
      >
        {modalBody}
      </Modal>
    </Fragment>
  );
}

export default Viewmodal;
