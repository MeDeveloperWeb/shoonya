import PropTypes from 'prop-types';

export default function Item({ data }) {
  return (
    <div className="bg-secondary p-4 rounded-md space-y-1 shadow-md">
      <div
        className="h-[150px] w-[200px] bg-primary rounded-2xl"
        style={{
          backgroundImage: `url(${data.image})`,
          backgroundPosition: '50%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      ></div>
      <h3 className="text-xl pt-3 pb-1 font-semibold">{data.title}</h3>
      <p className="text-sm">{data.description}</p>
      <p className="text-sm">
        Date: {getFormattedDuration(data.date, data.duration)}
      </p>
      <p className="text-sm">Location: {data.location}</p>
      <p className="text-sm font-medium">Price: ${data.price}</p>
    </div>
  );
}

Item.propTypes = {
  data: PropTypes.shape({
    condition: PropTypes.string,
    date: PropTypes.number,
    description: PropTypes.string,
    duration: PropTypes.number,
    id: PropTypes.string,
    image: PropTypes.string,
    location: PropTypes.string,
    price: PropTypes.number,
    tag: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    type: PropTypes.string
  })
};

function getFormattedDuration(dateNum, duration) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const dateObj = new Date(dateNum);

  const date = dateObj.getDate();
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  const endDateObj = new Date(dateObj.setDate(dateObj.getDate() + +duration));

  const endDate = endDateObj.getDate();
  const endMonth = months[endDateObj.getMonth()];
  const endYear = endDateObj.getFullYear();

  if (endMonth === month && endYear === year)
    return `${month} ${date}-${endDate}, ${year}`;

  if (endYear === year)
    return `${month} ${date}-${endMonth} ${endDate}, ${year}`;

  return `${month} ${date}, ${year}-${endMonth} ${endDate}, ${endYear}`;
}
