import {
	AlbumCard,
	NoresultCard,
} from "../../components/Cards";
import { Fragment } from "react";
import { PARENT_ALBUM_FILTERS } from '../../constants'

function AlbumList({
	albumList,
	isDataLoaded,
	viewAlbum,
	filterAlbumData,
	filteredListChips,
	selectedAlbumFilter,
	selectedParentFilter,
	...props
}) {
		const filteredList = filteredListChips?.length ? (
      <div className="Album_card__filter-chips">
        {filteredListChips.map((item) => (
          <span
            className={`Album_card__filter ${
              selectedAlbumFilter === item ? "Album_card__filter-active" : ""
            }`}
            key={item}
            onClick={() => filterAlbumData(item)}
          >
            {item}
          </span>
        ))}
      </div>
    ) : "";
	
	const renderAlbumList =
    albumList.length &&
    albumList.map((album) => (
      <AlbumCard
        album={album}
        key={album.id.label}
        viewAlbum={viewAlbum}
        isFavouriteEnabled={true}
      />
    ));

	return (
    <Fragment>
      <h4 className="Container__title">
        {selectedParentFilter !== PARENT_ALBUM_FILTERS[0].value &&
          selectedAlbumFilter}{" "}
        Albums
      </h4>
      {filteredList}
      <div className="Album__container">
        {!albumList.length && <NoresultCard />}
        {renderAlbumList}
      </div>
    </Fragment>
  );
}

export default AlbumList;
