import * as VscIcons from "react-icons/vsc";
import Button from "../Button";
import { useState } from "react";
import Viewmodal from "../Viewmodal";

function AlbumCard({ album, isFavouriteEnabled, ...props }) {
  const [viewedAlbum, setViewedAlbum] = useState(null);
  const [open, setOpen] = useState(false);

  const viewAlbum = (album) => {
    setViewedAlbum(album);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="Album__card">
      <img
        className="Album__card__avatar"
        src={album["im:image"][2].label}
        alt={album["im:image"][2].label}
      />

      {isFavouriteEnabled && (
        <Button
          className="Album__card__button-like"
          onClick={() => props.likeAlbum(album)}
        >
          <VscIcons.VscHeart />{" "}
        </Button>
      )}
      <Button
        className="Album__card__button-view"
        onClick={() => viewAlbum(album)}
      >
        <VscIcons.VscEye />{" "}
      </Button>

      <div className="Album__card__title">{album["im:name"].label}</div>
      <div className="Album__card__title-description">
        {album["im:artist"].label}
      </div>

      {viewedAlbum && (
        <Viewmodal viewedAlbum={viewedAlbum} open={open} onClose={onClose} />
      )}
    </div>
  );
}

export default AlbumCard;
