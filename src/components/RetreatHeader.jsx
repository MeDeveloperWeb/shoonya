import PropTypes from 'prop-types';
import { useState } from 'react';
import useDebounce from '../lib/UseDebounce';

export default function Header({ filter, setFilter, setPage }) {
  const [search, setSearch] = useState(filter.search);

  useDebounce(
    () => {
      setFilter({
        location: '',
        tag: '',
        search
      });
      setPage(1);
    },
    [search],
    800
  );

  return (
    <div className="flex gap-6 flex-wrap">
      <select
        name="location"
        className="bg-primary text-white pl-2 pr-1 py-2 rounded-md flex-[40%] md:flex-none"
        value={filter.location}
        onChange={({ target }) => {
          setFilter((prev) => ({
            ...prev,
            location: target.value,
            search: ''
          }));
          setPage(1);
        }}
      >
        <option value="">Filter by Location</option>
        <option value="Goa">Goa</option>
        <option value="Rishikesh">Rishikesh</option>
        <option value="Kerala">Kerala</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        <option value="Pune">Pune</option>
        <option value="Chennai">Chennai</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Varanasi">Varanasi</option>
        <option value="Kolkata">Kolkata</option>
      </select>

      <select
        name="type"
        className="bg-primary text-white pl-2 pr-1 py-2 rounded-md flex-[40%] md:flex-none"
        value={filter.tag}
        onChange={({ target }) => {
          setFilter((prev) => ({ ...prev, tag: target.value, search: '' }));
          setPage(1);
        }}
      >
        <option value="">Filter by Type</option>
        <option value="yoga">Yoga</option>
        <option value="meditation">Meditation</option>
        <option value="detox">Detox</option>
      </select>

      <div className="flex-1 flex justify-end items-center rounded-md">
        <input
          type="search"
          name="search"
          placeholder="Search retreats by title"
          className="h-full p-2 bg-primary text-white rounded-md min-w-full md:min-w-[30vw]"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
      </div>
    </div>
  );
}

Header.propTypes = {
  filter: PropTypes.shape({
    location: PropTypes.string,
    tag: PropTypes.string,
    search: PropTypes.string
  }),
  setFilter: PropTypes.func,
  setPage: PropTypes.func
};
