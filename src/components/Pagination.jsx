import PropTypes from 'prop-types';

export default function Pagination({ page, setPage, limit, isLoading }) {
  const count = 20; // Get the count of document from database

  const isLastPage = Math.ceil(count / limit) === page;
  return (
    <div className="flex gap-2 justify-center">
      {page !== 1 && (
        <button
          className="px-5 py-4 bg-primary text-white rounded-md"
          onClick={() => setPage(page - 1)}
          disabled={isLoading}
        >
          Previous
        </button>
      )}
      {!isLastPage && (
        <button
          className="px-5 py-4 bg-primary text-white rounded-md"
          onClick={() => setPage(page + 1)}
          disabled={isLoading}
        >
          Next
        </button>
      )}
    </div>
  );
}

Pagination.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  limit: PropTypes.number,
  isLoading: PropTypes.bool
};
