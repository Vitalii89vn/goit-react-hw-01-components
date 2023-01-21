import TransactionTableRow from "components/TransactionTableRow/TransactionTableRow";
import css from "./TransactionTableBody.module.css";

const TransactionTableBody = ({ transactions }) => {
    return (
        <tbody className={css.body}>
            {transactions.map(({ id, type, amount, currency }) => (
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
