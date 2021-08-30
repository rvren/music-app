import { Fragment } from "react";
import { useSelector } from 'react-redux';
import { AlbumCard, NoresultCard } from "../../components/Cards";

function Favourite() {
  const albums = useSelector((state) => state.album.albums);

  const renderAlbumList =
    albums.length &&
    albums.map((album) => (
      <AlbumCard
        album={album}
        key={album.id.label}
        isFavouriteEnabled={true}
      />
    ));

  return (
    <Fragment>
      <div className="Container">
        <div className="Label__container">
          <h4 className="Container__title">Liked Albums</h4>
          <h6 className="Container__sub-title">{albums.length} Album{albums.length > 1 && '\'s'}</h6>
          <div className="Album__container">
            {!albums.length && <NoresultCard />}
            {renderAlbumList}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Favourite;
