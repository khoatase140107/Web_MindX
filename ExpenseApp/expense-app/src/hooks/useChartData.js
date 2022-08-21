import { useEffect, useState } from "react";

const usePieChartData = (props) => {
  const { dataStatement, type } = props;
  const [mySeries, setMySeries] = useState([]);
  const [myLable, setMyLable] = useState([]);

  useEffect(() => {
    if (dataStatement !== null) {
      const newMySeries = [];
      const newMyLable = [];
      for (const item of dataStatement) {
        if (item.type === type) {
          if (newMySeries.length === 0 && newMyLable.length === 0) {
            newMySeries.push(+item.amount);
            newMyLable.push(item.category);
          } else {
            const findIndexMyLable = newMyLable.findIndex(
              (itemFind) => itemFind === item.category
            );
            if (findIndexMyLable === -1) {
              newMySeries.push(+item.amount);
              newMyLable.push(item.category);
            } else {
              newMySeries[findIndexMyLable] += +item.amount;
            }
          }
        }
      }
      setMySeries(newMySeries);
      setMyLable(newMyLable);
    }
  }, [dataStatement]);

  return { mySeries, myLable };
};

export default usePieChartData;
