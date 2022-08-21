import React, { useEffect, useState } from "react";
import Categories from "./Categories";

const initialState = {
  type: "Income",
  category: "Business",
  amount: 0,
  date: null,
};

function CreateStatement(props) {
  const [dataStatement, setDataStateMent] = useState(initialState);
  const { addValueInStatement } = props;
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setDataStateMent({
      ...dataStatement,
      [name]: value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    addValueInStatement(dataStatement);
    setDataStateMent({ ...initialState });
  };
  return (
    <form onSubmit={onSubmitHandler} className="form">
      <div className="formUp">
        <div className="itemCreate">
          <label htmlFor="type">Type</label>
          <select
            id="type"
            name="type"
            value={dataStatement.type}
            onChange={onChangeHandler}
          >
            <option>Income</option>
            <option>Expense</option>
          </select>
        </div>
        <div className="itemCreate">
          <label htmlFor="category">Category</label>
          <Categories
            value={dataStatement.category}
            onChangeHandler={onChangeHandler}
          />
        </div>
      </div>
      <div className="formUp">
        <div className="itemCreate">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            name="amount"
            value={dataStatement.amount}
            onChange={onChangeHandler}
          />
        </div>
        <div className="itemCreate">
          <label htmlFor="date">Date</label>
          <input
            className="dateCreate"
            type="date"
            id="date"
            name="date"
            value={dataStatement.date !== null ? dataStatement.date : ""}
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <input className="btnSubmit" type="submit" value="create" />
    </form>
  );
}

export default CreateStatement;
