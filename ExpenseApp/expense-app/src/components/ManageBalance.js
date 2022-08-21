import React from "react";

function ManageBalance(props) {
  const { dataStatement, deleteValueInStatement } = props;

  return (
    <div className="balance">
      {dataStatement !== null
        ? dataStatement.map((item, index) => {
            return (
              <div className="balanceItem">
                <div
                  style={{
                    width: "10%",
                  }}
                >
                  <img
                    className="imgBalance"
                    src={
                      item.type === "Income" ? "./profits.png" : "./expense.png"
                    }
                  />
                </div>
                <div className="balanceItemInfo">
                  <p className="categoryItem">{item.category}</p>
                  <p className="amountAndDate">{`${item.amount} - ${item.date}`}</p>
                </div>
                <img
                  className="imgBalanceDelete"
                  src="/recycle-bin.png"
                  onClick={() => {
                    deleteValueInStatement(index);
                  }}
                />
              </div>
            );
          })
        : null}
    </div>
  );
}

export default ManageBalance;
