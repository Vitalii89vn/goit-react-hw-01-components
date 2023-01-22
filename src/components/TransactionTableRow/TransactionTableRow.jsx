import PropTypes from "prop-types";
import css from "./TransactionTableRow.module.css";

const TransactionTableRow = ({ type, amount, currency }) => {
    return (
        <tr className={css.row}>
            <td className={css.td}>{type}</td>
            <td className={css.td}>{amount}</td>
            <td className={css.td}>{currency}</td>
        </tr>
    )
};
TransactionTableRow.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
};
export default TransactionTableRow;