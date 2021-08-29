import { useEffect, useState, Fragment } from "react";
import {music} from '../../api';
import Album from './Album';
import { CardPlaceholder } from '../../components/Cards';

function Page() {
  const [isDataLoaded, setDataLoading] = useState(false);
  const [defaultAlbumList, setDefaultAlbumList] = useState([]);
  const [albumMappedList, setAlbumMappedList] = useState({});

  useEffect(() => {
    music().then(
      (response) => {
        const { entry } = response.feed;
        setDefaultAlbumList(entry);
        createAlbumFilterList(entry);
      },
      (error) => {
        setDataLoading(false);
      }
    );
  }, []);

  const createAlbumFilterList = (albums) => {
    const remappedData = { 
      'all': [],
      'category': {},
      'date': {}
    }
    albums.forEach((item) => {
      if (!remappedData.category[item.category.attributes['label']]) {
        remappedData.category[item.category.attributes["label"]] = [item];
      } else {
        remappedData.category[item.category.attributes["label"]].push(item);
      }

      if (!remappedData.date[item["im:releaseDate"].attributes.label.substr(-4)]) {
        remappedData.date[item["im:releaseDate"].attributes.label.substr(-4)] = [item]
      } else {
        remappedData.date[item["im:releaseDate"].attributes.label.substr(-4)].push(item);
      }

      remappedData.all.push(item);
    });
    setAlbumMappedList(remappedData);
    setDataLoading(true);
  }

  return (
    <Fragment>
      <div className="Container">
        <div className="Label__container">
          {!isDataLoaded && <CardPlaceholder />}
          {isDataLoaded && (
            <Album
              isDataLoaded={isDataLoaded}
              defaultAlbumList={defaultAlbumList}
              albumMappedList={albumMappedList}
            />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Page;
