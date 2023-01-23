import PropTypes, { arrayOf } from "prop-types";
import css from "./TransactionHistory.module.css";

const TransactionHistory = (({ items }) => {
    return (
        <table className={css.transactionhistory}>
            <thead>
                <tr>
                <th className={css.thead}>Type</th>
                <th className={css.thead}>Amount</th>
                <th className={css.thead}>Currency</th>
                </tr>
            </thead>
            <tbody>
            {items.map(({ id, type, amount, currency }) => (
            <tr className={css.row} key={id}>
                <td className={css.td}>{type}</td>
                <td className={css.td}>{amount}</td>
                <td className={css.td}>{currency}</td>
            </tr>
            ))}
        </tbody>        
        </table>
    )
}
);
TransactionHistory.propTypes = {
    items: arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
  })).isRequired,
}
export default TransactionHistory;