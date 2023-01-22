import PropTypes, { arrayOf } from "prop-types";
import TransactionTableHead from "components/TransactionTableHead/TransactionTableHead";
import TransactionTableBody from "components/TransactionTableBody/TransactionTableBody";
import css from "./TransactionHistory.module.css";

const TransactionHistory = (({ items }) => {
    return (
    <table className={css.transactionhistory}>
            <TransactionTableHead />
            <TransactionTableBody
                  items = {items}
                />        
        </table>
    )
}
);
TransactionHistory.propTypes = {
    items: arrayOf(PropTypes.exact({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string
  })).isRequired
}
export default TransactionHistory;