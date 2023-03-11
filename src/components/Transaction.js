import { useState } from "react";
export function Transaction({ txHash, alchemy }) {
  const [tx, setTx] = useState();
  async function onClick() {
    setTx(await alchemy.core.getTransactionReceipt(txHash));
    console.log(tx);
  }

  return (
    <div>
      <a onClick={onClick}>{txHash}</a>
      {tx && (
        <div>
          from: {tx.from} | to: {tx.to} | type: {tx.type}
        </div>
      )}
      <br />
    </div>
  );
}
