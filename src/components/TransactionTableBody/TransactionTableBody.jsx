import TransactionTableRow from "components/TransactionTableRow/TransactionTableRow";
import PropTypes, { arrayOf } from "prop-types";

const TransactionTableBody = ({ items }) => {
    return (
        <tbody>
            {items.map(({ id, type, amount, currency }) => (
                <TransactionTableRow
                    key={id}
                    type={type}
                    amount={amount}
                    currency={currency}
                />
                ))}
        </tbody>
    )
}

TransactionTableBody.propTypes = {
    items: arrayOf(PropTypes.exact({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string
  })).isRequired
}
export default TransactionTableBody;
