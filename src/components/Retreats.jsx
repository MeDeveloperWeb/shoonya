import { useEffect, useState } from 'react';
import Header from './RetreatHeader';
import getRetreats from '../lib/getRetreats';
import Pagination from './Pagination';
import Item from './RetreatItem';
import motionSvg from '../assets/motion-blur.svg';

export default function Retreats() {
  const limit = 4;
  const [retreats, setRetreats] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isFilterLastPage, setIsFilterLastPage] = useState(false);

  const [filter, setFilter] = useState({
    location: '',
    tag: '',
    search: ''
  });

  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);

    async function fetchRetreat() {
      const retreats = await getRetreats({ ...filter, page, limit });

      setIsFilterLastPage(false);
      setRetreats(retreats);
      setLoading(false);
      if (retreats.length < limit) setIsFilterLastPage(true);
    }

    fetchRetreat();
  }, [filter, page]);

  return (
    <div className="py-4 space-y-6">
      <Header filter={filter} setFilter={setFilter} setPage={setPage} />
      {isLoading ? (
        <div className="flex justify-center items-center">
          <img src={motionSvg} alt="Loading..." width={300} />
        </div>
      ) : retreats.length === 0 ? (
        <div className="flex justify-center items-center">
          <p className="font-medium py-20">
            Sorry, No relevant Data available!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {retreats.map((retreat) => (
            <Item data={retreat} key={retreat.id} />
          ))}
        </div>
      )}

      <Pagination
        page={page}
        setPage={setPage}
        limit={limit}
        isLoading={isLoading}
        isFilterLastPage={isFilterLastPage}
      />
    </div>
  );
}
