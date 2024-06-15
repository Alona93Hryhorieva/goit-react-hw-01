import css from './TransactionHistoryItems.module.css'

export default function TransactionHistoryItems({
    item: { type, amount, currency }
}) {
    return (
        <>
            <td className={css.name}>{type}</td>
            <td className={css.name}>{amount}</td>
            <td className={css.name}>{currency}</td>
        </>
    )
}