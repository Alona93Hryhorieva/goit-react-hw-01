import TransactionHistoryItems from '../TransactionHistoryItem/TransactionHistoryItem';
import css from './TransactionHistory.module.css'

export default function TransactionHistory({items}) {
    return (
        <table className={css.container}>
            <thead className={css.list}>
             <tr>
                 <th className={css.title}>Type</th>
                 <th className={css.title}>Amount</th>
                 <th className={css.title}>Currency</th>
              </tr>
            </thead>

            <tbody className={css.containerBody}>
                {items.map((item) => (
                     <tr key={item.id} className={css.line}>
                         <TransactionHistoryItems item = {item}/>
                     </tr>
                    )
                )}
            </tbody>
        </table>
    ) 
}