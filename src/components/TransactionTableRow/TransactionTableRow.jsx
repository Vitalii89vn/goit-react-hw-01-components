import PropTypes from "prop-types";
import css from "./TransactionTableRow.module.css";

const TransactionTableRow = ({ type, amount, currency }) => {
    return (
        <tr >
            <td className={css.row}>{type}</td>
            <td className={css.row}>{amount}</td>
            <td className={css.row}>{currency}</td>
        </tr>
    )
};
TransactionTableRow.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
};
export default TransactionTableRow;