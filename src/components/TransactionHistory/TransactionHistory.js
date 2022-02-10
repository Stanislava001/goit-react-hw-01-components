import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead className={s.head}>
        <tr className={s.row}>
          <th className={s.element}>Type</th>
          <th className={s.element}>Amount</th>
          <th className={s.element}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={s.row} key={item.id}>
            <td className={s.element}>{item.type}</td>
            <td className={s.element}>{item.amount}</td>
            <td className={s.element}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
