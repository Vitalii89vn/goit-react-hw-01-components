import PropTypes, { arrayOf } from "prop-types";
import TransactionTableHead from "components/TransactionTableHead/TransactionTableHead";
import TransactionTableBody from "components/TransactionTableBody/TransactionTableBody";
import css from "./TransactionHistory.module.css";

const TransactionHistory = (({ transactions }) => {
    return (
    <table className={css.transactionhistory}>
            <TransactionTableHead />
            <TransactionTableBody
                  transactions = {transactions}
                />        
        </table>
    )
}
);
TransactionHistory.propTypes = {
    transactions: arrayOf(PropTypes.exact({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string
  })).isRequired
}
export default TransactionHistory;