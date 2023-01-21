import css from "./TransactionTableHead.module.css";
const TransactionTableHead = () => {
    return (
        <thead>
    <tr>
      <th className={css.thead}>Type</th>
      <th className={css.thead}>Amount</th>
      <th className={css.thead}>Currency</th>
    </tr>
  </thead>

    )
}
export default TransactionTableHead;