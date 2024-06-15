import TransactionHistoryItems from '../TransactionHistoryItem/TransactionHistoryItem';

export default function TransactionHistory({items}) {
    return (
        <table>
            <thead>
             <tr>
                 <th>Type</th>
                 <th>Amount</th>
                 <th>Currency</th>
              </tr>
            </thead>

           <tbody>
                {items.map((item) => (
                    <tr key={item.id}>
                     <TransactionHistoryItems item = {item}/>
                   </tr>
                ))
                }
            </tbody>
        </table>
    ) 
}