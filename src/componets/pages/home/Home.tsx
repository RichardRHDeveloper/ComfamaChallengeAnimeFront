import { FC, useContext, useEffect, useRef, useState } from 'react';
import { AnimeContext } from '../../../contexts/AnimeContext';
import { getListAnime } from '../../../services/challengeanime/jikan';
import './home.scss';
import Card from '../../molecules/card/Card';
import Slider from '../../organisms/slider/Slider';
import { AnimeDataInterface } from '../../../interfaces/challengeAnime';
import CardEmpty from '../../molecules/cardempty/CardEmpty';

const Home: FC = () => {
  const { dataApiAnime, updateDataApiAnime } = useContext(AnimeContext) || {};
  const [textSearch, setTextSearch] = useState<string>("");
  const [showItems, setShowItems] = useState<number>(5);
  const [showIndex, setShowIndex] = useState<number>(0);
  const [manualIndexChange, setManualIndexChange] = useState(true);
  const selectRef = useRef<HTMLSelectElement | null>(null);

  const limit = 25;
  const longData = dataApiAnime ? dataApiAnime.data.length : 0;

  const getDataApi = async (page: number, limit: number, search: string) => {
    setManualIndexChange(false)
    updateDataApiAnime && updateDataApiAnime(await getListAnime(page, limit, search));
    setManualIndexChange(true)
  };

  const listAnimesJSX = (): JSX.Element[] => {

    return dataApiAnime ? dataApiAnime?.data.map((anime: AnimeDataInterface, index: number) => {
      return <Card key={index} animeData={anime} />
    })
      : []
  }


  const listAnimesJSXEmpty = (): JSX.Element[] => {
    const listAnimesJSXEmpty: JSX.Element[] = [];
    for (let i = 0; i < 5; i++) {
      listAnimesJSXEmpty.push(
        <CardEmpty key={i} />
      )
    };

    return listAnimesJSXEmpty;
  }

  const renderPageOptions = (lastVisiblePage: number): JSX.Element[] => {
    const options: JSX.Element[] = [];
    for (let i = 1; i <= lastVisiblePage; i++) {
      options.push(<option key={i} value={i}>Page {i}</option>);
    }
    return options;
  };

  const handleSearch = () => {
    getDataApi(1, limit, textSearch);
    selectRef.current && (selectRef.current.value = "1");
  };

  const handlePageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    getDataApi(parseInt(e.target.value), limit, textSearch);
  };

  useEffect(() => {
    getDataApi(1, limit, textSearch);
  }, []);

  return (
    <div className="container">
      <div className="container__contentFilter">
        <div className='container__contentFilter__search'>
          <input
            className="container__contentFilter__search__input"
            onChange={(e) => setTextSearch(e.target.value)}
          />
          <button
            className='container__contentFilter__search__button'
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className='container__contentFilter__pagination'>
          <select
            ref={selectRef}
            onChange={handlePageChange}
          >
            {renderPageOptions(dataApiAnime?.pagination?.last_visible_page || 1)}
          </select>
          <span>{`show items ${(showIndex + showItems) > longData ? longData : showIndex + showItems}/${longData}`}</span>
        </div>
      </div>
      <Slider showItems={showItems} listElements={!manualIndexChange ? listAnimesJSXEmpty() : listAnimesJSX()} setShowIndex={setShowIndex} manualIndexChange={manualIndexChange} />
    </div>
  );
};

export default Home;
