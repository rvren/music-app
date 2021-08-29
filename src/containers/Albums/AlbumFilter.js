import { Fragment } from "react";
import { PARENT_ALBUM_FILTERS } from "../../constants";

function AlbumFilter({ filterAlbums, selectedParentFilter }) {
	const albumFilterList = (
		PARENT_ALBUM_FILTERS.map((item) => (
			<li
				key={item.value}
				className={`Album_card__filter ${
					selectedParentFilter === item.value ? "Album_card__filter-active" : ""
				}`}
				onClick={() => filterAlbums(item.value)}
			>
				{item.label}
			</li>
		))
	)

	return (
    <Fragment>
      <ul className="Album__filter-list">{albumFilterList}</ul>
    </Fragment>
  );
}

export default AlbumFilter;
