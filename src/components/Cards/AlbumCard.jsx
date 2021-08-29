import * as VscIcons from "react-icons/vsc";
import Button from "../Button";
import { useState } from "react";
import Viewmodal from "../Viewmodal";
import { useSelector, useDispatch } from "react-redux";
import { updateLikedAlbums } from "../../slice/albumSlice";

function AlbumCard({ album, isFavouriteEnabled, ...props }) {
  const [viewedAlbum, setViewedAlbum] = useState(null);
  const [open, setOpen] = useState(false);
  const reducerAlbums = useSelector((state) => state.album.albums);
  const dispatch = useDispatch();

  const viewAlbum = (album) => {
    setViewedAlbum(album);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleLikeDispatch = (album) => {
			const albumIndex = reducerAlbums.findIndex(item => item.id.attributes['im:id'] === album.id.attributes['im:id']);
      var updatedLikedList = [...reducerAlbums];

      if (albumIndex === -1) {
        updatedLikedList.push(album)
        alert(
          `Successfully added ${album.title.label} to your favorites list.`
        );
      } else {
        updatedLikedList.splice(albumIndex, 1)
        alert(
          `Successfully removed ${album.title.label} from your favorites list.`
        );
      }
      
     updatedLikedList && dispatch(updateLikedAlbums(updatedLikedList));
  }

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
          onClick={() => handleLikeDispatch(album)}
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
