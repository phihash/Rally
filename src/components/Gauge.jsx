import PropTypes from 'prop-types';

const Gauge = ({ value, color }) => {
  const percentage = (value / 100) * 100;

  return (
    <div className="w-full bg-gray-300 rounded-lg h-3 overflow-hidden">
      <div
        className={`h-3 rounded-lg ${color}`}
        style={{
          width: `${percentage}%`,
          float: 'right',
        }}
      ></div>
    </div>
  );
};

Gauge.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default Gauge;
