export default function TransactionHistoryItems({
    item: { type, amount, currency }
}) {
    return (
        <div>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </div>
    
    )
}