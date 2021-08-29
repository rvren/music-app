import Searchbar from "../../components/Searchbar";
import { Fragment } from "react";
import AlbumFilter from "./AlbumFilter";

function AlbumHeader({ searchValue, filterAlbums, selectedParentFilter }) {
	return (
		<Fragment>
			<Searchbar
				type="text"
				placeholder="Search for Artists,songs or podcasts"
				className="Album_card__searchbar"
				searchValue={searchValue}
			/>
			<AlbumFilter
				filterAlbums={filterAlbums}
				selectedParentFilter={selectedParentFilter}
			/>
		</Fragment>
	);
}

export default AlbumHeader;
