import TransactionTableRow from "components/TransactionTableRow/TransactionTableRow";

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

export default TransactionTableBody;
