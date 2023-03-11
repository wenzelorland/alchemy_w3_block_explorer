import { useEffect, useState } from "react";
import { Transaction } from "./Transaction";

export function Block({ blockNumber, alchemy }) {
  const [block, setBlock] = useState({});
  useEffect(() => {
    async function getBlock() {
      const block = await alchemy.core.getBlockWithTransactions(blockNumber);
      setBlock(block);
    }

    getBlock();
  }, [blockNumber]);

  return (
    <div>
      <h4>Block properties: </h4>
      <div>
        {Object.keys(block)
          .filter((key) => key !== "transactions")
          .map((key) => {
            return (
              <div>
                <b>{key}</b> : {JSON.stringify(block[key])}
              </div>
            );
          })}
      </div>
      <h4>Transactions: </h4>

      <div>
        {block.transactions?.map((tx) => {
          return <Transaction txHash={tx.hash} alchemy={alchemy} />;
        })}
      </div>
    </div>
  );
}
