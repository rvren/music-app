import { useEffect, useState, Fragment } from "react";
import AlbumList from './AlbumList';
import AlbumHeader from "./AlbumHeader";
import { PARENT_ALBUM_FILTERS } from '../../constants'

function Album({ isDataLoaded, defaultAlbumList, albumMappedList, ...props }) {
	const [albumList, setAlbumList] = useState(defaultAlbumList);
	const [searchTerm, setSearchTerm] = useState("");
	const [likedAlbums, setLikedAlbums] = useState([]);
	const [filteredListChips, setfilteredListChips] = useState(null);
	const [selectedParentFilter, setSelectedParentFilter] = useState(PARENT_ALBUM_FILTERS[0].value);
	const [selectedAlbumFilter, setSelectedAlbumFilter] = useState(null);

	useEffect(() => {
		let list;
		if (selectedParentFilter !== PARENT_ALBUM_FILTERS[0].value) {
			list = albumMappedList[selectedParentFilter][selectedAlbumFilter];
		} else {
			list = albumMappedList[selectedParentFilter];
		}
		if (!searchTerm) {
			setAlbumList(list);
		} else {
			const results = list.filter((album) => {
				return (
					album["im:artist"].label.toLowerCase().includes(searchTerm) ||
					album["title"].label.toLowerCase().includes(searchTerm)
				);
			});
			setAlbumList(results);
		}
	}, [searchTerm]);

	const searchAlbum = (searchInput) => {
		setSearchTerm(searchInput);
	};

	const likeAlbum = (album) => {
		const albumIndex = likedAlbums.indexOf(album);

		if (albumIndex === -1) {
			const albums = likedAlbums;
			albums.push(album);
			setLikedAlbums(albums);
			alert(`Successfully added ${album.title.label} to your favorites list.`);
		} else {
			likedAlbums.splice(albumIndex, 1);
			alert(
				`Successfully removed ${album.title.label} from your favorites list.`
			);
		}
		console.log(albumList.indexOf(album));
	};

	const filterAlbums = (type) => {
		let filteredList, filteredListChips, listType;

		switch (type) {
			case PARENT_ALBUM_FILTERS[0].value:
				filteredList = albumMappedList[type];
				filteredListChips = [];
				break;
			case PARENT_ALBUM_FILTERS[1].value:
				listType = Object.keys(albumMappedList[type])[0];
				setSelectedAlbumFilter(listType);
				filteredList = albumMappedList[type][listType];
				filteredListChips = Object.keys(albumMappedList[type]);
				break;
			case PARENT_ALBUM_FILTERS[2].value:
				listType = Object.keys(albumMappedList[type])[0];
				setSelectedAlbumFilter(listType);
				filteredList = albumMappedList[type][listType];
				filteredListChips = Object.keys(albumMappedList[type]);
				break;
			default:
				filteredList = albumMappedList[type];
				filteredListChips = [];
				break;
		}

		setSelectedParentFilter(type);
		setAlbumList(filteredList);
		setfilteredListChips(filteredListChips);
	}

	const filterAlbumData = (item) => {
		setSelectedAlbumFilter(item);
		setAlbumList(albumMappedList[selectedParentFilter][item]);
	}

	return (
    <Fragment>
      <div className="Album_card__header">
        <AlbumHeader
          searchValue={searchAlbum}
          filterAlbums={filterAlbums}
          selectedParentFilter={selectedParentFilter}
        />
      </div>
      <AlbumList
        albumList={albumList}
        isDataLoaded={isDataLoaded}
        filteredListChips={filteredListChips}
        filterAlbumData={filterAlbumData}
        selectedAlbumFilter={selectedAlbumFilter}
        selectedParentFilter={selectedParentFilter}
        likeAlbum={likeAlbum}
      />
    </Fragment>
  );
}

export default Album;