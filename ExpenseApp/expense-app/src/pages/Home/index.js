import React, { useState } from "react";
import PieChart from "../../components/Chart";
import CreateStatement from "../../components/CreateStatement";
import ManageBalance from "../../components/ManageBalance";
import { addStatementAPI } from "../../services/CategoryAPI";
import { EXPENSE, INCOME } from "../../utils/types";
import style from "./styles/style.css";
function Home(props) {
  const [dataStatement, setDataStatement] = useState(null);
  const calcSum = () => {
    if (dataStatement !== null) {
      const calcSumAmount = dataStatement.reduce((a, b, index) => {
        if (b.type === INCOME) return a + +b.amount;
        else return a - +b.amount;
      }, 0);
      return calcSumAmount;
    }
    return 0;
  };
  const addValueInStatement = async (data) => {
    try {
      const response = await addStatementAPI(data);
      if (response.status === 201) {
        const newDataStatement = [];
        if (dataStatement !== null) newDataStatement.push(...dataStatement);
        newDataStatement.push(data);
        setDataStatement(newDataStatement);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const deleteValueInStatement = (index) => {
    const newDataStatement = [...dataStatement];
    newDataStatement.splice(index, 1);
    setDataStatement(newDataStatement);
  };
  return (
    <div className="homePage">
      <div className="income">
        <h1
          style={{
            padding: "0 20px",
          }}
        >
          Income
        </h1>
        <PieChart dataStatement={dataStatement} type="Income" />
      </div>
      <div className="expenseTracker">
        <h1 className="nameExpense">Expense Tracker</h1>
        <p className="total">Total Balance ${calcSum()}</p>
        <p className="titleAdd">Add Your Statement</p>
        <CreateStatement addValueInStatement={addValueInStatement} />
        <ManageBalance
          dataStatement={dataStatement}
          deleteValueInStatement={deleteValueInStatement}
        />
      </div>
      <div className="expense">
        <h1
          style={{
            padding: "0 20px",
          }}
        >
          Expense
        </h1>
        <PieChart dataStatement={dataStatement} type={EXPENSE} />
      </div>
    </div>
  );
}

export default Home;
